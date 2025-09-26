import React from 'react';
import { createRoot } from 'react-dom/client';

const svgIcons = {
  arabic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 4H5.5C4.12 4 3 5.12 3 6.5V17.5C3 18.88 4.12 20 5.5 20H18.5C19.88 20 21 18.88 21 17.5V6.5C21 5.12 19.88 4 18.5 4zM9 17v-4.5H7V11h5v1.5H10V17H9zm5-2.5c0 .83-.67 1.5-1.5 1.5S11 15.33 11 14.5s.67-1.5 1.5-1.5S14 13.67 14 14.5z"/></svg>,
  math: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4-4h2v2H7v-2zm4 0h2v2h-2v-2zm4-4h-2V7h2v2z"/></svg>,
  science: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a6.5 6.5 0 0 0-4.6 11.1L3 18.1c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l4.6-4.6c2.8 1.8 6.5 1 8.2-1.7S19.1 7.1 16.3 5C15.2 3.5 13.7 2.5 12 2.5zM12 4a5 5 0 0 1 3.5 8.5 5 5 0 0 1-8.5-3.5A5 5 0 0 1 12 4z"/></svg>,
  islamic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v2h18V7L12 2zM5 10v9h14v-9H5zm4 7H7v-5h2v5zm4 0h-2v-5h2v5zm4 0h-2v-5h2v5z"/></svg>,
  english: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25 5.09c-.01.01-.01.02-.02.03l-4.23 8.46c-.05.11-.08.23-.08.36v.03c0 .34.28.62.62.62h.9c.2 0 .38-.11.48-.28l.8-1.6h3.4l.8 1.6c.1.17.28.28.48.28h.9c.34 0 .62-.28.62-.62v-.03c0-.13-.03-.25-.08-.36L14.25 5.09zM12 7.18l1.63 3.27h-3.26L12 7.18zM4 20h16v2H4z"/></svg>,
  socialStudies: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93L15.87 5H14v.07zm3.5 1.46c.92.83 1.64 1.86 2.13 3.01h-2.13v-3.01zm-3.5 3.01H14V12h2.12c-.05.5-.14.99-.27 1.48l-1.85-1.48zm0 3.52 1.85 1.48c.13.49.22.98.27 1.48H14v-2.96zm3.63 4.46c-.49 1.15-1.21 2.18-2.13 3.01v-3.01h2.13z"/></svg>,
  physicsChemistry: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 11h-1.3c-.2-1.3-.8-2.5-1.5-3.5L16.4 6 15 4.6l-1.9 1.9C12.3 6.2 11.2 5.5 10 5.2V4h-2v1.2c-1.2.3-2.3 1-3.1 1.9L3 5.2 1.6 6.6l1.2 1.2c-.7 1-1.3 2.2-1.5 3.5H0v2h1.3c.2 1.3.8 2.5 1.5 3.5L1.6 18 3 19.4l1.9-1.9c.8.9 1.9 1.6 3.1 1.9V21h2v-1.2c-1.2-.3-2.3-1-3.1-1.9l1.9 1.9 1.4-1.4-1.2-1.2c.7-1 1.3-2.2 1.5-3.5H20v-2h-2zm-8 5.5c-2.5 0-4.5-2-4.5-4.5S7.5 7.5 10 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/></svg>,
  biology: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 12c0-2.3-1.2-4.4-3-5.5.5-1 .5-2.2 0-3.2-1.2-2.3-4-3.8-7-3.8s-5.8 1.5-7 3.8c-.5 1-.5 2.2 0 3.2 1.8 1.1 3 3.1 3 5.5s-1.2 4.4-3 5.5c-.5 1-.5 2.2 0 3.2 1.2 2.3 4 3.8 7 3.8s5.8-1.5 7-3.8c.5-1 .5-2.2 0-3.2-1.8-1.1-3-3.1-3-5.5z"/></svg>,
  historyGeography: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93L15.87 5H14v.07zm3.5 1.46c.92.83 1.64 1.86 2.13 3.01h-2.13v-3.01zm-3.5 3.01H14V12h2.12c-.05.5-.14.99-.27 1.48l-1.85-1.48zm0 3.52 1.85 1.48c.13.49.22.98.27 1.48H14v-2.96zm3.63 4.46c-.49 1.15-1.21 2.18-2.13 3.01v-3.01h2.13z"/></svg>,
  physics: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/><ellipse cx="12" cy="12" rx="3" ry="7" transform="rotate(-45 12 12)"/><ellipse cx="12" cy="12" rx="3" ry="7" transform="rotate(45 12 12)"/></svg>,
  chemistry: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 11h-1.3c-.2-1.3-.8-2.5-1.5-3.5L16.4 6 15 4.6l-1.9 1.9C12.3 6.2 11.2 5.5 10 5.2V4h-2v1.2c-1.2.3-2.3 1-3.1 1.9L3 5.2 1.6 6.6l1.2 1.2c-.7 1-1.3 2.2-1.5 3.5H0v2h1.3c.2 1.3.8 2.5 1.5 3.5L1.6 18 3 19.4l1.9-1.9c.8.9 1.9 1.6 3.1 1.9V21h2v-1.2c-1.2-.3-2.3-1-3.1-1.9l1.9 1.9 1.4-1.4-1.2-1.2c.7-1 1.3-2.2 1.5-3.5H20v-2h-2zm-8 5.5c-2.5 0-4.5-2-4.5-4.5S7.5 7.5 10 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/></svg>,
};

