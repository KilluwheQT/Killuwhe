'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/data';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured)
      : projects.filter(p => !p.featured);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of projects I've worked on, from web apps to tools and experiments"
        />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'featured', 'other'].map((filterOption) => (
            <motion.button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-lg font-medium text-sm capitalize transition-colors ${
                filter === filterOption
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterOption === 'all' ? 'All Projects' : filterOption === 'featured' ? 'Featured' : 'Other'}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 mt-8"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </div>
  );
}
