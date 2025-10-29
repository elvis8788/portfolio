import { useState, useEffect, useRef } from 'react'
import { EyeIcon, CodeBracketIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// 导入项目截图
import workShop from '../assets/projects/supervisionSystem/workshop.png'
import detail from '../assets/projects/supervisionSystem/detail.png'
import roster from '../assets/projects/supervisionSystem/roster.png'

import dashboard from '../assets/projects/psb/dashboard.png'
import audit from '../assets/projects/psb/audit.png'
import approve from '../assets/projects/psb/approve.png'

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const projects = [
        {
            id: 1,
            title: 'Integrated Supervision System',
            period: 'Sep 2022 – Aug 2025',
            description: 'Built an integrated platform for disciplinary inspection, supervision, Party committee tours, and internal auditing, enabling cross-department collaboration.',
            tech: ['Vue 3', 'Vuex', 'TDesign', 'Git', 'Postman/Swagger'],
            features: [
                'Developed core modules (Office Responsibilities, Decision Support)',
                'Implemented UI rendering, routing, and animations',
                'Built data visualization dashboards for monitoring',
                'Improved performance with Lazy Loading and Code Splitting'
            ],
            screenshots: [
                {
                    id: 1,
                    title: 'Dashboard Overview',
                    description: 'Main dashboard with data visualization and key metrics',
                    image: workShop
                },
                {
                    id: 2,
                    title: 'Analytics Panel',
                    description: 'Analytics and reporting interface for decision making',
                    image: detail
                },
                {
                    id: 3,
                    title: 'Talent Management',
                    description: 'Comprehensive talent tracking and development management system',
                    image: roster
                }
            ],
            codeSnippets: [
                {
                    id: 1,
                    title: 'analyticsComponent',
                    language: 'vue',
                    code: `const cardList = ref([]);
const editRow = ref({});
const auditDetail = ref({});
const ReviewPageRef = ref();
onMounted(() => {
  isZY.value = !window.location.hash.includes("jjsxys");
});
const isDisOprate = ref(false);
const stepName = ref("");
const exportLoading = ref(false); // Export Loading Status
watch(
  () => userStore.projectId,
  (val) => {
    if (!val) return;
    if (userStore.projectId) {
      stepName.value = userStore.project?.projectStepName;
      isDisOprate.value =
        stepName.value == "No Initiated" || stepName.value == "Project Archived"
          ? true
          : false;
    }
    listParams.value.projectId = val;
    listParams.value.queryType = window.location.hash.includes("jjsxys")
      ? "1"
      : "2";
    handoverStore.getPrjTeamMemberList({
      projectId: userStore.projectId,
    });
    getCardList();
    if (showBlock.value !== "mainPage") showBlock.value = "mainPage";
  },
  { immediate: true }
);
// Forward to Receiving Unit
async function handleReplace(data) {
  try {
    loading.value = true;
    await service.handoverList.sendReplaceObject({
      id: data.id,
      menuCode: "NS_JJSXJJ_MATERIAL_BATCHCHECK",
    });
    MessagePlugin.success("Send Successful");
    getCardList();
    ReviewPageRef.value.getMaterialBatchDetail();
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
}`
                },
                {
                    id: 2,
                    title: 'talentManagement',
                    language: 'vue',
                    code: `<template>
  <t-form
    ref="formRef"
    class="dynamic-form"
    :labelAlign="labelAlign"
    :data="formData"
    :rules="rules"
  >
    <t-form-item
      v-for="item in formItems"
      :key="item.prop"
      :label="item.label"
      :name="item.prop"
      :style="
        item.style
          ? item.style
          : min-width: calc(100% / colNum); width: calc(100% / colNum)
      "
    >
      <component
        v-model="formData[item.otherModel ? item.otherModel : item.prop]"
        :is="getComponent(item)"
        v-bind="item.fieldProps"
      />
    </t-form-item>
  </t-form>
</template>`
                },
            ]
        },
        {
            id: 2,
            title: 'PSB Oversight Platform',
            period: 'May 2022 – Jan 2025',
            description: 'Developed a comprehensive oversight platform integrating data and resources to enhance operational efficiency.',
            tech: ['Vue.js', 'Vuex', 'TDesign', 'Git', 'Postman/Swagger', 'WebSocket'],
            features: [
                'Led development of Officer Dashboard and Decision Support Platform',
                'Implemented real-time data updates using WebSocket',
                'Built modules for Case Supervision and Project Analysis',
                'Designed RBAC-based authentication for secure access control'
            ],
            screenshots: [
                {
                    id: 1,
                    title: 'Officer Dashboard',
                    description: 'Main oversight dashboard with key metrics and alerts',
                    image: dashboard
                },
                {
                    id: 2,
                    title: 'Audit Flow',
                    description: 'Streamlined audit process with step-by-step guidance and tracking',
                    image: audit
                },
                {
                    id: 3,
                    title: 'Approve Flow',
                    description: 'Efficient approval workflow with automated notifications and status updates',
                    image: approve
                }
            ],
            codeSnippets: [
                {
                    id: 1,
                    title: 'auditFlow',
                    language: 'vue',
                    code: `getData() {
      const __steps = this.getBeforeSteps();
      if (__steps.length === 0) return;
      if (
        this.operateType === "see" &&
        this.currentRow.__tableStatus !== "pendingApproval"
      ) {
        this.stepList = __steps.slice();
      } else {
        switch (this.userInfo.name) {
          case USER_TYPE.ACCREDITED:
            this.stepList = (
              this.tab === "2" ? auditStep : accreditedStep
            ).call(this, {
              processList: __steps.slice(),
            });
            break;
          case USER_TYPE.UNIT:
            this.stepList = (this.tab === "2" ? unitFilingStep : unitStep).call(
              this,
              { processList: __steps.slice() }
            );
            break;
          case USER_TYPE.AUDIT:
            this.stepList = (auditStep).call(this, {
              processList: __steps.slice(),
            });
        }
      }
      const finishList = lodashFilter(
        this.stepList,
        (v) => v.status === "finish"
      );
      if (finishList.length >= 4) {
        this.$nextTick(() => {
          this.$refs.znStepsRef.setOpen(false);
        });
        return;
      }
    },`
                },
                {
                    id: 2,
                    title: 'approveFlow',
                    language: 'vue',
                    code: `flowList() {
      const { node, problemFlg } = this.flowNode;
      if (!node) return [];
      const nameList = ["Inquiry", "Verification", "Investigation", "CaseClosed"];
      const res = [];
      this.currentRow.caseFlowHistoryVOS.map((v, idx) => {
        if (idx === this.currentRow.caseFlowHistoryVOS.length - 1) {
          // Registration and Filing --- The data from registration and filing will not be stored in caseFlowHistoryVOS, therefore, special handling of process data is required.
          if (problemFlg) {
            res.push({
              label: nameList[+v.flowNode - 1],
              iconName: "check-circle",
              iconType: "tIcon",
              status: "finish",
            });
            const complete = node === "6";
            res.push({
              label: "Registration",
              iconName: complete ? "check-circle" : "audit-report",
              status: complete ? "finish" : undefined,
              iconType: complete ? "tIcon" : undefined,
            });
            complete &&
              res.push({
                label: "Finished",
                iconName: "project",
              });
          } else {
            res.push(...flowNodeObj[v.flowNode]);
          }
        } else {
          res.push({
            label: nameList[+v.flowNode - 1],
            iconName: "check-circle",
            iconType: "tIcon",
            status: "finish",
          });
        }
      });
      return res;
    },`
                }
            ]
        },
    ]

    return (
        <section id="projects" ref={sectionRef} className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
                <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
                    Here are some of the key projects I've worked on throughout my career.
                </p>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <ProjectDetail
                            key={project.id}
                            project={project}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

// 项目详情组件
const ProjectDetail = ({ project, index, isVisible }) => {
    const [activeTab, setActiveTab] = useState('preview')

    return (
        <div
            className={`bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <div className="p-6 border-b border-slate-700/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-purple-400 font-medium">{project.period}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm border border-slate-600/50"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-sm text-slate-300 flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 标签页切换 */}
            <div className="border-b border-slate-700/50">
                <div className="flex">
                    <button
                        className={`flex items-center px-6 py-3 border-b-2 transition-colors ${
                            activeTab === 'preview'
                                ? 'border-purple-500 text-purple-400'
                                : 'border-transparent text-slate-400 hover:text-slate-300'
                        }`}
                        onClick={() => setActiveTab('preview')}
                    >
                        <EyeIcon className="h-5 w-5 mr-2" />
                        Preview
                    </button>
                    <button
                        className={`flex items-center px-6 py-3 border-b-2 transition-colors ${
                            activeTab === 'code'
                                ? 'border-purple-500 text-purple-400'
                                : 'border-transparent text-slate-400 hover:text-slate-300'
                        }`}
                        onClick={() => setActiveTab('code')}
                    >
                        <CodeBracketIcon className="h-5 w-5 mr-2" />
                        Code
                    </button>
                </div>
            </div>

            {/* 内容区域 */}
            <div className="p-6">
                {activeTab === 'preview' && <ProjectPreview project={project} />}
                {activeTab === 'code' && <ProjectCode project={project} />}
            </div>
        </div>
    )
}

// 项目预览组件（截图展示）
const ProjectPreview = ({ project }) => {
    const [activeImage, setActiveImage] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % project.screenshots.length)
    }

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
    }

    return (
        <div>
            <div className="mb-6 relative">
                {/* 主截图展示 */}
                <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 relative">
                    {/* 浏览器UI模拟 */}
                    <div className="absolute top-0 left-0 right-0 bg-slate-800 h-8 flex items-center px-4 z-10">
                        <div className="flex space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 text-center text-xs text-slate-400">
                            {project.title} - {project.screenshots[activeImage].title}
                        </div>
                    </div>

                    {/* 截图内容 */}
                    <div className="pt-8">
                        <div className="relative group">
                            <img
                                src={project.screenshots[activeImage].image}
                                alt={project.screenshots[activeImage].title}
                                className="w-full h-auto max-h-96 object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* 导航箭头 */}
                            {project.screenshots.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ChevronLeftIcon className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* 截图信息 */}
                <div className="mt-4 text-center">
                    <h4 className="text-white font-medium">{project.screenshots[activeImage].title}</h4>
                    <p className="text-slate-300 text-sm mt-1">{project.screenshots[activeImage].description}</p>
                    <p className="text-slate-400 text-xs mt-1">
                        {activeImage + 1} / {project.screenshots.length}
                    </p>
                </div>
            </div>

            {/* 截图缩略图 */}
            {project.screenshots.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                        <button
                            key={screenshot.id}
                            className={`bg-slate-700/50 rounded-lg overflow-hidden border transition-all screenshot-thumbnail ${
                                activeImage === index
                                    ? 'border-purple-500 shadow-lg'
                                    : 'border-slate-600 hover:border-slate-500'
                            }`}
                            onClick={() => setActiveImage(index)}
                        >
                            <img
                                src={screenshot.image}
                                alt={screenshot.title}
                                className="w-full h-20 object-cover"
                            />
                            <p className="text-xs text-slate-300 text-left p-2 truncate">{screenshot.title}</p>
                        </button>
                    ))}
                </div>
            )}

            {/* 全屏模态框 */}
            {isFullscreen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={() => setIsFullscreen(false)}
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative">
                            <img
                                src={project.screenshots[activeImage].image}
                                alt={project.screenshots[activeImage].title}
                                className="max-w-full max-h-screen object-contain"
                            />

                            {project.screenshots.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                                    >
                                        <ChevronLeftIcon className="h-6 w-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                                    >
                                        <ChevronRightIcon className="h-6 w-6" />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="text-center mt-4 text-white">
                            <h3 className="text-xl font-semibold">{project.screenshots[activeImage].title}</h3>
                            <p className="text-slate-300 mt-1">{project.screenshots[activeImage].description}</p>
                            <p className="text-slate-400 text-sm mt-2">
                                {activeImage + 1} / {project.screenshots.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// 项目代码组件
const ProjectCode = ({ project }) => {
    const [activeSnippet, setActiveSnippet] = useState(0)
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(project.codeSnippets[activeSnippet].code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div>
            {/* 代码片段选择器 */}
            <div className="mb-4">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                    {project.codeSnippets.map((snippet, index) => (
                        <button
                            key={snippet.id}
                            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                                activeSnippet === index
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                            }`}
                            onClick={() => setActiveSnippet(index)}
                        >
                            {snippet.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* 代码展示 */}
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex space-x-2 mr-4">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-slate-400 text-sm">
              {project.codeSnippets[activeSnippet].title}.{project.codeSnippets[activeSnippet].language}
            </span>
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="text-slate-400 hover:text-slate-300 text-sm flex items-center"
                    >
                        {copied ? (
                            <>
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy
                            </>
                        )}
                    </button>
                </div>
                <div className="p-4 overflow-x-auto">
          <pre className="text-slate-300 text-sm font-mono whitespace-pre">
            {project.codeSnippets[activeSnippet].code}
          </pre>
                </div>
            </div>

            <div className="mt-4 text-sm text-slate-400">
                <p>This is a code snippet from the {project.title} project showing key implementation details.</p>
            </div>
        </div>
    )
}

export default Projects