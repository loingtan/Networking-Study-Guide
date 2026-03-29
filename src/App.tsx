import { useState, useEffect, useRef } from 'react';
import { chapters } from './data/chapters';
import { detailedChapters } from './data/detailedChapters';
import { getAllBackendTopics } from './data/backendContent';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  HelpCircle, 
  BookMarked,
  GraduationCap,
  Menu,
  X,
  CheckCircle,
  Circle,
  Lightbulb,
  FileText,
  Calculator,
  Network,
  Layers,
  ArrowRight,
  Eye,
  EyeOff,
  Server,
  Code,
  Shield,
  Briefcase,
  GitCompare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

// Mermaid diagram component
function MermaidDiagram({ code, title }: { code: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return;
      
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          },
          sequence: {
            useMaxWidth: true,
            wrap: true
          }
        });
        
        containerRef.current.innerHTML = '';
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, code);
        containerRef.current.innerHTML = svg;
      } catch (err) {
        setError('Failed to render diagram');
        console.error(err);
      }
    };
    
    renderDiagram();
  }, [code]);

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 overflow-x-auto">
      <p className="text-sm font-medium text-slate-600 mb-3">{title}</p>
      <div ref={containerRef} className="flex justify-center" />
    </div>
  );
}

function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [selectedBackendTopic, setSelectedBackendTopic] = useState<string | null>(null);

  const selectedChapter = chapters.find(c => c.id === selectedChapterId);
  const detailedChapter = detailedChapters.find(c => c.id === selectedChapterId);
  const allBackendTopics = getAllBackendTopics();

  const toggleChapterComplete = (chapterId: number) => {
    setCompletedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredChapters = chapters.filter(ch => 
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progress = (completedChapters.length / chapters.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col",
        sidebarOpen ? "w-80" : "w-0 overflow-hidden"
      )}>
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Network className="h-6 w-6 text-blue-600" />
            <h1 className="font-bold text-lg text-slate-900">Networking Study Guide</h1>
          </div>
          
          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Progress</span>
              <span className="font-medium text-blue-600">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {completedChapters.length} of {chapters.length} chapters completed
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredChapters.map((chapter) => (
              <div
                key={chapter.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSelectedChapterId(chapter.id);
                  setShowQuiz(false);
                  setShowAnswers(false);
                  setQuizAnswers({});
                  setActiveTab('content');
                  setSelectedBackendTopic(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedChapterId(chapter.id);
                    setShowQuiz(false);
                    setShowAnswers(false);
                    setQuizAnswers({});
                    setActiveTab('content');
                    setSelectedBackendTopic(null);
                  }
                }}
                className={cn(
                  "w-full text-left p-3 rounded-lg mb-1 transition-colors cursor-pointer",
                  selectedChapterId === chapter.id && !selectedBackendTopic
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-slate-50 border border-transparent"
                )}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleChapterComplete(chapter.id);
                    }}
                    className="mt-0.5"
                  >
                    {completedChapters.includes(chapter.id) ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-300" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "font-medium text-sm",
                      selectedChapterId === chapter.id && !selectedBackendTopic ? "text-blue-700" : "text-slate-700"
                    )}>
                      Chapter {chapter.id}
                    </p>
                    <p className="text-xs text-slate-500 truncate">{chapter.title}</p>
                  </div>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform",
                    selectedChapterId === chapter.id && !selectedBackendTopic ? "text-blue-600 rotate-90" : "text-slate-300"
                  )} />
                </div>
              </div>
            ))}
            
            {/* Backend Topics Section */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Backend Engineering
              </p>
              {allBackendTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedBackendTopic(topic.id);
                    setActiveTab('backend');
                  }}
                  className={cn(
                    "w-full text-left p-3 rounded-lg mb-1 transition-colors",
                    selectedBackendTopic === topic.id
                      ? "bg-purple-50 border border-purple-200"
                      : "hover:bg-slate-50 border border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {topic.category === 'protocols' && <Code className="h-4 w-4 text-purple-500" />}
                    {topic.category === 'architecture' && <Server className="h-4 w-4 text-purple-500" />}
                    {topic.category === 'security' && <Shield className="h-4 w-4 text-purple-500" />}
                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        "font-medium text-sm",
                        selectedBackendTopic === topic.id ? "text-purple-700" : "text-slate-700"
                      )}>
                        {topic.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div>
              {selectedBackendTopic ? (
                <>
                  <h2 className="text-xl font-bold text-slate-900">
                    {allBackendTopics.find(t => t.id === selectedBackendTopic)?.title}
                  </h2>
                  <p className="text-sm text-slate-500">
                    Backend Engineering - {allBackendTopics.find(t => t.id === selectedBackendTopic)?.category}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-slate-900">{selectedChapter?.title}</h2>
                  <p className="text-sm text-slate-500">{selectedChapter?.subtitle}</p>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!selectedBackendTopic && (
              <Button
                variant={showQuiz ? "default" : "outline"}
                onClick={() => setShowQuiz(!showQuiz)}
                className="gap-2"
              >
                <HelpCircle className="h-4 w-4" />
                {showQuiz ? 'Study Mode' : 'Practice Quiz'}
              </Button>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {selectedBackendTopic ? (
            // Backend Topic Content
            <BackendTopicContent 
              topic={allBackendTopics.find(t => t.id === selectedBackendTopic)!} 
            />
          ) : !showQuiz ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 flex-wrap h-auto">
                <TabsTrigger value="content" className="gap-2">
                  <BookMarked className="h-4 w-4" />
                  Content
                </TabsTrigger>
                <TabsTrigger value="detailed" className="gap-2">
                  <Layers className="h-4 w-4" />
                  Deep Dive
                </TabsTrigger>
                <TabsTrigger value="diagrams" className="gap-2">
                  <Network className="h-4 w-4" />
                  Diagrams
                </TabsTrigger>
                <TabsTrigger value="keyterms" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Key Terms
                </TabsTrigger>
                <TabsTrigger value="formulas" className="gap-2">
                  <Calculator className="h-4 w-4" />
                  Formulas
                </TabsTrigger>
                <TabsTrigger value="images" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Images
                </TabsTrigger>
                <TabsTrigger value="code" className="gap-2">
                  <Code className="h-4 w-4" />
                  Go Code
                </TabsTrigger>
                <TabsTrigger value="comparisons" className="gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Compare
                </TabsTrigger>
                <TabsTrigger value="realworld" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  Real-World
                </TabsTrigger>
                <TabsTrigger value="compdiagrams" className="gap-2">
                  <GitCompare className="h-4 w-4" />
                  Visual Compare
                </TabsTrigger>
              </TabsList>

              {/* Content Tab - Basic Overview */}
              <TabsContent value="content" className="space-y-6">
                {selectedChapter?.topics.map((topic) => (
                  <Card key={topic.id} className="overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-xs">
                          {topic.id}
                        </Badge>
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-2 mb-4">
                        {topic.content.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {topic.subtopics && topic.subtopics.length > 0 && (
                        <div className="space-y-4 mt-4">
                          {topic.subtopics.map((subtopic, si) => (
                            <div key={si} className="bg-slate-50 rounded-lg p-4">
                              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                <Lightbulb className="h-4 w-4 text-amber-500" />
                                {subtopic.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {subtopic.content.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="text-slate-400 mt-1">◦</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Detailed Tab - Deep Dive */}
              <TabsContent value="detailed" className="space-y-6">
                {detailedChapter && (
                  <>
                    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Chapter Overview
                        </h3>
                        <p className="text-blue-800">{detailedChapter.overview}</p>
                      </CardContent>
                    </Card>

                    {detailedChapter.sections.map((section) => (
                      <Card key={section.id} className="overflow-hidden">
                        <CardHeader 
                          className="bg-slate-50 border-b border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors"
                          onClick={() => toggleSection(section.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge variant="outline">{section.id}</Badge>
                              <CardTitle className="text-lg">{section.title}</CardTitle>
                            </div>
                            {expandedSections.includes(section.id) ? (
                              <EyeOff className="h-4 w-4 text-slate-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-slate-400" />
                            )}
                          </div>
                          <CardDescription className="mt-2">{section.content}</CardDescription>
                        </CardHeader>
                        
                        {(expandedSections.includes(section.id) || expandedSections.length === 0) && (
                          <CardContent className="p-6 space-y-4">
                            {section.subsections.map((sub, idx) => (
                              <div key={idx} className="border-l-4 border-blue-300 pl-4 py-2">
                                <h4 className="font-semibold text-slate-900 mb-2">{sub.title}</h4>
                                
                                {sub.important && (
                                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
                                    <p className="text-sm text-amber-800 flex items-start gap-2">
                                      <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                      <span><strong>Key Point:</strong> {sub.important}</span>
                                    </p>
                                  </div>
                                )}
                                
                                <ul className="space-y-1.5">
                                  {sub.bullets.map((bullet, bi) => (
                                    <li key={bi} className="flex items-start gap-2 text-sm text-slate-700">
                                      <ArrowRight className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </>
                )}
              </TabsContent>

              {/* Diagrams Tab */}
              <TabsContent value="diagrams" className="space-y-6">
                {detailedChapter?.diagrams.map((diagram) => (
                  <Card key={diagram.id} className="overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Network className="h-5 w-5 text-blue-600" />
                        {diagram.title}
                      </CardTitle>
                      <CardDescription>{diagram.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <MermaidDiagram code={diagram.mermaidCode} title="" />
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Key Terms Tab */}
              <TabsContent value="keyterms">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Key Terms & Definitions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {(detailedChapter?.keyConcepts || selectedChapter?.keyTerms || []).map((term, index) => (
                        <div 
                          key={index} 
                          className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
                        >
                          <h4 className="font-semibold text-slate-900 mb-1">
                            {(term as any).term}
                          </h4>
                          <p className="text-slate-600 text-sm">
                            {(term as any).definition}
                          </p>
                          {(term as any).details && (
                            <p className="text-slate-500 text-xs mt-2">{(term as any).details}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Formulas Tab */}
              <TabsContent value="formulas">
                <div className="space-y-4">
                  {detailedChapter?.formulas.map((formula, index) => (
                    <Card key={index}>
                      <CardHeader className="bg-slate-50">
                        <CardTitle className="text-lg">{formula.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-center text-lg">
                          {formula.formula}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Explanation:</p>
                          <p className="text-slate-600">{formula.explanation}</p>
                        </div>
                        {formula.example && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p className="text-sm font-medium text-green-800 mb-1">Example:</p>
                            <p className="text-green-700 text-sm">{formula.example}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Images Tab */}
              <TabsContent value="images" className="space-y-6">
                {detailedChapter?.images && detailedChapter.images.length > 0 ? (
                  detailedChapter.images.map((image, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Eye className="h-5 w-5 text-blue-600" />
                          {image.caption}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full rounded-lg border border-slate-200"
                        />
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Eye className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">No images available for this chapter.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Code Examples Tab */}
              <TabsContent value="code" className="space-y-6">
                {detailedChapter?.codeExamples && detailedChapter.codeExamples.length > 0 ? (
                  detailedChapter.codeExamples.map((example, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Code className="h-5 w-5 text-blue-600" />
                          {example.title}
                        </CardTitle>
                        <CardDescription>{example.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="bg-slate-900 p-4 overflow-x-auto">
                          <pre className="text-sm font-mono text-green-400">
                            <code>{example.code}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Code className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">No code examples available for this chapter.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Comparisons Tab */}
              <TabsContent value="comparisons" className="space-y-6">
                {detailedChapter?.comparisons && detailedChapter.comparisons.length > 0 ? (
                  detailedChapter.comparisons.map((comparison, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <ArrowRight className="h-5 w-5 text-blue-600" />
                          {comparison.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="text-left p-4 font-semibold text-slate-700">Aspect</th>
                                <th className="text-left p-4 font-semibold text-blue-700 bg-blue-50/50">{comparison.itemA}</th>
                                <th className="text-left p-4 font-semibold text-green-700 bg-green-50/50">{comparison.itemB}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {comparison.points.map((point, pidx) => (
                                <tr key={pidx} className="border-b border-slate-100 hover:bg-slate-50">
                                  <td className="p-4 font-medium text-slate-700">{point.aspect}</td>
                                  <td className="p-4 text-slate-600 bg-blue-50/30">{point.itemAValue}</td>
                                  <td className="p-4 text-slate-600 bg-green-50/30">{point.itemBValue}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <ArrowRight className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">No comparisons available for this chapter.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Real-World Applications Tab */}
              <TabsContent value="realworld" className="space-y-6">
                {detailedChapter?.realWorldApplications && detailedChapter.realWorldApplications.length > 0 ? (
                  detailedChapter.realWorldApplications.map((app, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-amber-600" />
                            {app.title}
                          </CardTitle>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {app.role}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-slate-700 mb-1">Scenario:</p>
                          <p className="text-slate-600">{app.scenario}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Application:</p>
                          <p className="text-slate-600">{app.application}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 rounded-lg p-4">
                            <p className="text-sm font-medium text-green-800 mb-2">Best Practices:</p>
                            <ul className="space-y-1">
                              {app.bestPractices.map((bp, bidx) => (
                                <li key={bidx} className="text-sm text-green-700 flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                  {bp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <p className="text-sm font-medium text-blue-800 mb-2">Tools:</p>
                            <div className="flex flex-wrap gap-2">
                              {app.tools.map((tool, tidx) => (
                                <Badge key={tidx} variant="outline" className="bg-white">
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Briefcase className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">No real-world applications available for this chapter.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Visual Comparison Diagrams Tab */}
              <TabsContent value="compdiagrams" className="space-y-6">
                {detailedChapter?.comparisonDiagrams && detailedChapter.comparisonDiagrams.length > 0 ? (
                  detailedChapter.comparisonDiagrams.map((diagram, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <GitCompare className="h-5 w-5 text-purple-600" />
                          {diagram.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <MermaidDiagram code={diagram.mermaidCode} title={diagram.title} />
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <GitCompare className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">No visual comparison diagrams available for this chapter.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Practice Questions - Chapter {selectedChapter?.id}
                </h3>
                <Button 
                  variant="outline" 
                  onClick={() => setShowAnswers(!showAnswers)}
                >
                  {showAnswers ? 'Hide Answers' : 'Show All Answers'}
                </Button>
              </div>

              {selectedChapter?.practiceQuestions.map((q, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Question {index + 1}</Badge>
                      <Badge variant="secondary" className="capitalize">
                        {q.type.replace('-', ' ')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <p className="font-medium text-slate-900">{q.question}</p>
                    
                    {q.options && (
                      <div className="space-y-2">
                        {q.options.map((option, oi) => (
                          <button
                            key={oi}
                            onClick={() => setQuizAnswers({ ...quizAnswers, [index]: option })}
                            className={cn(
                              "w-full text-left p-3 rounded-lg border transition-all",
                              quizAnswers[index] === option
                                ? "border-blue-500 bg-blue-50"
                                : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                            )}
                          >
                            <span className="font-medium text-slate-700">{String.fromCharCode(65 + oi)}.</span>{' '}
                            <span className="text-slate-700">{option}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {!q.options && (
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-500 italic">
                          This is a short-answer question. Think about your answer, then reveal to check.
                        </p>
                      </div>
                    )}

                    {(showAnswers || quizAnswers[index]) && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="font-semibold text-green-800 mb-1">Answer:</p>
                        <p className="text-green-700">{q.answer}</p>
                        <Separator className="my-3 bg-green-200" />
                        <p className="font-semibold text-green-800 mb-1">Explanation:</p>
                        <p className="text-sm text-green-700">{q.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {detailedChapter?.practiceProblems && (
                <>
                  <Separator className="my-8" />
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Advanced Practice Problems
                  </h3>
                  
                  {detailedChapter.practiceProblems.map((problem, index) => (
                    <Card key={`adv-${index}`}>
                      <CardHeader className="bg-slate-50">
                        <CardTitle className="text-base flex items-center gap-2">
                          <Calculator className="h-4 w-4" />
                          Problem {index + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <p className="text-slate-900">{problem.question}</p>
                        
                        {problem.hint && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                            <p className="text-sm text-amber-800">
                              <strong>Hint:</strong> {problem.hint}
                            </p>
                          </div>
                        )}
                        
                        <Accordion type="single" collapsible>
                          <AccordionItem value="solution">
                            <AccordionTrigger className="text-blue-600">
                              Show Solution
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
                                <p className="text-green-800">{problem.solution}</p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </>
              )}
            </div>
          )}
        </main>

        {/* Footer Navigation */}
        {!selectedBackendTopic && (
          <footer className="bg-white border-t border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                disabled={selectedChapterId === 1}
                onClick={() => {
                  setSelectedChapterId(selectedChapterId - 1);
                  setShowQuiz(false);
                  setShowAnswers(false);
                  setQuizAnswers({});
                }}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous Chapter
              </Button>
              
              <span className="text-sm text-slate-500">
                Chapter {selectedChapterId} of {chapters.length}
              </span>
              
              <Button
                variant="outline"
                disabled={selectedChapterId === chapters.length}
                onClick={() => {
                  setSelectedChapterId(selectedChapterId + 1);
                  setShowQuiz(false);
                  setShowAnswers(false);
                  setQuizAnswers({});
                }}
                className="gap-2"
              >
                Next Chapter
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

// Backend Topic Content Component
function BackendTopicContent({ topic }: { topic: any }) {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-2 flex items-center gap-2">
            <Server className="h-5 w-5" />
            Overview
          </h3>
          <p className="text-purple-800">{topic.content}</p>
        </CardContent>
      </Card>

      {topic.subtopics.map((sub: any, idx: number) => (
        <Card key={idx} className="overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-lg">{sub.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {sub.important && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-sm text-amber-800 flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Key Point:</strong> {sub.important}</span>
                </p>
              </div>
            )}
            
            <ul className="space-y-2">
              {sub.bullets.map((bullet: string, bi: number) => (
                <li key={bi} className="flex items-start gap-2 text-slate-700">
                  <ArrowRight className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {sub.codeExample && (
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-700 mb-2">{sub.codeExample.title}</p>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{sub.codeExample.code}</code>
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {topic.diagrams && topic.diagrams.map((diagram: any) => (
        <Card key={diagram.id} className="overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-lg flex items-center gap-2">
              <Network className="h-5 w-5 text-purple-600" />
              {diagram.title}
            </CardTitle>
            <CardDescription>{diagram.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <MermaidDiagram code={diagram.mermaidCode} title="" />
          </CardContent>
        </Card>
      ))}

      {topic.codeExamples && topic.codeExamples.map((example: any, idx: number) => (
        <Card key={idx}>
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-base flex items-center gap-2">
              <Code className="h-4 w-4" />
              {example.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{example.code}</code>
            </pre>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default App;