const classesData = [
  {
    "icon": "١",
    "number": "1",
    "title": "الصف الأول",
    "description": "معلمون ومعلمات ذوو خبرة بأساليب تدريس تفاعلية ومبتكرة وفق للمنهاج السوري المعتمد.",
    "color": "#00796B",
    "subjects": "5 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "أساسيات القراءة والكتابة والنطق السليم للحروف وتكوين الجمل البسيطة."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "تعلم الأرقام، العد، العمليات الحسابية البسيطة، والتعرف على الأشكال الهندسية الأساسية."
      },
      {
        "name": "العلوم",
        "iconKey": "science",
        "description": "استكشاف العالم الطبيعي من حولنا، التعرف على الكائنات الحية والظواهر الطبيعية البسيطة."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      }
    ]
  },
  {
    "icon": "٢",
    "number": "2",
    "title": "الصف الثاني",
    "description": "معلمون ومعلمات ذوو خبرة بأساليب تدريس تفاعلية ومبتكرة وفق للمنهاج السوري المعتمد.",
    "color": "#ef5350",
    "subjects": "5 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "أساسيات القراءة والكتابة والنطق السليم للحروف وتكوين الجمل البسيطة."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "تعلم الأرقام، العد، العمليات الحسابية البسيطة، والتعرف على الأشكال الهندسية الأساسية."
      },
      {
        "name": "العلوم",
        "iconKey": "science",
        "description": "استكشاف العالم الطبيعي من حولنا، التعرف على الكائنات الحية والظواهر الطبيعية البسيطة."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      }
    ]
  },
  {
    "icon": "٣",
    "number": "3",
    "title": "الصف الثالث",
    "description": "معلمون ومعلمات ذوو خبرة بأساليب تدريس تفاعلية ومبتكرة وفق للمنهاج السوري المعتمد.",
    "color": "#66bb6a",
    "subjects": "6 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "أساسيات القراءة والكتابة والنطق السليم للحروف وتكوين الجمل البسيطة."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "تعلم الأرقام، العد، العمليات الحسابية البسيطة، والتعرف على الأشكال الهندسية الأساسية."
      },
      {
        "name": "العلوم",
        "iconKey": "science",
        "description": "استكشاف العالم الطبيعي من حولنا، التعرف على الكائنات الحية والظواهر الطبيعية البسيطة."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      },
      {
        "name": "الاجتماعيات",
        "iconKey": "socialStudies",
        "description": "مزيج من التاريخ والجغرافيا والتربية الوطنية لفهم المجتمع والعالم."
      }
    ]
  },
  {
    "icon": "٤",
    "number": "4",
    "title": "الصف الرابع",
    "description": "منهج متكامل يركز على بناء أساس قوي في المواد الأساسية وتنمية المهارات الإبداعية.",
    "color": "#9575cd",
    "subjects": "6 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "تطوير مهارات القراءة والكتابة، تحليل النصوص، وقواعد الإعراب الأساسية."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "العمليات على الكسور والأعداد العشرية، المساحة والمحيط، ومقدمة في الجبر."
      },
      {
        "name": "العلوم",
        "iconKey": "science",
        "description": "دراسة النظم البيئية، خصائص المادة، الطاقة، والكهرباء البسيطة."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      },
      {
        "name": "الاجتماعيات",
        "iconKey": "socialStudies",
        "description": "مزيج من التاريخ والجغرافيا والتربية الوطنية لفهم المجتمع والعالم."
      }
    ]
  },
  {
    "icon": "٥",
    "number": "5",
    "title": "الصف الخامس",
    "description": "مرحلة انتقالية هامة نحو الإعداد للمرحلة الإعدادية مع التركيز على مهارات البحث والتحليل.",
    "color": "#ff7043",
    "subjects": "6 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "تطوير مهارات القراءة والكتابة، تحليل النصوص، وقواعد الإعراب الأساسية."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "العمليات على الكسور والأعداد العشرية، المساحة والمحيط، ومقدمة في الجبر."
      },
      {
        "name": "العلوم",
        "iconKey": "science",
        "description": "دراسة النظم البيئية، خصائص المادة، الطاقة، والكهرباء البسيطة."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      },
      {
        "name": "الاجتماعيات",
        "iconKey": "socialStudies",
        "description": "مزيج من التاريخ والجغرافيا والتربية الوطنية لفهم المجتمع والعالم."
      }
    ]
  },
  {
    "icon": "٦",
    "number": "6",
    "title": "الصف السادس",
    "description": "نهاية المرحلة الابتدائية، مع مراجعات شاملة وتأهيل الطلاب لامتحانات القبول للمدارس الإعدادية.",
    "color": "#42a5f5",
    "subjects": "6 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "تطوير مهارات القراءة والكتابة، تحليل النصوص، وقواعد الإعراب الأساسية."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "العمليات على الكسور والأعداد العشرية، المساحة والمحيط، ومقدمة في الجبر."
      },
      {
        "name": "العلوم",
        "iconKey": "science",
        "description": "دراسة النظم البيئية، خصائص المادة، الطاقة، والكهرباء البسيطة."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      },
      {
        "name": "الاجتماعيات",
        "iconKey": "socialStudies",
        "description": "مزيج من التاريخ والجغرافيا والتربية الوطنية لفهم المجتمع والعالم."
      }
    ]
  },
  {
    "icon": "٧",
    "number": "7",
    "title": "الصف السابع",
    "description": "بداية المرحلة الإعدادية، مع التركيز على المواد العلمية والأدبية بشكل أعمق.",
    "color": "#26c6da",
    "subjects": "7 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "دراسة متعمقة للنصوص الأدبية، القواعد النحوية المتقدمة، والبلاغة."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "الجبر، الهندسة التحليلية، حساب المثلثات، والتحضير لمسائل الامتحانات النهائية."
      },
      {
        "name": "الفيزياء والكيمياء",
        "iconKey": "physicsChemistry",
        "description": "مبادئ الميكانيكا، الكهرباء، التفاعلات الكيميائية، والجدول الدوري."
      },
      {
        "name": "علم الأحياء",
        "iconKey": "biology",
        "description": "دراسة الخلية، الوراثة، علم البيئة، وتشريح الكائنات الحية."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      },
      {
        "name": "التاريخ والجغرافيا",
        "iconKey": "historyGeography",
        "description": "دراسة الحضارات القديمة، التاريخ المعاصر، وتضاريس العالم ومناخه."
      }
    ]
  },
  {
    "icon": "٨",
    "number": "8",
    "title": "الصف الثامن",
    "description": "توسيع المعارف في مختلف المواد وتنمية مهارات التفكير النقدي وحل المشكلات.",
    "color": "#7e57c2",
    "subjects": "7 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "دراسة متعمقة للنصوص الأدبية، القواعد النحوية المتقدمة، والبلاغة."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "الجبر، الهندسة التحليلية، حساب المثلثات، والتحضير لمسائل الامتحانات النهائية."
      },
      {
        "name": "الفيزياء والكيمياء",
        "iconKey": "physicsChemistry",
        "description": "مبادئ الميكانيكا، الكهرباء، التفاعلات الكيميائية، والجدول الدوري."
      },
      {
        "name": "علم الأحياء",
        "iconKey": "biology",
        "description": "دراسة الخلية، الوراثة، علم البيئة، وتشريح الكائنات الحية."
      },
      {
        "name": "التربية الإسلامية",
        "iconKey": "islamic",
        "description": "تعلم أركان الإسلام والإيمان، قصص الأنبياء، وحفظ السور من القرآن الكريم."
      },
      {
        "name": "اللغة الإنجليزية",
        "iconKey": "english",
        "description": "مقدمة في اللغة الإنجليزية، تعلم الحروف الأبجدية، الكلمات الأساسية، وتطوير مهارات المحادثة."
      },
      {
        "name": "التاريخ والجغرافيا",
        "iconKey": "historyGeography",
        "description": "دراسة الحضارات القديمة، التاريخ المعاصر، وتضاريس العالم ومناخه."
      }
    ]
  },
  {
    "icon": "٩",
    "number": "9",
    "title": "الصف التاسع",
    "description": "سنة حاسمة للتحضير لامتحان شهادة التعليم الأساسي، مع برامج مكثفة ومراجعات دورية.",
    "color": "#ffa726",
    "subjects": "5 مواد",
    "subjectDetails": [
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "دراسة متعمقة للنصوص الأدبية، القواعد النحوية المتقدمة، والبلاغة."
      },
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "الجبر، الهندسة التحليلية، حساب المثلثات، والتحضير لمسائل الامتحانات النهائية."
      },
      {
        "name": "الفيزياء والكيمياء",
        "iconKey": "physicsChemistry",
        "description": "مبادئ الميكانيكا، الكهرباء، التفاعلات الكيميائية، والجدول الدوري."
      },
      {
        "name": "علم الأحياء",
        "iconKey": "biology",
        "description": "دراسة الخلية، الوراثة، علم البيئة، وتشريح الكائنات الحية."
      },
      {
        "name": "التاريخ والجغرافيا",
        "iconKey": "historyGeography",
        "description": "دراسة الحضارات القديمة، التاريخ المعاصر، وتضاريس العالم ومناخه."
      }
    ]
  },
  {
    "icon": "١٠",
    "number": "10",
    "title": "الصف العاشر",
    "description": "بداية المرحلة الثانوية، حيث يتم تقديم مفاهيم متقدمة في المواد العلمية والأدبية وتوجيه الطلاب نحو مساراتهم المستقبلية.",
    "color": "#546e7a",
    "subjects": "0 مادة",
    "subjectDetails": []
  },
  {
    "icon": "١١",
    "number": "11",
    "title": "الحادي عشر - علمي",
    "description": "تخصص في المواد العلمية كالرياضيات والفيزياء والكيمياء، تحضيراً لشهادة الثانوية العامة (الفرع العلمي).",
    "color": "#29b6f6",
    "subjects": "0 مادة",
    "subjectDetails": []
  },
  {
    "icon": "١١",
    "number": "11",
    "title": "الحادي عشر - أدبي",
    "description": "تخصص في المواد الأدبية كالفلسفة والتاريخ والجغرافيا، تحضيراً لشهادة الثانوية العامة (الفرع الأدبي).",
    "color": "#ec407a",
    "subjects": "0 مادة",
    "subjectDetails": []
  },
  {
    "icon": "١٢",
    "number": "12",
    "title": "الثاني عشر - علمي",
    "description": "السنة النهائية للتحضير لامتحان الشهادة الثانوية (البكالوريا)، مع تركيز مكثف على المواد العلمية الأساسية.",
    "color": "#0288d1",
    "subjects": "5 مواد",
    "subjectDetails": [
      {
        "name": "الرياضيات",
        "iconKey": "math",
        "description": "التحليل الرياضي، الجبر الخطي، الأعداد العقدية، والاحتمالات."
      },
      {
        "name": "الفيزياء",
        "iconKey": "physics",
        "description": "دراسة معمقة في الميكانيك، الأمواج، الكهرباء والمغناطيسية، والفيزياء الحديثة."
      },
      {
        "name": "الكيمياء",
        "iconKey": "chemistry",
        "description": "الكيمياء العضوية، الكيمياء غير العضوية، الكيمياء التحليلية، والكيمياء الفيزيائية."
      },
      {
        "name": "علم الأحياء",
        "iconKey": "biology",
        "description": "دراسة الخلية، الوراثة، علم البيئة، وتشريح الكائنات الحية."
      },
      {
        "name": "اللغة العربية",
        "iconKey": "arabic",
        "description": "تحليل نصوص أدبية عليا، دراسة معمقة في البلاغة والنقد الأدبي."
      }
    ]
  },
  {
    "icon": "١٢",
    "number": "12",
    "title": "الثاني عشر - أدبي",
    "description": "سنة التخرج الحاسمة للفرع الأدبي، مع مراجعات شاملة للمواد الأدبية والفلسفية استعداداً لامتحان البكالوريا.",
    "color": "#d81b60",
    "subjects": "0 مادة",
    "subjectDetails": []
  }
];

