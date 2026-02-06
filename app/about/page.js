'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Coffee, Code, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import { personalInfo } from '@/data/data';

export default function AboutPage() {
  const highlights = [
    { icon: Code, label: '5+ Years Experience', description: 'Building web applications' },
    { icon: Coffee, label: '10+ Projects', description: 'Delivered successfully' },
    { icon: Lightbulb, label: 'Problem Solver', description: 'Creative solutions' },
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about who I am and what drives me"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/projects/whe.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            <AnimatedSection>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Hello! I&apos;m {personalInfo.name}
              </h3>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {personalInfo.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Info Cards */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Available for hire</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Highlights */}
        <AnimatedSection className="mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{item.label}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
