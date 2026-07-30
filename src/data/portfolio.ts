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
      '성균관 유생들의 식사를 담당하던 진사식당에서 유래된 브랜드의 아이덴티티를 표현하기 위해 톤 다운된 네이비와 금색 몰딩을 활용해 모던하고 고급스러운 분위기를 구성했습니다.',
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
      '체리우드의 따뜻함과 은색 스테인리스의 세련됨을 조합하고, 업종의 동선을 고려한 설계로 운영 편의성을 높인 프로젝트입니다.',
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
      '산뜻하고 싱그러운 분위기를 연출하기 위해 민트 계열 컬러를 중심으로 공간과 사인 디자인을 구성했습니다.',
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
      '딥그린과 로즈골드를 포인트로 활용해 차분하면서도 고급스러운 분위기를 연출하고, 운영 동선을 고려해 공간을 설계했습니다.',
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
      '도면, 가구 상세, 3D 렌더링과 사인 시안을 통해 매장 전반의 공간 구성을 구체화한 프로젝트입니다.',
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
      '업종의 동선을 고려한 설계를 통해 운영 편의성을 높이는 데 집중한 프로젝트입니다.',
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
      '평면과 입면 설계부터 3D 모델링, 렌더링과 현장 감리까지 공간 구현 전반에 참여한 프로젝트입니다.',
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
      '소규모 배달 전문 매장의 평면 계획과 3D 모델링을 진행하고 현장 감리까지 담당한 프로젝트입니다.',
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
      '브랜드 컬러를 중심으로 외관과 내부 공간의 3D 모델링 및 시각화를 진행한 프로젝트입니다.',
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
      '베트남 푸미흥 지역의 K-디저트 카페를 위한 콘셉트 기획, 평면 계획과 3D 모델링 프로젝트입니다.',
    client: '돌우물',
    duration: '40일',
    contribution: '콘셉트 기획, 실측도, 평면도, 3D 모델링 · 기여도 30%',
    tools: ['AutoCAD', 'SketchUp', 'Enscape'],
    images: ['/images/projects/page-27.jpg'],
  },
];