const coursesData = [
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف الأول التعويضي",
      "details": "يشمل (العربية، الرياضيات، العلوم)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "أساسيات القراءة والكتابة والنطق السليم للحروف.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "تعلم الأرقام، العد، والعمليات الحسابية البسيطة.", "iconKey": "math" },
        { "name": "العلوم", "description": "استكشاف العالم الطبيعي والتعرف على الكائنات الحية.", "iconKey": "science" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف الثاني التعويضي",
      "details": "يشمل (العربية، الرياضيات، العلوم)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "تطوير مهارات القراءة والكتابة وتكوين الجمل.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "الجمع، الطرح، ومبادئ الضرب والقسمة.", "iconKey": "math" },
        { "name": "العلوم", "description": "دورة حياة النباتات والحيوانات وحالات المادة.", "iconKey": "science" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف الثالث التعويضي",
      "details": "يشمل (العربية، الرياضيات، العلوم)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "القراءة المتقدمة، قواعد الإعراب البسيطة، وكتابة الفقرات.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "الضرب، القسمة، الكسور البسيطة، والهندسة الأساسية.", "iconKey": "math" },
        { "name": "العلوم", "description": "النظام الشمسي، جسم الإنسان، والطاقة.", "iconKey": "science" }
      ]
    },
     {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف الرابع التعويضي",
      "details": "يشمل (العربية، الرياضيات، العلوم، اجتماعيات)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "تحليل النصوص، التعبير الكتابي، وقواعد نحوية متقدمة.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "العمليات على الكسور والأعداد العشرية، المساحة والمحيط.", "iconKey": "math" },
        { "name": "العلوم", "description": "النظم البيئية، خصائص المادة، والكهرباء البسيطة.", "iconKey": "science" },
        { "name": "الاجتماعيات", "description": "جغرافية سوريا وتاريخ الحضارات القديمة.", "iconKey": "socialStudies" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف الخامس التعويضي",
      "details": "يشمل (العربية، الرياضيات، العلوم، اجتماعيات)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "الكتابة الإبداعية، البلاغة المبسطة، ودراسة الشعر.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "النسبة المئوية، حل المسائل متعددة الخطوات، والهندسة الفراغية.", "iconKey": "math" },
        { "name": "العلوم", "description": "الكائنات الدقيقة، دورات الحياة المعقدة، والتفاعلات الكيميائية.", "iconKey": "science" },
        { "name": "الاجتماعيات", "description": "التاريخ الإسلامي وجغرافية العالم العربي.", "iconKey": "socialStudies" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف السادس التعويضي",
      "details": "يشمل (العربية، الرياضيات، العلوم، اجتماعيات)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "مراجعة شاملة للقواعد، كتابة المقالات، والنقد الأدبي البسيط.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "مقدمة في الجبر، المعادلات البسيطة، وتحليل البيانات.", "iconKey": "math" },
        { "name": "العلوم", "description": "الوراثة، الضوء والصوت، والموارد الطبيعية.", "iconKey": "science" },
        { "name": "الاجتماعيات", "description": "التاريخ الحديث وجغرافية القارات.", "iconKey": "socialStudies" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف السابع التعويضي",
      "details": "يشمل (العربية، رياضيات، فيزياء وكيمياء، علوم أحياء)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "قواعد الإعراب المتقدمة، دراسة النصوص الأدبية المتنوعة.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "الأعداد الصحيحة والنسبية، التناسب، والهندسة الإحداثية.", "iconKey": "math" },
        { "name": "الفيزياء والكيمياء", "description": "مبادئ القوة والحركة، حالات المادة، والتغيرات الكيميائية.", "iconKey": "physicsChemistry" },
        { "name": "علم الأحياء", "description": "تصنيف الكائنات الحية، وظائف الخلية، وصحة الإنسان.", "iconKey": "biology" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّc",
      "title": "برنامج الصف الثامن التعويضي",
      "details": "يشمل (العربية، رياضيات، فيزياء وكيمياء، علوم أحياء)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "البلاغة العربية، كتابة الأبحاث، وتحليل القصائد.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "حل المعادلات والمتباينات، نظرية فيثاغورس، وحساب الحجوم.", "iconKey": "math" },
        { "name": "الفيزياء والكيمياء", "description": "الكهرباء والمغناطيسية، الجدول الدوري، وأنواع التفاعلات.", "iconKey": "physicsChemistry" },
        { "name": "علم الأحياء", "description": "الجهاز العصبي، الوراثة المتقدمة، والنظم البيئية.", "iconKey": "biology" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z\"/></svg>",
      "gradient": "gradient-compensatory",
      "category": "التعليم التعويضي المسرّع",
      "title": "برنامج الصف التاسع التعويضي",
      "details": "يشمل (العربية، رياضيات، فيزياء وكيمياء، علوم أحياء)",
      "color": "#00796B",
      "subjectDetails": [
        { "name": "اللغة العربية", "description": "مراجعة شاملة لشهادة التعليم الأساسي، النصوص والبلاغة.", "iconKey": "arabic" },
        { "name": "الرياضيات", "description": "الجبر والهندسة التحليلية استعداداً للامتحان النهائي.", "iconKey": "math" },
        { "name": "الفيزياء والكيمياء", "description": "مراجعة مكثفة للميكانيكا، الكهرباء، والكيمياء العامة.", "iconKey": "physicsChemistry" },
        { "name": "علم الأحياء", "description": "مراجعة الوراثة، علم البيئة، وتشريح الكائنات الحية.", "iconKey": "biology" }
      ]
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6.5 16.5H5V11h1.5v5.5zm5-5.25L10.25 15H9l-2-6h1.75l1.25 4 1.25-4H13l-2 6h-1.25l1.25-3.25zM19 12.75h-1.5v2.75h-1.5v-6H19c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5zm0-1.5v-1.5h-1.5V11h1.5v.25z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الأول (للأطفال): الحروف والأصوات",
      "details": "مقدمة ممتعة للحروف العربية وأصواتها مع أنشطة تفاعلية وأغاني.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6.5 16.5H5V11h1.5v5.5zm5-5.25L10.25 15H9l-2-6h1.75l1.25 4 1.25-4H13l-2 6h-1.25l1.25-3.25zM19 12.75h-1.5v2.75h-1.5v-6H19c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5zm0-1.5v-1.5h-1.5V11h1.5v.25z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الثاني (للأطفال): الكلمات والجمل",
      "details": "بناء المفردات الأساسية وتكوين جمل بسيطة لوصف الأشياء اليومية.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6.5 16.5H5V11h1.5v5.5zm5-5.25L10.25 15H9l-2-6h1.75l1.25 4 1.25-4H13l-2 6h-1.25l1.25-3.25zM19 12.75h-1.5v2.75h-1.5v-6H19c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5zm0-1.5v-1.5h-1.5V11h1.5v.25z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الثالث (للأطفال): القصص والحوارات",
      "details": "فهم وقراءة قصص قصيرة والمشاركة في حوارات بسيطة لتعزيز الثقة.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15 4v7H5.17l-.59.59L3 13.17V4h12m1-2H3c-1.1 0-2 .9-2 2v12l4-4h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm5 4h-2v9H6v2c0 1.1.9 2 2 2h11l4 4V7c0-1.1-.9-2-2-2z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الأول (لليافعين): محادثات يومية",
      "details": "تعلم التحيات، التعريف بالنفس، وعبارات أساسية للتواصل في مواقف الحياة اليومية.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15 4v7H5.17l-.59.59L3 13.17V4h12m1-2H3c-1.1 0-2 .9-2 2v12l4-4h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm5 4h-2v9H6v2c0 1.1.9 2 2 2h11l4 4V7c0-1.1-.9-2-2-2z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الثاني (لليافعين): التعبير عن الرأي",
      "details": "توسيع المفردات ومناقشة الهوايات والاهتمامات والتعبير عن الآراء بوضوح.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15 4v7H5.17l-.59.59L3 13.17V4h12m1-2H3c-1.1 0-2 .9-2 2v12l4-4h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm5 4h-2v9H6v2c0 1.1.9 2 2 2h11l4 4V7c0-1.1-.9-2-2-2z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الثالث (لليافعين): نقاشات متقدمة",
      "details": "مناقشة مواضيع ثقافية واجتماعية، فهم اللهجات المختلفة، والاستعداد للتواصل بطلاقة.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الأول (للشباب): العربية من الصفر",
      "details": "دورة مكثفة للمبتدئين تركز على القراءة والكتابة والقواعد الأساسية اللازمة للتواصل.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الثاني (للشباب): العربية للأغراض الأكاديمية",
      "details": "تطوير المهارات اللازمة لفهم المحاضرات، كتابة المقالات، والمشاركة في النقاشات الجامعية.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>",
      "gradient": "gradient-arabic",
      "category": "تعليم اللغة العربية لغير الناطقين",
      "title": "المستوى الثالث (للشباب): إتقان اللغة الإعلامية",
      "details": "فهم وتحليل لغة الإعلام والأخبار، وكتابة التقارير، والتحدث بطلاقة في سياقات مهنية.",
      "color": "#f7941d",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z\"/></svg>",
      "gradient": "gradient-therapy",
      "category": "برامج علاجية استشارية",
      "title": "جلسات دعم النطق والكلام",
      "details": "جلسات فردية مع أخصائيين",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z\"/></svg>",
      "gradient": "gradient-therapy",
      "category": "برامج علاجية استشارية",
      "title": "استشارات التأقلم المدرسي والنفسي",
      "details": "متابعة مستمرة ودعم نفسي",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8h16v9c0 .55-.45 1-1 1zM5 6h14v1H5V6z\"/></svg>",
      "gradient": "gradient-skills",
      "category": "دورات تدريبية إضافية",
      "title": "مقدمة في البرمجة للأطفال",
      "details": "تنمية مهارات التفكير المنطقي",
       "subjectDetails": []
    },
    {
      "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8h16v9c0 .55-.45 1-1 1zM5 6h14v1H5V6z\"/></svg>",
      "gradient": "gradient-skills",
      "category": "دورات تدريبية إضافية",
      "title": "مهارات العرض والتقديم للطلاب",
      "details": "بناء الثقة بالنفس والقدرة على التعبير",
       "subjectDetails": []
    }
];

