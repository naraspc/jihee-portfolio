import type { Project, TimelineItem } from '../types/portfolio';

export const profile = {
  nameKo: '황지희',
  nameEn: 'Hwang Ji Hee',
  title: 'Interior Designer',
  email: 'dreamlikezzl@gmail.com',
  tagline: '매일 한 걸음 더 나아가는,\n디자이너 황지희입니다.',
  introduction:
    '작은 경험이 모여 보다 좋은 디자인을 만든다고 믿습니다. 공간이 주는 가치를 고민하고, 사람들의 경험을 바꿀 수 있는 디자이너가 되기 위해 꾸준히 커리어를 이어가고 있습니다.',
};

export const gmailComposeUrl =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent(profile.email)}` +
  `&su=${encodeURIComponent('포트폴리오 문의드립니다.')}`;

export const education = [
  {
    title: '수원과학대학교 실내건축디자인과 졸업',
    period: '2021.02',
  },
];

export const experience: TimelineItem[] = [
  {
    organization: '샐러데이즈 디자인팀',
    period: '2021.05 - 2021.10',
    title: '출력물 및 홍보 디자인',
    description: ['제품 패키지 일러스트 시안 작업', '홍보물 디자인'],
  },
  {
    organization: '미담아이앤씨 설계팀',
    period: '2023.06 - 2024.12',
    title: '상업공간 기획·설계·디자인',
    description: [
      'CAD 평면도, 입면도, 가구 상세도 및 시공도면',
      '3D 모델링 및 렌더링',
      '현장 컬러링과 내·외부 시안 작업',
      '완공 현장 사진 보정 및 홈페이지 업로드',
    ],
  },
  {
    organization: '돌우물 스톤웰 디자인 공간 디자인 2팀',
    period: '2025.11 - 2026.02',
    title: '상업공간 설계 및 감리',
    description: [
      'CAD 실측도, 평면도, 입면도',
      '3D 모델링 및 렌더링',
      '일러스트 시안과 현장 감리',
    ],
  },
];

export const certificates = [
  '자동차운전면허증 2종 보통 · 2018.03',
  '실내건축산업기사 · 2020.07',
  '소방안전관리자 2급 · 2025.07',
];

export const skills = [
  'SketchUp',
  'V-Ray',
  'Enscape',
  'AutoCAD',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'PowerPoint',
  'Excel',
];

export const projects: Project[] = [
  {
    id: 'myeongryun',
    year: '2023',
    title: '명륜진사갈비',
    category: '프리미엄 무한리필 갈비 전문점',
    description:
      '전통의 무게감은 남기고, \n네이비와 골드로 현대적인 품격을 더했습니다.',
    client: '명륜당',
    duration: '30 - 40일',
    contribution:
      '실측도, 입면도, 시공도면, 가구 상세도, 간판 컬러링, 내·외부 시안 배치와 자재 발주 · 기여도 50%',
    tools: ['Illustrator', 'Photoshop', 'AutoCAD'],
    images: [
      '/images/projects/page-04.jpg',
      '/images/projects/page-05.jpg',
      '/images/projects/page-06.jpg',
    ],
  },
  {
    id: 'paldo',
    year: '2023',
    title: '팔도소갈비',
    category: '소갈비 전문점',
    description:
       '체리우드의 온기와 스테인리스의 세련미를 조합해,\n편안하면서도 품격 있는 공간을 완성했습니다.',
    client: '팔도소갈비',
    duration: '30 - 40일',
    contribution:
      '실측도, 입면도, 시공도면, 가구 상세도, 간판 컬러링, 내·외부 시안 배치와 자재 발주 · 기여도 50%',
    tools: ['Illustrator', 'Photoshop', 'AutoCAD', 'SketchUp', 'V-Ray'],
    images: [
      '/images/projects/page-07.jpg',
      '/images/projects/page-08.jpg',
      '/images/projects/page-09.jpg',
      '/images/projects/page-10.jpg',
    ],
  },
  {
    id: 'donut-cafe',
    year: '2023',
    title: '수제 도넛 카페',
    category: '카페 리뉴얼',
    description:
      '민트 컬러의 산뜻함을 중심으로,\n밝고 싱그러운 브랜드 이미지를 공간에 담았습니다.',
    client: '개인',
    duration: '14일',
    contribution:
      '실측도, 입면도, 간판 컬러링, 내·외부 시안 배치, 자재 발주 및 조경 설치 · 기여도 60%',
    tools: ['Illustrator', 'Photoshop', 'AutoCAD'],
    images: ['/images/projects/page-11.jpg', '/images/projects/page-12.jpg'],
  },
  {
    id: 'yukmijedang',
    year: '2024',
    title: '육미제당',
    category: '대장갈비 전문점',
    description:
      '딥그린의 안정감에 로즈골드 포인트를 더해,\n차분하면서도 고급스러운 분위기를 연출했습니다.',
    client: '육미제당',
    duration: '30 - 40일',
    contribution:
      '실측도, 입면도, 시공도면, 간판 컬러링, 내·외부 시안 배치와 자재 발주 · 기여도 50%',
    tools: ['Illustrator', 'Photoshop', 'AutoCAD', 'SketchUp', 'V-Ray'],
    images: ['/images/projects/page-13.jpg', '/images/projects/page-14.jpg'],
  },
  {
    id: 'shabu-all-day',
    year: '2024',
    title: '샤브올데이',
    category: '프리미엄 샤브 뷔페 전문점',
    description:
      '도면과 가구 디테일, 3D 시각화를 연결해,\n브랜드 공간의 완성도를 구체화했습니다.',
    tools: ['AutoCAD', 'SketchUp', 'Rendering', 'Illustrator'],
    images: [
      '/images/projects/page-15.jpg',
      '/images/projects/page-16.jpg',
      '/images/projects/page-17.jpg',
      '/images/projects/page-18.jpg',
      '/images/projects/page-19.jpg',
    ],
  },
  {
    id: 'manbae-arirang',
    year: '2025',
    title: '박만배아리랑',
    category: '가브리살보쌈 전문점',
    description:
      '업종에 최적화된 동선을 중심으로,\n운영 효율과 공간의 실용성을 함께 설계했습니다.',
    client: '박만배아리랑',
    duration: '14 - 30일',
    contribution: '실측도, 평면도, 입면도, 천장도, 현장 감리 · 기여도 100%',
    tools: ['AutoCAD'],
    images: ['/images/projects/page-20.jpg', '/images/projects/page-21.jpg'],
  },
  {
    id: 'greek-berry',
    year: '2025',
    title: '그릭베리',
    category: '아사이볼 카페',
    description:
      '평면 설계부터 3D 모델링과 현장 감리까지,\n브랜드 공간이 구현되는 전 과정을 함께했습니다.',
    client: '돌우물',
    duration: '14 - 30일',
    contribution: '실측도, 평면도, 입면도, 3D 모델링, 현장 감리 · 기여도 90%',
    tools: ['AutoCAD', 'SketchUp', 'Enscape'],
    images: [
      '/images/projects/page-22.jpg',
      '/images/projects/page-23.jpg',
      '/images/projects/page-24.jpg',
    ],
  },
  {
    id: 'dubo-malatang',
    year: '2026',
    title: '두보마라탕',
    category: '마라탕 배달 전문점',
    description:
      '배달 전문점에 필요한 기능을 간결하게 정리해,\n효율적이고 실용적인 공간을 완성했습니다.',
    client: '돌우물',
    duration: '12 - 14일',
    contribution: '실측도, 평면도, 3D 모델링, 현장 감리 · 기여도 100%',
    tools: ['SketchUp', 'Enscape'],
    images: ['/images/projects/page-25.jpg'],
  },
  {
    id: 'wad-coffee',
    year: '2026',
    title: '와드커피',
    category: '디저트 전문 카페',
    description:
    '브랜드 컬러와 밝은 이미지를 중심으로,\n외관과 내부 공간의 분위기를 3D로 구체화했습니다.',
    client: '돌우물',
    duration: '20일',
    contribution: '3D 모델링 · 기여도 50%',
    tools: ['SketchUp', 'Enscape'],
    images: ['/images/projects/page-26.jpg'],
  },
  {
    id: 'pongchi-cafe',
    year: '2026',
    title: '퐁치카페',
    category: '베트남 푸미흥 K-디저트 전문 카페',
    description:
      'K-디저트 브랜드의 감각을 공간에 담아,\n베트남 푸미흥 매장의 콘셉트와 동선을 구체화했습니다.',
    client: '돌우물',
    duration: '40일',
    contribution: '콘셉트 기획, 실측도, 평면도, 3D 모델링 · 기여도 30%',
    tools: ['AutoCAD', 'SketchUp', 'Enscape'],
    images: ['/images/projects/page-27.jpg'],
  },
];
