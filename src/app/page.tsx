"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, GraduationCap, MessageCircle, Mountain, Shield, Waves } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Fred Kahu"
          button={{
            text: "Contact",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Master the Waters with Fred Kahu"
          description="Professional kayaking instructor and adventure guide with over 15 years of experience in whitewater, sea kayaking, and rescue techniques."
          tag="Kayaking Expert"
          tagIcon={Waves}
          buttons={[
            {
              text: "View Experience",
              href: "about"
            },
            {
              text: "Book Session",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/32465070/pexels-photo-32465070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fred Kahu kayaking at sunset"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Passionate kayaking professional dedicated to sharing the art of paddling through expert instruction, safety training, and unforgettable water adventures across all skill levels."
          buttons={[
            {
              text: "My Credentials",
              href: "feature"
            },
            {
              text: "Get In Touch",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Expertise & Specializations"
          description="Comprehensive kayaking skills and certifications across multiple disciplines"
          tag="Skills"
          tagIcon={Award}
          features={[
            {
              title: "Whitewater Rapids",
              description: "Expert navigation of Class I-V rapids with advanced rescue techniques and safety protocols",
              icon: Mountain
            },
            {
              title: "Sea Kayaking",
              description: "Open ocean expeditions, coastal touring, and advanced sea kayaking techniques in all conditions",
              icon: Waves
            },
            {
              title: "Instruction & Training",
              description: "Certified instructor providing personalized lessons for beginners to advanced paddlers",
              icon: GraduationCap
            },
            {
              title: "Safety & Rescue",
              description: "Swift water rescue certified with wilderness first aid and emergency response training",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Students Say"
          description="Real feedback from kayakers who've trained with Fred"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Beginner Paddler",
              company: "Adventure Seeker",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34407205/pexels-photo-34407205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              content: "Fred's patient teaching style and deep knowledge made learning kayaking an incredible experience. His focus on safety while building confidence is exactly what I needed as a beginner."
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Intermediate Kayaker",
              company: "Weekend Warrior",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2157168/pexels-photo-2157168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              content: "The advanced techniques Fred taught me took my kayaking to the next level. His expertise in reading water and understanding river dynamics is unmatched."
            },
            {
              id: "3",
              name: "Jenny Park",
              role: "Advanced Student",
              company: "Whitewater Enthusiast",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5756664/pexels-photo-5756664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              content: "Fred's rescue training program is comprehensive and potentially life-saving. His real-world experience and teaching ability make complex techniques accessible and memorable."
            },
            {
              id: "4",
              name: "David Chen",
              role: "Rescue Trainee",
              company: "Safety Focused",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5868243/pexels-photo-5868243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              content: "The confidence and skills I gained from Fred's instruction have made me a much safer and more capable kayaker. His passion for the sport is truly inspiring."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Kayaking Journey?"
          description="Get in touch to book a session, ask questions, or discuss custom training programs tailored to your skill level and goals."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "experience",
              type: "text",
              placeholder: "Your Kayaking Experience Level",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your kayaking goals and any questions you have...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/9065578/pexels-photo-9065578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Kayaking equipment and gear"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Private Lessons",
                  href: "contact"
                },
                {
                  label: "Group Training",
                  href: "contact"
                },
                {
                  label: "Safety Courses",
                  href: "contact"
                }
              ]
            },
            {
              title: "Experience",
              items: [
                {
                  label: "About Fred",
                  href: "about"
                },
                {
                  label: "Certifications",
                  href: "feature"
                },
                {
                  label: "Testimonials",
                  href: "testimonials"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Fred Kahu Kayaking"
        />
      </div>
    </ThemeProvider>
  );
}