const SubjectsView = ({ itemInfo, onBack, onRegister }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="section subjects-section" id="subjects">
      <div className="container">
        <div className="subjects-header">
          <h2 className="section-title">مواد {itemInfo.title}</h2>
          <button onClick={onBack} className="btn subjects-back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"/></svg>
            <span>العودة</span>
          </button>
        </div>
        {(itemInfo.subjectDetails && itemInfo.subjectDetails.length > 0) ? (
          <div className="grid subjects-grid">
            {itemInfo.subjectDetails.map((subject, index) => (
              <div key={index} className="subject-card">
                <div className="subject-card-icon" style={{ backgroundColor: itemInfo.color }}>
                  {svgIcons[subject.iconKey]}
                </div>
                <div className="subject-card-content">
                  <h3 className="subject-card-title">{subject.name}</h3>
                  <p className="subject-card-description">{subject.description}</p>
                  <button onClick={() => onRegister(subject.name)} className="btn btn-secondary subject-card-cta" style={{ backgroundColor: itemInfo.color }}>
                    سجل في المادة
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results-container" style={{ marginTop: '2rem' }}>
            <h3>قريباً...</h3>
            <p>يجري حالياً إعداد تفاصيل المواد الخاصة بهذا البرنامج. شكراً لاهتمامكم!</p>
          </div>
        )}
      </div>
    </section>
  );
};

const RegistrationInfoPanel = ({ currentStep }) => {
    const infoPanelSteps = [
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>,
          title: 'بياناتك الشخصية آمنة',
          description: 'نحن نستخدم أحدث معايير الأمان لحماية معلوماتك. ابدأ بإنشاء ملف الطالب الخاص بك.'
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-12.5L14 4.5l-2.5 5-5-2.5 5 2.5zm5 5L10 19.5l2.5-5 5 2.5-5-2.5z"/></svg>,
          title: 'تحديد المسار التعليمي المثالي',
          description: 'تساعدنا هذه المعلومات في اقتراح البرامج والمواد التي تناسب مستوى الطالب وأهدافه التعليمية.'
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>,
          title: 'على بعد خطوة من الانطلاق!',
          description: 'سنستخدم هذه المعلومات للتواصل معكم لتأكيد التسجيل، وإعلامكم بمواعيد الفصول وأي تحديثات هامة.'
        }
    ];

    const stepInfo = infoPanelSteps[currentStep - 1];

    return (
        <div className="registration-info-panel">
            <div className="info-panel-content-wrapper" key={currentStep}>
                <div className="info-panel-icon">
                    {stepInfo.icon}
                </div>
                <h2 className="info-panel-title">{stepInfo.title}</h2>
                <p className="info-panel-description">{stepInfo.description}</p>
            </div>
        </div>
    );
};


const RegistrationView = ({ classes, onBackToMain }) => {
  const academicLevels = classes.map(c => c.title);
  const curricula = ['المنهج السوري', 'المنهج السعودي', 'المنهج الإماراتي', 'المنهج التركي', 'مناهج دولية'];
  const programs = ['التعليم التعويضي المسرّع', 'تعليم اللغة العربية لغير الناطقين', 'برامج علاجية استشارية', 'دورات تدريبية إضافية', 'تسجيل عام (غير محدد)'];
  const countryCodes = [
    { code: '+963', name: 'سوريا' }, { code: '+90', name: 'تركيا' }, { code: '+962', name: 'الأردن' }, { code: '+34', name: 'إسبانيا' }, { code: '+61', name: 'أستراليا' }, { code: '+49', name: 'ألمانيا' }, { code: '+971', name: 'الإمارات' }, { code: '+973', name: 'البحرين' }, { code: '+32', name: 'بلجيكا' }, { code: '+216', name: 'تونس' }, { code: '+213', name: 'الجزائر' }, { code: '+45', name: 'الدنمارك' }, { code: '+966', name: 'السعودية' }, { code: '+46', name: 'السويد' }, { code: '+86', name: 'الصين' }, { code: '+964', name: 'العراق' }, { code: '+44', name: 'المملكة المتحدة' }, { code: '+212', name: 'المغرب' }, { code: '+52', name: 'المكسيك' }, { code: '+47', name: 'النرويج' }, { code: '+43', name: 'النمسا' }, { code: '+91', name: 'الهند' }, { code: '+31', name: 'هولندا' }, { code: '+1', name: 'الولايات المتحدة' }, { code: '+81', name: 'اليابان' }, { code: '+39', name: 'إيطاليا' }, { code: '+33', name: 'فرنسا' }, { code: '+358', name: 'فنلندا' }, { code: '+974', name: 'قطر' }, { code: '+1', name: 'كندا' }, { code: '+965', name: 'الكويت' }, { code: '+961', name: 'لبنان' }, { code: '+218', name: 'ليبيا' }, { code: '+60', name: 'ماليزيا' }, { code: '+20', name: 'مصر' }, { code: '+41', name: 'سويسرا' }, { code: '+968', name: 'عُمان' },
  ];

  const [currentStep, setCurrentStep] = React.useState(1);
  const [formState, setFormState] = React.useState({
    fullName: '',
    dob: '',
    gender: 'ذكر',
    birthPlace: '',
    residence: '',
    academicLevel: '',
    curriculum: '',
    program: '',
    email: '',
    countryCode: '+963',
    phone: '',
  });
  
  const [dobParts, setDobParts] = React.useState({ day: '', month: '', year: '' });
  // FIX: Explicitly type the errors state object to allow dynamic properties
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  
  // Date of Birth options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - 5 - i); // Students are at least 5
  const months = [
      { value: 1, name: 'يناير' }, { value: 2, name: 'فبراير' },
      { value: 3, name: 'مارس' }, { value: 4, name: 'أبريل' },
      { value: 5, name: 'مايو' }, { value: 6, name: 'يونيو' },
      { value: 7, name: 'يوليو' }, { value: 8, name: 'أغسطس' },
      { value: 9, name: 'سبتمبر' }, { value: 10, name: 'أكتوبر' },
      { value: 11, name: 'نوفمبر' }, { value: 12, name: 'ديسمبر' }
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const validateAllFields = () => {
    const newErrors: { [key: string]: string } = {};
    // Step 1 validation
    if (!formState.fullName.trim()) newErrors.fullName = 'الاسم الكامل مطلوب';
    else if (formState.fullName.trim().split(' ').length < 2) newErrors.fullName = 'الرجاء إدخال الاسم الكامل (اسمين على الأقل)';

    const { day, month, year } = dobParts;
    if (!day || !month || !year) {
        newErrors.dob = 'الرجاء إكمال تاريخ الميلاد';
    } else {
        const numericYear = parseInt(year);
        const numericMonth = parseInt(month);
        const numericDay = parseInt(day);

        const dob = new Date(numericYear, numericMonth - 1, numericDay);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (dob.getFullYear() !== numericYear || dob.getMonth() !== numericMonth - 1 || dob.getDate() !== numericDay) {
            newErrors.dob = 'تاريخ الميلاد غير صالح (مثال: 31 أبريل).';
        } else if (dob > today) {
            newErrors.dob = 'تاريخ الميلاد لا يمكن أن يكون في المستقبل.';
        } else {
            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            if (age < 5) {
                newErrors.dob = 'يجب أن يكون عمر الطالب 5 سنوات على الأقل للتسجيل.';
            }
        }
    }
    
    // Step 2 validation
    if (!formState.academicLevel) newErrors.academicLevel = 'يرجى اختيار المستوى الدراسي';
    if (!formState.curriculum) newErrors.curriculum = 'يرجى اختيار المنهج الدراسي';
    if (!formState.program) newErrors.program = 'يرجى اختيار البرنامج المطلوب';
    
    // Step 3 validation
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formState.email || !emailRegex.test(formState.email)) newErrors.email = 'الرجاء إدخال بريد إلكتروني صحيح';
    
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!formState.phone || !phoneRegex.test(formState.phone)) newErrors.phone = 'الرجاء إدخال رقم هاتف صحيح';

    return newErrors;
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAllFields();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        console.log('Form Submitted', formState);
        alert('تم إرسال طلب التسجيل بنجاح! سنتواصل معكم قريباً.');
    } else {
        const stepsFields = [
            ['fullName', 'dob'], // Step 1
            ['academicLevel', 'curriculum', 'program'], // Step 2
            ['email', 'phone'] // Step 3
        ];
        
        const firstErrorStep = stepsFields.findIndex(stepFields => 
            stepFields.some(field => validationErrors.hasOwnProperty(field))
        ) + 1;

        if (firstErrorStep > 0) {
            setCurrentStep(firstErrorStep);
        }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    setFormState(prevState => ({
      ...prevState,
      [name]: isCheckbox ? checked : value
    }));

    if(errors[name]) {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    }
  };
  
  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newDobParts = { ...dobParts, [name]: value };
    setDobParts(newDobParts);

    const { year, month, day } = newDobParts;
    if (year && month && day) {
        const formattedMonth = month.toString().padStart(2, '0');
        const formattedDay = day.toString().padStart(2, '0');
        const fullDob = `${year}-${formattedMonth}-${formattedDay}`;
        
        setFormState(prevState => ({ ...prevState, dob: fullDob }));
        
        if (errors.dob) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.dob;
                return newErrors;
            });
        }
    } else {
         setFormState(prevState => ({ ...prevState, dob: '' }));
    }
  };
  
  const stepTitles = ["المعلومات الشخصية", "الخلفية التعليمية", "معلومات التواصل"];

  return (
    <div className="registration-page-wrapper">
      <div className="registration-card">
        <RegistrationInfoPanel currentStep={currentStep} />
        <div className="registration-form-panel">
          <button className="close-registration-btn" onClick={onBackToMain} aria-label="العودة للصفحة الرئيسية">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
          </button>
          <h1 className="form-panel-title">إنشاء حساب جديد</h1>
          <div className="progress-bar">
            {stepTitles.map((title, index) => {
              const stepNumber = index + 1;
              const isActive = currentStep === stepNumber;
              const isCompleted = currentStep > stepNumber;
              return (
                <React.Fragment key={index}>
                  <div className={`progress-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                    <div className="step-number">{isCompleted ? '✔' : stepNumber}</div>
                    <div className="step-title">{title}</div>
                  </div>
                  {index < stepTitles.length - 1 && <div className="step-connector"></div>}
                </React.Fragment>
              );
            })}
          </div>

          <form className="registration-form" onSubmit={handleSubmit} noValidate>
            {/* FIX: Cast style object with CSS custom properties to React.CSSProperties */}
            <div className="form-steps-container" style={{'--current-step': currentStep} as React.CSSProperties}>
              <div className="form-step" data-step="1">
                <div className="form-grid">
                  <div className={`form-group full-width ${errors.fullName ? 'has-error' : ''}`}>
                    <label htmlFor="fullName">الاسم الكامل للطالب</label>
                    <input type="text" id="fullName" name="fullName" value={formState.fullName} onChange={handleChange} required />
                    {errors.fullName && <p className="form-error">{errors.fullName}</p>}
                  </div>

                  <div className={`form-group full-width dob-group ${errors.dob ? 'has-error' : ''}`}>
                    <label>تاريخ الميلاد</label>
                    <div className="date-of-birth-group">
                      <select name="day" value={dobParts.day} onChange={handleDateChange} required>
                          <option value="" disabled>اليوم</option>
                          {days.map(day => <option key={day} value={day}>{day}</option>)}
                      </select>
                      <select name="month" value={dobParts.month} onChange={handleDateChange} required>
                          <option value="" disabled>الشهر</option>
                          {months.map(month => <option key={month.value} value={month.value}>{month.name}</option>)}
                      </select>
                      <select name="year" value={dobParts.year} onChange={handleDateChange} required>
                          <option value="" disabled>السنة</option>
                          {years.map(year => <option key={year} value={year}>{year}</option>)}
                      </select>
                    </div>
                    {errors.dob && <p className="form-error">{errors.dob}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label>الجنس</label>
                    <div className="gender-options">
                        <label className={formState.gender === 'ذكر' ? 'selected' : ''}>
                          <input type="radio" name="gender" value="ذكر" checked={formState.gender === 'ذكر'} onChange={handleChange} />
                          ذكر
                        </label>
                        <label className={formState.gender === 'أنثى' ? 'selected' : ''}>
                          <input type="radio" name="gender" value="أنثى" checked={formState.gender === 'أنثى'} onChange={handleChange} />
                          أنثى
                        </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthPlace">مكان الولادة (اختياري)</label>
                    <input type="text" id="birthPlace" name="birthPlace" value={formState.birthPlace} onChange={handleChange} />
                  </div>
                   <div className="form-group">
                    <label htmlFor="residence">مكان الإقامة الحالي (اختياري)</label>
                    <input type="text" id="residence" name="residence" value={formState.residence} onChange={handleChange}/>
                  </div>
                </div>
              </div>

              <div className="form-step" data-step="2">
                 <div className="form-grid">
                    <div className={`form-group full-width ${errors.academicLevel ? 'has-error' : ''}`}>
                        <label htmlFor="academicLevel">المستوى الدراسي</label>
                        <select id="academicLevel" name="academicLevel" value={formState.academicLevel} onChange={handleChange} required>
                            <option value="" disabled></option>
                            {academicLevels.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                        {errors.academicLevel && <p className="form-error">{errors.academicLevel}</p>}
                    </div>
                     <div className={`form-group full-width ${errors.curriculum ? 'has-error' : ''}`}>
                        <label htmlFor="curriculum">المنهج الدراسي المتبع</label>
                        <select id="curriculum" name="curriculum" value={formState.curriculum} onChange={handleChange} required>
                            <option value="" disabled></option>
                            {curricula.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        {errors.curriculum && <p className="form-error">{errors.curriculum}</p>}
                    </div>
                    <div className={`form-group full-width ${errors.program ? 'has-error' : ''}`}>
                        <label htmlFor="program">البرنامج الذي ترغب فيه</label>
                        <select id="program" name="program" value={formState.program} onChange={handleChange} required>
                            <option value="" disabled></option>
                            {programs.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        {errors.program && <p className="form-error">{errors.program}</p>}
                    </div>
                </div>
              </div>
              
              <div className="form-step" data-step="3">
                 <div className="form-grid">
                    <div className={`form-group full-width ${errors.email ? 'has-error' : ''}`}>
                        <label htmlFor="email">بريد ولي الأمر الإلكتروني</label>
                        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />
                        {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                    <div className={`form-group full-width ${errors.phone ? 'has-error' : ''}`}>
                        <label htmlFor="phone">رقم واتساب ولي الأمر</label>
                        <div className="phone-input-group">
                            <select className="country-code-select" name="countryCode" value={formState.countryCode} onChange={handleChange}>
                              {countryCodes.map(c => <option key={c.code+c.name} value={c.code}>{c.name} ({c.code})</option>)}
                            </select>
                            <input type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} required/>
                        </div>
                        {errors.phone && <p className="form-error">{errors.phone}</p>}
                    </div>
                </div>
              </div>
            </div>

            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" className="btn btn-secondary" onClick={handlePrevStep}>السابق</button>
              )}
              {currentStep < 3 ? (
                <button type="button" className="btn btn-primary" onClick={handleNextStep}>التالي</button>
              ) : (
                <button type="submit" className="btn btn-primary register-submit-btn">إتمام التسجيل</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
  
const Logo = ({ className, ...props }) => (
  <img 
    src="/img/LOGO-ar.png"
    alt="شعار منصة ضاد" 
    className={className} 
    {...props} 
  />
);

const App = () => {
  const headerRef = React.useRef<HTMLElement>(null);
  const navRef = React.useRef<HTMLElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  // Data state
  const [classes, setClasses] = React.useState(classesData);
  const [courses, setCourses] = React.useState(coursesData);

  const [selectedClassIndex, setSelectedClassIndex] = React.useState(0);
  const [activeCourseFilter, setActiveCourseFilter] = React.useState('الكل');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState('');
  const [modalSubtitle, setModalSubtitle] = React.useState('');
  
  // View state
  const [currentView, setCurrentView] = React.useState('main');
  const [detailsViewItem, setDetailsViewItem] = React.useState(null);

  // Search state
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeSearchTerm, setActiveSearchTerm] = React.useState('');
  const [noResultsFound, setNoResultsFound] = React.useState(false);

  // Video player state
  const [player, setPlayer] = React.useState<any>(null);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  // Form state and validation
  const [contactName, setContactName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');
  const [contactMessage, setContactMessage] = React.useState('');
  const [contactCountryCode, setContactCountryCode] = React.useState('+963');
  const [contactWhatsapp, setContactWhatsapp] = React.useState('');
  
  const [registerStudentName, setRegisterStudentName] = React.useState('');
  const [registerParentName, setRegisterParentName] = React.useState('');
  const [registerCountryCode, setRegisterCountryCode] = React.useState('+963');
  const [registerWhatsapp, setRegisterWhatsapp] = React.useState('');
  
  // Validation Errors
  const [contactNameError, setContactNameError] = React.useState('');
  const [contactEmailError, setContactEmailError] = React.useState('');
  const [contactWhatsappError, setContactWhatsappError] = React.useState('');
  const [contactMessageError, setContactMessageError] = React.useState('');
  const [registerStudentNameError, setRegisterStudentNameError] = React.useState('');
  const [registerParentNameError, setRegisterParentNameError] = React.useState('');
  const [registerWhatsappError, setRegisterWhatsappError] = React.useState('');

  // Submission State
  const [isContactSubmitting, setIsContactSubmitting] = React.useState(false);
  const [isRegisterSubmitting, setIsRegisterSubmitting] = React.useState(false);
  
  const [indicatorStyle, setIndicatorStyle] = React.useState({});

  // Toast notification state
  const [toast, setToast] = React.useState({ show: false, message: '', type: 'success' });
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  
  const classesListRef = React.useRef<HTMLDivElement>(null);
  const classItemRefs = React.useRef(new Map());
  const [scrollState, setScrollState] = React.useState({ canScrollPrev: false, canScrollNext: false });

  const showToast = React.useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000); // Hide after 4 seconds
  }, []);

  React.useEffect(() => {
    const container = classesListRef.current;
    if (!container) return;

    const checkScrollability = () => {
      const scrollableWidth = container.scrollWidth - container.clientWidth;
      const currentScroll = Math.round(Math.abs(container.scrollLeft));

      // If there's less than a pixel of scrollable area, disable both buttons.
      if (scrollableWidth < 1) {
        setScrollState({ canScrollPrev: false, canScrollNext: false });
        return;
      }
      
      const canScrollPrev = currentScroll > 0;
      const canScrollNext = currentScroll < scrollableWidth;

      setScrollState({ canScrollPrev, canScrollNext });
    };

    checkScrollability();
    container.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);

    const timeoutId = setTimeout(checkScrollability, 100);

    return () => {
      clearTimeout(timeoutId);
      container.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [classes]);

  React.useEffect(() => {
    const container = classesListRef.current;
    const item = classItemRefs.current.get(selectedClassIndex);

    if (container && item) {
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      const itemOffsetLeft = item.offsetLeft;
      const scrollPosition = itemOffsetLeft + itemWidth / 2 - containerWidth / 2;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [selectedClassIndex]);

  const handleScroll = (direction: 'prev' | 'next') => {
    const container = classesListRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === 'prev' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const countryCodes = [
    { code: '+963', name: 'سوريا' },
    { code: '+90', name: 'تركيا' },
    { code: '+962', name: 'الأردن' },
    { code: '+34', name: 'إسبانيا' },
    { code: '+61', name: 'أستراليا' },
    { code: '+49', name: 'ألمانيا' },
    { code: '+971', name: 'الإمارات' },
    { code: '+973', name: 'البحرين' },
    { code: '+32', name: 'بلجيكا' },
    { code: '+216', name: 'تونس' },
    { code: '+213', name: 'الجزائر' },
    { code: '+45', name: 'الدنمارك' },
    { code: '+966', name: 'السعودية' },
    { code: '+46', name: 'السويد' },
    { code: '+86', name: 'الصين' },
    { code: '+964', name: 'العراق' },
    { code: '+44', name: 'المملكة المتحدة' },
    { code: '+212', name: 'المغرب' },
    { code: '+52', name: 'المكسيك' },
    { code: '+47', name: 'النرويج' },
    { code: '+43', name: 'النمسا' },
    { code: '+91', name: 'الهند' },
    { code: '+31', name: 'هولندا' },
    { code: '+1', name: 'الولايات المتحدة' },
    { code: '+81', name: 'اليابان' },
    { code: '+39', name: 'إيطاليا' },
    { code: '+33', name: 'فرنسا' },
    { code: '+358', name: 'فنلندا' },
    { code: '+974', name: 'قطر' },
    { code: '+1', name: 'كندا' },
    { code: '+965', name: 'الكويت' },
    { code: '+961', name: 'لبنان' },
    { code: '+218', name: 'ليبيا' },
    { code: '+60', name: 'ماليزيا' },
    { code: '+20', name: 'مصر' },
    { code: '+41', name: 'سويسرا' },
    { code: '+968', name: 'عُمان' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === '#') return;
    
    if (currentView !== 'main') {
      setCurrentView('main');
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e);
    setIsMobileMenuOpen(false);
  };
  
  const openRegisterModal = (title, subtitle) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setIsRegisterModalOpen(true);
  };
  
  const navigateToRegister = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('register');
  }

  const handleBackToMainFromRegister = () => {
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
    setModalTitle('');
    setModalSubtitle('');
    setRegisterStudentName('');
    setRegisterParentName('');
    setRegisterWhatsapp('');
    setRegisterCountryCode('+963');
    setRegisterStudentNameError('');
    setRegisterParentNameError('');
    setRegisterWhatsappError('');
  };

  React.useEffect(() => {
    if (isMobileMenuOpen || isRegisterModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isRegisterModalOpen]);

  React.useEffect(() => {
    const handleWindowScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 10) {
          headerRef.current.classList.add('scrolled');
        } else {
          headerRef.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);
  
  const handlePlayVideo = () => {
    if (player) {
      player.unMute();
      player.playVideo();
    }
  };

  React.useEffect(() => {
    if (currentView !== 'main') return; 

    const onYouTubeIframeAPIReady = () => {
      // FIX: Cast window to any to access YT property
      const newPlayer = new (window as any).YT.Player('youtube-player', {
        videoId: '9RJKoxZ1b50',
        playerVars: {
          autoplay: 0,
          mute: 1,
          loop: 1,
          playlist: '9RJKoxZ1b50',
 
          controls: 1,
          rel: 0,
          playsinline: 1,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            event.target.mute();
          },
          onStateChange: (event) => {
            // FIX: Cast window to any to access YT property
            const YT = (window as any).YT;
            if (YT && event.data === YT.PlayerState.PLAYING) {
              setIsVideoPlaying(true);
            } else if (YT && (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED)) {
              setIsVideoPlaying(false);
            }
          },
        },
      });
    };

    // FIX: Cast window to any to access YT property
    if (!(window as any).YT || !(window as any).YT.Player) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // FIX: Cast window to any to access onYouTubeIframeAPIReady property
        (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
    } else {
      onYouTubeIframeAPIReady();
    }
  }, [currentView]);
  
  React.useEffect(() => {
    if (currentView !== 'main') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    class Particle {
        x: number;
        y: number;
        radius: number;
        color: string;
        speedX: number;
        speedY: number;

        constructor(x: number, y: number, radius: number, color: string, speedX: number, speedY: number) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.speedX = speedX;
            this.speedY = speedY;
        }

        draw() {
            if (!ctx) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            if (!canvas) return;
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.speedX = -this.speedX;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.speedY = -this.speedY;
            }
            this.x += this.speedX;
            this.y += this.speedY;
            this.draw();
        }
    }

    const init = () => {
        if (!canvas) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
        const colors = ['rgba(0, 121, 107, 0.4)', 'rgba(247, 148, 29, 0.4)'];
        for (let i = 0; i < particleCount; i++) {
            const radius = random(1, 2.5);
            const x = random(radius, canvas.width - radius);
            const y = random(radius, canvas.height - radius);
            const color = colors[Math.floor(Math.random() * colors.length)];
            const speedX = random(-0.2, 0.2);
            const speedY = random(-0.2, 0.2);
            if (speedX === 0 || speedY === 0) continue;
            particles.push(new Particle(x, y, radius, color, speedX, speedY));
        }
    };

    const connect = () => {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const distance = Math.sqrt(
                    (particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2
                );
                if (distance < 120) {
                    opacityValue = 1 - (distance / 120);
                    ctx.strokeStyle = `rgba(0, 121, 107, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => p.update());
        connect();
        animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        cancelAnimationFrame(animationFrameId);
        init();
        animate();
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
}, [currentView]);

  React.useEffect(() => {
    if (currentView !== 'main') {
        const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
        navLinks.forEach(link => link.classList.remove('active'));
        setIndicatorStyle({ opacity: 0 });
        return;
    }

    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
          const desktopLink = navRef.current?.querySelector(`a[href="#${id}"]`);
          if (desktopLink) {
            // FIX: Cast element to HTMLElement to access offsetLeft and offsetWidth
            const { offsetLeft, offsetWidth } = desktopLink as HTMLElement;
            setIndicatorStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px`, opacity: 1 });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0
    });
    sections.forEach(section => observer.observe(section));

    setTimeout(() => {
        const initialActiveLink = document.querySelector('.header-nav-desktop a.active') || document.querySelector('.header-nav-desktop a');
        if (initialActiveLink) {
            const { offsetLeft, offsetWidth } = initialActiveLink as HTMLElement;
            setIndicatorStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px`, opacity: 1 });
        }
    }, 100);

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [currentView]);

  React.useEffect(() => {
    if (currentView !== 'main' || !navRef.current) return;

    const handleResize = () => {
        const activeLink = navRef.current?.querySelector('a.active');
        if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
            setIndicatorStyle({ transition: 'none', left: `${offsetLeft}px`, width: `${offsetWidth}px`, opacity: 1 });
            setTimeout(() => {
              setIndicatorStyle(prev => ({ ...prev, transition: '' }));
            }, 100);
        }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentView]);

  React.useEffect(() => {
    if (currentView !== 'main') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const items = document.querySelectorAll('.timeline-item');
    if (items.length > 0) {
      items.forEach(item => observer.observe(item));
    }

    return () => {
      if (items.length > 0) {
        items.forEach(item => observer.unobserve(item));
      }
    };
  }, [currentView]);
 
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuresData = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>,
        title: 'التعلم التفاعلي',
        description: 'بيئة تعليمية محفزة تشجع على المشاركة والتفكير النقدي من خلال الأنشطة والأدوات التفاعلية.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 6c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg>,
        title: 'معلمون خبراء',
        description: 'نخبة من المعلمين المتخصصين أصحاب الكفاءة العالية لضمان أفضل تجربة تعليمية.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>,
        title: 'توظيف المستحدثات الرقمية',
        description: 'نستخدم أحدث التقنيات والأدوات الرقمية لجعل عملية التعلم أكثر فعالية ومتعة.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>,
        title: 'مناهج عالمية معتمدة',
        description: 'نعتمد على مناهج عالمية معتمدة مع تكييفها لتلبية احتياجات طلابنا وثقافتهم.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
        title: 'تعلم متمركز على المتعلم',
        description: 'تعليم يراعي حاجات المتعلم اللغوية والنفسية والعمرية لضمان تطوره الشامل.'
    }
  ];

  const howItWorksData = [
    {
      number: '01',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
      title: 'أنشئ حسابك',
      description: 'ابدأ رحلتك بخطوة بسيطة: سجل بياناتك الأساسية وانضم إلى مجتمعنا التعليمي في أقل من دقيقة.'
    },
    {
      number: '02',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-12.5L14 4.5l-2.5 5-5-2.5 5 2.5zm5 5L10 19.5l2.5-5 5 2.5-5-2.5z"/></svg>,
      title: 'حدد مسارك',
      description: 'لا داعي للحيرة، اختبارنا التفاعلي يحدد مستواك بدقة ويوجهك نحو البرنامج الأنسب لك.'
    },
    {
      number: '03',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>,
      title: 'انطلق في التعلم',
      description: 'كل شيء جاهز الآن! انضم لصفوفك المباشرة، تفاعل مع المعلمين، واستكشف مكتبتنا الغنية بالمواد التعليمية.'
    }
  ];

  const courseFilters = ['الكل', ...Array.from(new Set(courses.map(c => c.category)))];
  
  const selectedClass = classes[selectedClassIndex];
  
  const registrationSubtitle = "يرجى ملء النموذج التالي لإتمام عملية التسجيل. سنتواصل معك قريباً.";
  
  const isRegistration = modalTitle.startsWith('تسجيل في: ') || modalTitle === 'انضم إلينا الآن';
  
  // Debounce search input to update the active search term
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSearchTerm(searchQuery.trim());
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // React to active search term changes to update UI state (filters and class view)
  React.useEffect(() => {
    if (activeSearchTerm) {
        setActiveCourseFilter('الكل');
        const normalizedQuery = activeSearchTerm.toLowerCase();

        const matchingClassIndex = classes.findIndex(cls =>
            cls.title.toLowerCase().includes(normalizedQuery) ||
            cls.icon.includes(normalizedQuery) ||
            cls.number.includes(normalizedQuery)
        );

        const matchingCourses = courses.filter(course =>
            course.title.toLowerCase().includes(normalizedQuery) ||
            course.details.toLowerCase().includes(normalizedQuery) ||
            course.category.toLowerCase().includes(normalizedQuery)
        );

        if (matchingClassIndex !== -1) {
            setSelectedClassIndex(matchingClassIndex);
            setNoResultsFound(false);
        } else if (matchingCourses.length > 0) {
            setNoResultsFound(false);
        } else {
            setNoResultsFound(true);
        }
    } else {
        setNoResultsFound(false);
    }
  }, [activeSearchTerm, classes, courses]);


  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    
    // Immediately update the active search term to bypass debounce on submit
    setActiveSearchTerm(trimmedQuery);

    if (!trimmedQuery) return;
    
    // Ensure we are on the main view to see search results
    setCurrentView('main');

    const normalizedQuery = trimmedQuery.toLowerCase();
    const matchingClassIndex = classes.findIndex(cls => 
        cls.title.toLowerCase().includes(normalizedQuery) ||
        cls.icon.includes(normalizedQuery) ||
        cls.number.includes(normalizedQuery)
    );

    const targetSectionId = matchingClassIndex !== -1 ? 'classes' : 'programs';
    
    // Allow the view to switch before scrolling
    setTimeout(() => {
      const targetElement = document.getElementById(targetSectionId);
      if (targetElement) {
          const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
          });
      }
    }, 100);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setActiveSearchTerm('');
    // FIX: Cast element to HTMLElement to call focus method
    (document.querySelector('.hero-search-input') as HTMLElement)?.focus();
  };

  const filteredCourses = courses
      .filter(course => activeCourseFilter === 'الكل' || course.category === activeCourseFilter)
      .filter(course => {
          const term = activeSearchTerm.toLowerCase();
          return term === '' || 
                 course.title.toLowerCase().includes(term) ||
                 (course.details && course.details.toLowerCase().includes(term)) ||
                 course.category.toLowerCase().includes(term);
      });

  const validatePhoneNumber = (phone: string) => {
    if (!phone) return false;
    const phoneRegex = /^[0-9]{7,15}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    if (!email) return false;
    // A more comprehensive regex for email validation
    const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return emailRegex.test(String(email).toLowerCase());
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setContactNameError('');
    setContactEmailError('');
    setContactWhatsappError('');
    setContactMessageError('');

    let isValid = true;
    if (!contactName.trim()) {
      setContactNameError('الاسم الكامل مطلوب.');
      isValid = false;
    }
    if (!validateEmail(contactEmail)) {
      setContactEmailError('الرجاء إدخال بريد إلكتروني صحيح.');
      isValid = false;
    }
    if (!validatePhoneNumber(contactWhatsapp)) {
      setContactWhatsappError('يرجى إدخال رقم هاتف صحيح (7-15 أرقام).');
      isValid = false;
    }
    if (!contactMessage.trim()) {
      setContactMessageError('الرسالة مطلوبة.');
      isValid = false;
    }
    
    if (!isValid) return;

    setIsContactSubmitting(true);
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', {
          name: contactName,
          fullWhatsapp: `${contactCountryCode}${contactWhatsapp}`,
          email: contactEmail,
          message: contactMessage,
      });

      showToast('تم إرسال رسالتك بنجاح. سنتواصل معك قريباً!', 'success');
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setContactWhatsapp('');
      setContactCountryCode('+963');

    } catch (error: any) {
        showToast(error.message || 'حدث خطأ ما. يرجى التحقق من اتصالك بالإنترنت.', 'error');
    } finally {
        setIsContactSubmitting(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setRegisterStudentNameError('');
    setRegisterParentNameError('');
    setRegisterWhatsappError('');

    let isValid = true;
    if (!registerStudentName.trim()) {
      setRegisterStudentNameError('اسم الطالب مطلوب.');
      isValid = false;
    }
    if (!registerParentName.trim()) {
      setRegisterParentNameError('اسم ولي الأمر مطلوب.');
      isValid = false;
    }
    if (!validatePhoneNumber(registerWhatsapp)) {
      setRegisterWhatsappError('يرجى إدخال رقم هاتف صحيح (7-15 أرقام).');
      isValid = false;
    }

    if (!isValid) return;

    setIsRegisterSubmitting(true);

    const course = modalTitle.replace('تسجيل في: ', '').replace('انضم إلينا الآن', 'تسجيل عام');

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
       console.log('Registration form submitted:', {
          course,
          studentName: registerStudentName,
          parentName: registerParentName,
          fullWhatsapp: `${registerCountryCode}${registerWhatsapp}`,
      });

      closeRegisterModal();
      showToast('تم إرسال طلب التسجيل بنجاح!', 'success');
    } catch (error: any) {
        showToast(error.message || 'حدث خطأ ما. يرجى التحقق من اتصالك بالإنترنت.', 'error');
    } finally {
        setIsRegisterSubmitting(false);
    }
  };
  
  const handleViewDetails = (item: any) => {
    setDetailsViewItem(item);
    setCurrentView('subjects');
  };

  const handleBackToMain = () => {
    const targetSectionId = detailsViewItem?.category ? 'programs' : 'classes';
    setCurrentView('main');
    setDetailsViewItem(null);
    setTimeout(() => {
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            const headerHeight = headerRef.current?.offsetHeight ?? 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    }, 100);
  };

  const handleRegisterForSubject = (subjectName: string) => {
    if (!detailsViewItem) return;
    openRegisterModal(`تسجيل في: ${detailsViewItem.title} - ${subjectName}`, registrationSubtitle);
  };
  
  const handleLogoClick = () => {
    if (currentView !== 'main') {
        setCurrentView('main');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };

  const LoadingSpinner = () => (
    <div className="spinner-container">
        <div className="spinner"></div>
    </div>
  );

  return (
    <>
      {currentView !== 'register' && (
        <header className="app-header" ref={headerRef}>
            <div className="header-container">
            <Logo className="header-logo" onClick={handleLogoClick} style={{cursor: 'pointer'}} />
            <nav className="header-nav-desktop" ref={navRef}>
                <a href="#home" onClick={handleSmoothScroll}>الرئيسية</a>
                <a href="#classes" onClick={handleSmoothScroll}>الصفوف</a>
                <a href="#programs" onClick={handleSmoothScroll}>البرامج</a>
                <a href="#features" onClick={handleSmoothScroll}>لماذا نحن؟</a>
                <a href="#contact-us" onClick={handleSmoothScroll}>تواصل معنا</a>
                <div className="nav-indicator" style={indicatorStyle}></div>
            </nav>
            <div className="header-actions">
                <button onClick={navigateToRegister} className="btn btn-primary">سجل الآن</button>
                <button 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={isMobileMenuOpen}
                >
                <span></span>
                <span></span>
                <span></span>
                </button>
            </div>
            </div>
        </header>
      )}


      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#home" onClick={handleMobileLinkClick}>الرئيسية</a>
          <a href="#classes" onClick={handleMobileLinkClick}>الصفوف</a>
          <a href="#programs" onClick={handleMobileLinkClick}>البرامج</a>
          <a href="#features" onClick={handleMobileLinkClick}>لماذا نحن؟</a>
          <a href="#contact-us" onClick={handleMobileLinkClick}>تواصل معنا</a>
          <button className="btn btn-primary" onClick={() => { navigateToRegister(); setIsMobileMenuOpen(false); }}>سجل الآن</button>
        </nav>
      </div>
      
      <main>
        {currentView === 'main' && (
          <>
             <section className="hero-section" id="home">
                <canvas ref={canvasRef} id="hero-particles"></canvas>
                <div className="hero-shape shape-1"></div>
                <div className="hero-shape shape-2"></div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">جسركم للاندماج<br/>في <span>التعليم السوري</span></h1>
                        <p className="hero-subtitle">نحن هنا لمساعدة الطلاب السوريين العائدين والمتأثرين بالظروف على الاندماج بسلاسة في المناهج الدراسية السورية، مع برامج دعم متخصصة.</p>
                        <form className={`hero-search-form ${noResultsFound ? 'no-results' : ''}`} onSubmit={handleSearchSubmit}>
                            <input 
                                type="text" 
                                placeholder="ابحث عن صفك أو برنامجك..." 
                                className="hero-search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                             />
                            <button 
                                type="button" 
                                className={`hero-search-clear-btn ${searchQuery ? 'visible' : ''}`} 
                                onClick={handleClearSearch}
                                aria-label="مسح البحث"
                            >
                                &times;
                            </button>
                            <button type="submit" className={`btn btn-primary hero-search-btn ${!searchQuery ? 'can-bounce' : ''}`}>ابحث</button>
                        </form>
                        <div className="hero-social-proof">
                            <div className="student-avatars">
                                <img src="https://i.pravatar.cc/40?u=1" alt="Student avatar 1"/>
                                <img src="https://i.pravatar.cc/40?u=2" alt="Student avatar 2"/>
                                <img src="https://i.pravatar.cc/40?u=3" alt="Student avatar 3"/>
                            </div>
                            <span>انضم لأكثر من <strong>5000</strong> طالب يتعلمون معنا!</span>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <div id="youtube-player"></div>
                        {!isVideoPlaying && (
                            <button 
                                className="video-play-button" 
                                onClick={handlePlayVideo} 
                                aria-label="تشغيل الفيديو"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <section id="classes" className="section">
              <div className="container">
                <h2 className="section-title">الصفوف الدراسية</h2>
                <p className="section-subtitle">اختر الصف المناسب من القائمة لاستعراض تفاصيله وخطة الدراسة المخصصة له.</p>
                <div className="classes-layout-container">
                    <div className={`classes-scroll-wrapper ${scrollState.canScrollPrev ? 'can-scroll-prev' : ''} ${scrollState.canScrollNext ? 'can-scroll-next' : ''}`}>
                      <button 
                        className={`classes-scroll-btn prev ${scrollState.canScrollPrev ? 'visible' : ''}`} 
                        onClick={() => handleScroll('prev')} 
                        disabled={!scrollState.canScrollPrev}
                        aria-label="الصف السابق"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                      </button>
                      <div className="classes-list" ref={classesListRef}>
                          {classes.map((cls, index) => (
                            <div
                              key={index}
                              className={`class-list-item ${index === selectedClassIndex ? 'active' : ''}`}
                              onClick={() => setSelectedClassIndex(index)}
                              // FIX: Cast style object with CSS custom properties to React.CSSProperties
                              style={{
                                '--class-color': cls.color,
                                '--class-color-light': `${cls.color}20`
                              } as React.CSSProperties}
                               ref={node => {
                                const map = classItemRefs.current;
                                if (node) map.set(index, node);
                                else map.delete(index);
                              }}
                            >
                              <div className="class-list-icon" style={{ backgroundColor: cls.color }}>{cls.icon}</div>
                              <span>{cls.title}</span>
                            </div>
                          ))}
                      </div>
                      <button 
                          className={`classes-scroll-btn next ${scrollState.canScrollNext ? 'visible' : ''}`}
                          onClick={() => handleScroll('next')} 
                          disabled={!scrollState.canScrollNext}
                          aria-label="الصف التالي"
                      >
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                      </button>
                    </div>
                    {selectedClass && (
                        // FIX: Cast style object with CSS custom properties to React.CSSProperties
                        <div className="class-details-panel" key={selectedClassIndex} style={{ '--class-color': selectedClass.color } as React.CSSProperties}>
                            <div className="class-details-header">
                              <div className="class-card-icon" style={{ backgroundColor: selectedClass.color }}>
                                  {selectedClass.icon}
                              </div>
                              <h3 className="class-card-title">{selectedClass.title}</h3>
                            </div>
                            <div className="class-details-info">
                              <p className="class-card-description">{selectedClass.description}</p>
                              <div className="class-details-footer">
                                <span className="class-card-subjects">{selectedClass.subjects}</span>
                                <a href="#subjects" onClick={(e) => { e.preventDefault(); handleViewDetails(selectedClass); }} className="btn btn-secondary" style={{backgroundColor: selectedClass.color}}>عرض التفاصيل</a>
                              </div>
                            </div>
                        </div>
                    )}
                </div>
              </div>
            </section>

            <section id="programs" className="section courses-section">
                <div className="container">
                    <h2 className="section-title">
                        {activeSearchTerm && !noResultsFound ? `نتائج البحث عن: "${activeSearchTerm}"` : 'برامجنا الرئيسية'}
                    </h2>
                    <p className="section-subtitle">
                        {!activeSearchTerm && 'برامج مصممة لسد الفجوات التعليمية وتوفير الدعم اللازم للنجاح الأكاديمي.'}
                    </p>
                    <div className="course-filters">
                        {courseFilters.map((filter) => (
                             <button 
                                key={filter} 
                                className={`filter-btn ${activeCourseFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveCourseFilter(filter)}>
                                {filter}
                            </button>
                        ))}
                    </div>
                    
                    {noResultsFound ? (
                         <div className="no-results-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                               <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.49-1.49-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                            <h3>لم نجد ما تبحث عنه</h3>
                            <p>لم نتمكن من العثور على أي نتائج تطابق بحثك عن "<strong>{activeSearchTerm}</strong>".</p>
                            <p className="no-results-suggestion">
                              جرّب البحث بكلمات أخرى أو تحقق من الأخطاء الإملائية.
                            </p>
                        </div>
                    ) : (
                        <div className="grid courses-grid">
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((course, index) => (
                                    <div key={index} className="course-card">
                                        <div className={`course-card-icon-wrapper ${course.gradient}`}>
                                            <div dangerouslySetInnerHTML={{ __html: course.iconSvg }} />
                                            <span className="course-card-category">{course.category}</span>
                                        </div>
                                        <div className="course-card-content">
                                            <h3 className="course-card-title">{course.title}</h3>
                                            <p className="course-card-details">{course.details}</p>
                                            <div className="course-card-footer">
                                                {course.subjectDetails && course.subjectDetails.length > 0 ? (
                                                  <a href="#" onClick={(e) => { e.preventDefault(); handleViewDetails(course); }} className="btn btn-secondary course-card-cta">عرض التفاصيل</a>
                                                ) : (
                                                  <a href="#" onClick={(e) => { e.preventDefault(); openRegisterModal(`تسجيل في: ${course.title}`, registrationSubtitle); }} className="btn btn-secondary course-card-cta">سجل الآن</a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no-results-message">
                                    {activeSearchTerm ? 'لا توجد نتائج تطابق بحثك في هذه الفئة.' : 'لا توجد برامج في هذه الفئة حالياً.'}
                                </p>
                            )}
                        </div>
                    )}
                    
                    {!activeSearchTerm && !noResultsFound && (
                      <div className="view-all-courses-container">
                          <a href="#" className="btn btn-primary">عرض كل البرامج</a>
                      </div>
                    )}
                </div>
            </section>

            <section className="section placement-test-section">
                <div className="container placement-test-card">
                    <div className="placement-test-content">
                        <h2 className="section-title">لست متأكداً من المستوى المناسب؟</h2>
                        <p className="placement-test-description">
                            لا تقلق! نقدم اختبار تحديد مستوى دقيق وشامل يساعدك في اختيار الصف أو البرنامج الأنسب لقدراتك واحتياجاتك، مما يضمن لك بداية صحيحة وفعالة.
                        </p>
                        <button className="btn btn-primary placement-test-cta">ابدأ اختبار تحديد المستوى</button>
                    </div>
                    <div className="placement-test-visual">
                        <div className="placement-test-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="features" className="section">
                <div className="container">
                    <h2 className="section-title">لماذا تختار منصة ضاد؟</h2>
                    <p className="section-subtitle">نقدم تعليماً عالي الجودة يتجاوز حدود الفصول الدراسية التقليدية.</p>
                    <div className="grid features-grid">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-card-icon">{feature.icon}</div>
                                <h3 className="feature-card-title">{feature.title}</h3>
                                <p className="feature-card-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="section how-it-works-section">
              <div className="container">
                <h2 className="section-title">كيف تبدأ رحلتك؟</h2>
                <p className="section-subtitle">ثلاث خطوات بسيطة تفصلك عن بداية رحلة تعليمية ممتعة وفعالة.</p>
                <div className="how-it-works-timeline">
                  {howItWorksData.map((step, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-node">
                          {step.icon}
                      </div>
                      <div className="timeline-content">
                          <h3 className="timeline-title">{step.title}</h3>
                          <p className="timeline-description">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact-us" className="section contact-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">تواصل معنا</h2>
                  <p className="section-subtitle">
                    هل لديك سؤال أو استفسار؟ فريقنا جاهز لمساعدتك. املأ النموذج أدناه أو استخدم إحدى طرق التواصل المباشرة.
                  </p>
                </div>
                <div className="contact-card">
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
                            <div className={`form-group ${contactNameError ? 'has-error' : ''}`}>
                                <input type="text" id="name" name="name" required placeholder=" " value={contactName} onChange={(e) => setContactName(e.target.value)} />
                                <label htmlFor="name">الاسم الكامل</label>
                                <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                <p className="form-hint">الرجاء إدخال اسمك الثلاثي.</p>
                                {contactNameError && <p className="form-error">{contactNameError}</p>}
                            </div>
                             <div className={`form-group ${contactEmailError ? 'has-error' : ''}`}>
                                <input type="email" id="email" name="email" required placeholder=" " value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                                <label htmlFor="email">البريد الإلكتروني</label>
                                <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                <p className="form-hint">مثال: user@example.com</p>
                                {contactEmailError && <p className="form-error">{contactEmailError}</p>}
                            </div>
                            <div className={`form-group ${contactWhatsappError ? 'has-error' : ''}`}>
                                <div className="phone-group">
                                    <select className="country-code-select" value={contactCountryCode} onChange={(e) => setContactCountryCode(e.target.value)} aria-label="Country Code">
                                      {countryCodes.map(c => <option key={c.code} value={c.code}>{c.name} ({c.code})</option>)}
                                    </select>
                                    <input type="tel" id="whatsapp" name="whatsapp" value={contactWhatsapp} onChange={(e) => setContactWhatsapp(e.target.value)} placeholder=" " required />
                                    <label htmlFor="whatsapp">رقم الواتساب</label>
                                    <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.5 14.3c-.27-.13-1.62-.8-1.87-.89-.25-.09-.44-.13-.62.13-.18.27-.71.89-.87 1.08-.16.18-.32.2-.6.06-.28-.13-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.92-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.41.13-.1.18-.18.27-.31.09-.13.04-.25 0-.38-.05-.13-.62-1.5-1.02-2.05-.18-.22-.37-.27-.51-.27-.14 0-.3 0-.44.02-.6.09-1.05.5-1.21 1.25-.13.58.27 2.16.32 2.31.3.75 1.5 3.12 3.65 4.35 1.25.75 2.2 1.05 2.8.9.7-.15 1.5-.7 1.75-1.3.25-.6.25-1.15.18-1.25z"/></svg>
                                </div>
                                <p className="form-hint">سيتم استخدام هذا الرقم للتواصل معك بشكل مباشر.</p>
                                {contactWhatsappError && <p className="form-error">{contactWhatsappError}</p>}
                            </div>
                            <div className={`form-group ${contactMessageError ? 'has-error' : ''}`}>
                                <textarea id="message" name="message" rows={5} required placeholder=" " value={contactMessage} onChange={(e) => setContactMessage(e.target.value)}></textarea>
                                <label htmlFor="message">رسالتك</label>
                                 <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg>
                                <p className="form-hint">لا تتردد في كتابة أي استفسار لديك.</p>
                                {contactMessageError && <p className="form-error">{contactMessageError}</p>}
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isContactSubmitting}>
                                {isContactSubmitting ? 'جار الإرسال...' : 'إرسال الرسالة'}
                                {isContactSubmitting && <span className="spinner"></span>}
                            </button>
                        </form>
                    </div>
                    <div className="contact-separator"><span>أو</span></div>
                    <div className="contact-direct-wrapper">
                      <a href="mailto:info@dhad.com?subject=Inquiry%20from%20DHAD%20platform" className="contact-info-block">
                          <div className="info-icon-wrapper">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zM12 11 4 6h16l-8 5z"/></svg>
                          </div>
                          <div className="info-text">
                              <h4>راسلنا عبر البريد الإلكتروني</h4>
                              <span>info@dhad.com</span>
                          </div>
                      </a>
                      <a href="https://wa.me/963987654321" target="_blank" rel="noopener noreferrer" className="contact-info-block">
                          <div className="info-icon-wrapper">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.5 14.3c-.27-.13-1.62-.8-1.87-.89-.25-.09-.44-.13-.62.13-.18.27-.71.89-.87 1.08-.16.18-.32.2-.6.06-.28-.13-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.92-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.41.13-.1.18-.18.27-.31.09-.13.04-.25 0-.38-.05-.13-.62-1.5-1.02-2.05-.18-.22-.37-.27-.51-.27-.14 0-.3 0-.44.02-.6.09-1.05.5-1.21 1.25-.13.58.27 2.16.32 2.31.3.75 1.5 3.12 3.65 4.35 1.25.75 2.2 1.05 2.8.9.7-.15 1.5-.7 1.75-1.3.25-.6.25-1.15.18-1.25z"/></svg>
                          </div>
                          <div className="info-text">
                              <h4>تحدث معنا عبر الواتساب</h4>
                              <span>+963 987 654 321</span>
                          </div>
                      </a>
                    </div>
                     <div className="contact-social-block">
                        <h4>تابعنا على وسائل التواصل</h4>
                        <div className="social-links-contact">
                            <a href="#" aria-label="Facebook" className="social-icon facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                            <a href="#" aria-label="LinkedIn" className="social-icon linkedin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2V21h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></a>
                            <a href="#" aria-label="Instagram" className="social-icon instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg></a>
                            <a href="#" aria-label="YouTube" className="social-icon youtube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.26 5 12 5 12 5s-6.26 0-7.82.44c-.86.23-1.52.89-1.76 1.75C2 8.74 2 12 2 12s0 3.26.42 4.81c.23.86.91 1.52 1.76 1.75C5.74 19 12 19 12 19s6.26 0 7.82-.44c.86-.23 1.52-.89-1.76-1.75C22 15.26 22 12 22 12s0-3.26-.42-4.81zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg></a>
                        </div>
                    </div>
                </div>
              </div>
            </section>
          </>
        )}
        {currentView === 'subjects' && detailsViewItem && (
           <SubjectsView
              itemInfo={detailsViewItem}
              onBack={handleBackToMain}
              onRegister={handleRegisterForSubject}
          />
        )}
        {currentView === 'register' && (
          <RegistrationView classes={classes} onBackToMain={handleBackToMainFromRegister} />
        )}
      </main>

      {currentView !== 'register' && (
        <footer className="app-footer">
            <div className="container">
            <div className="footer-grid">
                <div className="footer-column">
                <Logo className="footer-logo" />
                <p className="footer-about">
                    منصة تعليمية تهدف إلى دعم الطلاب السوريين وتسهيل اندماجهم في المناهج الدراسية.
                </p>
                </div>
                <div className="footer-column">
                <h3 className="footer-heading">روابط سريعة</h3>
                <ul className="footer-links">
                    <li><a href="#home" onClick={handleSmoothScroll}>الرئيسية</a></li>
                    <li><a href="#classes" onClick={handleSmoothScroll}>الصفوف</a></li>
                    <li><a href="#programs" onClick={handleSmoothScroll}>البرامج</a></li>
                    <li><a href="#features" onClick={handleSmoothScroll}>لماذا نحن؟</a></li>
                </ul>
                </div>
                <div className="footer-column">
                <h3 className="footer-heading">برامجنا</h3>
                <ul className="footer-links">
                    <li><a href="#programs" onClick={(e) => { handleSmoothScroll(e); setActiveCourseFilter('التعليم التعويضي المسرّع');}}>التعليم التعويضي</a></li>
                    <li><a href="#programs" onClick={(e) => { handleSmoothScroll(e); setActiveCourseFilter('تعليم اللغة العربية لغير الناطقين');}}>العربية لغير الناطقين</a></li>
                    <li><a href="#programs" onClick={(e) => { handleSmoothScroll(e); setActiveCourseFilter('برامج علاجية استشارية');}}>برامج علاجية</a></li>
                    <li><a href="#programs" onClick={(e) => { handleSmoothScroll(e); setActiveCourseFilter('دورات تدريبية إضافية');}}>دورات إضافية</a></li>
                </ul>
                </div>
                <div className="footer-column">
                <h3 className="footer-heading">تابعنا</h3>
                <div className="social-links-footer">
                    <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2-2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/></svg></a>
                    <a href="#" aria-label="WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.5 14.3c-.27-.13-1.62-.8-1.87-.89-.25-.09-.44-.13-.62.13-.18.27-.71.89-.87 1.08-.16.18-.32.2-.6.06-.28-.13-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.92-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.41.13-.1.18-.18.27-.31.09-.13.04-.25 0-.38-.05-.13-.62-1.5-1.02-2.05-.18-.22-.37-.27-.51-.27-.14 0-.3 0-.44.02-.6.09-1.05.5-1.21 1.25-.13.58.27 2.16.32 2.31.3.75 1.5 3.12 3.65 4.35 1.25.75 2.2 1.05 2.8.9.7-.15 1.5-.7 1.75-1.3.25-.6.25-1.15.18-1.25z"/></svg></a>
                    <a href="#" aria-label="Telegram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-1.02.2-1.3l15.97-6.16c.73-.28 1.45.16 1.18 1.08l-3.03 14.07c-.33 1.14-1.21 1.42-2.03.88l-4.92-3.61l-2.38 2.3c-.26.26-.6.39-1.03.24z"/></svg></a>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} منصة ضاد التعليمية. جميع الحقوق محفوظة.</p>
            </div>
            </div>
        </footer>
      )}


      {isRegisterModalOpen && (
        <div className="modal-overlay" onClick={closeRegisterModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeRegisterModal} aria-label="إغلاق">&times;</button>
            <h2 className="modal-title">
                {modalTitle.includes('-') ? (
                    <>
                        {modalTitle.split('-')[0]} - <span>{modalTitle.split('-')[1]}</span>
                    </>
                ) : (
                  isRegistration ? <span>{modalTitle}</span> : modalTitle
                )}
            </h2>

            <p className="modal-subtitle">{modalSubtitle}</p>
            <form className="registration-form" onSubmit={handleRegisterSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="modal-student-name">اسم الطالب</label>
                <input
                  type="text"
                  id="modal-student-name"
                  name="student-name"
                  required
                  value={registerStudentName}
                  onChange={(e) => setRegisterStudentName(e.target.value)}
                  className={registerStudentNameError ? 'input-error' : ''}
                />
                {registerStudentNameError && <p className="form-error">{registerStudentNameError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="modal-parent-name">اسم ولي الأمر</label>
                <input
                  type="text"
                  id="modal-parent-name"
                  name="parent-name"
                  required
                  value={registerParentName}
                  onChange={(e) => setRegisterParentName(e.target.value)}
                  className={registerParentNameError ? 'input-error' : ''}
                />
                 {registerParentNameError && <p className="form-error">{registerParentNameError}</p>}
              </div>
              <div className="form-group">
                  <label htmlFor="modal-whatsapp">رقم واتساب ولي الأمر</label>
                  <div className={`input-with-prefix ${registerWhatsappError ? 'input-error' : ''}`}>
                      <select
                        className="country-code-select"
                        value={registerCountryCode}
                        onChange={(e) => setRegisterCountryCode(e.target.value)}
                      >
                          {countryCodes.map(c => <option key={c.code} value={c.code}>{c.name} ({c.code})</option>)}
                      </select>
                      <input 
                        type="tel" 
                        id="modal-whatsapp" 
                        name="whatsapp" 
                        required 
                        value={registerWhatsapp}
                        onChange={(e) => setRegisterWhatsapp(e.target.value)}
                        placeholder="789 123 456" 
                      />
                  </div>
                  {registerWhatsappError && <p className="form-error">{registerWhatsappError}</p>}
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn" disabled={isRegisterSubmitting}>
                {isRegisterSubmitting ? 'جار الإرسال...' : 'إرسال طلب التسجيل'}
              </button>
            </form>
          </div>
        </div>
      )}
      
      {currentView !== 'register' && showBackToTop && (
        <button onClick={scrollToTop} className="fab" aria-label="العودة للأعلى">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41-1.41z"/></svg>
        </button>
      )}


      {toast.show && (
        <div className={`toast-notification ${toast.type} ${toast.show ? 'show' : ''}`} role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>{toast.message}</span>
        </div>
      )}
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
