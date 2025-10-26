import { useState, useEffect, useRef } from 'react'

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
            title: 'Hebei Port Integrated Supervision System',
            period: 'Sep 2022 – Aug 2025',
            description: 'Built an integrated platform for disciplinary inspection, supervision, Party committee tours, and internal auditing, enabling cross-department collaboration.',
            tech: ['Vue 3', 'Vuex', 'TDesign', 'Git', 'Postman/Swagger'],
            features: [
                'Developed core modules (Office Responsibilities, Decision Support)',
                'Implemented UI rendering, routing, and animations',
                'Built data visualization dashboards for monitoring',
                'Improved performance with Lazy Loading and Code Splitting'
            ]
        },
        {
            title: 'PSB Oversight Platform',
            period: 'May 2022 – Jan 2025',
            description: 'Developed a comprehensive oversight platform integrating data and resources to enhance operational efficiency.',
            tech: ['Vue.js', 'Vuex', 'TDesign', 'Git', 'Postman/Swagger'],
            features: [
                'Led development of Officer Dashboard and Decision Support Platform',
                'Implemented real-time data updates using WebSocket',
                'Built modules for Case Supervision and Project Analysis',
                'Designed RBAC-based authentication for secure access control'
            ]
        },
        {
            title: 'Inspection Management Platform',
            period: 'Mar 2020 – Jan 2023',
            description: 'Created a unified inspection management platform to standardize workflows and digitize processes.',
            tech: ['Vue.js', 'Vuex', 'Element UI', 'Git', 'Postman/Swagger'],
            features: [
                'Developed analytics dashboards with real-time synchronization',
                'Built core rectification modules',
                'Implemented robust frontend-backend integration',
                'Delivered closed-loop digital workflow'
            ]
        }
    ]

    return (
        <section id="projects" ref={sectionRef} className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
                <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
                    Here are some of the key projects I've worked on throughout my career.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-700 transform ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            } hover:scale-105 hover:border-purple-500/50 hover:shadow-xl`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                                            <span className="text-2xl font-bold text-white">P</span>
                                        </div>
                                        <span className="text-white font-medium">{project.title.split(' ')[0]}</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-xs text-slate-300 px-2 py-1 rounded">
                                    {project.period}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-300 mb-4">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs border border-slate-600/50">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
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
                        </div>
                    ))}
                </div>

                {/* Code Snippets Section */}
                <div className={`mt-20 transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <h3 className="text-2xl font-bold text-center mb-8">Code Examples</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
                            <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-slate-400 text-sm ml-4">ComponentExample.vue</span>
                            </div>
                            <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">
{`<template>
  <div class="data-card">
    <h3>{{ title }}</h3>
    <div class="chart-container">
      <LineChart :data="chartData" />
    </div>
    <div class="stats">
      <StatItem 
        v-for="stat in stats" 
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LineChart from './LineChart.vue'
import StatItem from './StatItem.vue'

const props = defineProps({
  title: String,
  initialData: Array
})

const chartData = ref([])
const stats = ref([])

onMounted(() => {
  // Initialize data
  chartData.value = props.initialData
  calculateStats()
})

const calculateStats = () => {
  // Calculate statistics logic
}
</script>`}
                </pre>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
                            <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-slate-400 text-sm ml-4">Dashboard.jsx</span>
                            </div>
                            <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">
{`import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';
import DataChart from './DataChart';
import StatCard from './StatCard';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});
  const { lastMessage } = useWebSocket('ws://api.example.com/ws');
  
  useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data);
      setMetrics(prev => ({
        ...prev,
        [data.type]: data.value
      }));
    }
  }, [lastMessage]);

  return (
    <div className="dashboard-grid">
      <div className="header">
        <h1>Real-time Monitoring</h1>
        <div className="last-update">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
      
      <div className="stats-row">
        {Object.entries(metrics).map(([key, value]) => (
          <StatCard 
            key={key}
            title={key}
            value={value}
          />
        ))}
      </div>
      
      <DataChart data={metrics} />
    </div>
  );
};

export default Dashboard;`}
                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects