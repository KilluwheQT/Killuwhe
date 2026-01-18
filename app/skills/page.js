'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import SkillBar from '@/components/SkillBar';
import { skills } from '@/data/data';

export default function SkillsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Eslint', 'SSQL Server', 'Webpack',
              'Vite',  'Socket.io', 'Vercel', 
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
