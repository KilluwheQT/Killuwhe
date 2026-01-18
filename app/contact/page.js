'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, ExternalLink, Facebook } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { personalInfo, socialLinks } from '@/data/data';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? Feel free to reach out!"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                      <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Email</p>
                      <p className="font-medium">{personalInfo.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Location</p>
                      <p className="font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {social.name}
                        </span>
                        <ExternalLink className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8 bg-gradient-to-br from-primary-500 to-primary-700 text-white"
            >
              <div className="h-full flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Let&apos;s Work Together
                </h3>
                <p className="text-primary-100 mb-6">
                  I&apos;m currently available for freelance work and full-time opportunities. 
                  If you have a project that you want to get started, think you need my help 
                  with something, or just want to say hi, then get in touch.
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors w-fit"
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Currently available for new projects
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
