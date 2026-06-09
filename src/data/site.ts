// ─────────────────────────────────────────────────────────────
// 21 Degrees Heating Ltd - single source of truth
// Facts confirmed via brief + Companies House + harvested copy.
// ─────────────────────────────────────────────────────────────

export const company = {
  legalName: '21 Degrees Heating Limited',
  shortName: '21 Degrees Heating',
  companyNumber: '05140422',
  vat: 'VAT no. to be confirmed', // PLACEHOLDER - client to supply
  ico: 'ICO registration to be confirmed', // PLACEHOLDER - required for form data
  incorporated: '28 May 2004',
  yearsTrading: 22,
  staff: '20+',
  director: 'Jonathan Mark Smith',
  netAssets: '£552,735',
  founded: 2004,
  phoneDisplay: '020 7622 9388',
  phoneHref: '+442076229388',
  email: 'admin@21degreesheating.co.uk',
  registeredOffice: 'Janay Sec, Suite 2, Unit 2 Bradburys Court, Lyon Road, Harrow, Middlesex HA1 2BY',
  tradingAddress: 'Unit 7, Building B, Parkfield Industrial Estate, Culvert Place, London SW11 5BA',
  tradingCity: 'Battersea, Wandsworth, London',
  mapsQuery: 'Parkfield Industrial Estate, Culvert Place, London SW11 5BA',
  linkedin: '#', // PLACEHOLDER - client to confirm company page
} as const;

export const stats = [
  { value: 'Since 2004', label: '22 years of M&E delivery' },
  { value: '£10M+', label: 'In named project portfolio' },
  { value: '12', label: 'Industry accreditations' },
  { value: '20+', label: 'In-house staff' },
] as const;

export type Sector = {
  slug: string;
  no: string;
  name: string;
  tag: string;
  blurb: string;
};

export const sectors: Sector[] = [
  {
    slug: 'social-housing',
    no: '01',
    name: 'Social Housing',
    tag: 'Council estates · district heating',
    blurb:
      'Energy centres, district heating mains and in-flat installations across council estates in Southwark, Lambeth and the City of London - delivered around residents in occupied buildings.',
  },
  {
    slug: 'nhs-healthcare',
    no: '02',
    name: 'NHS & Healthcare',
    tag: 'Trust estates · plantroom renewal',
    blurb:
      'Full plantroom renewals and BMS upgrades for NHS Trust estates, completed block-by-block to keep critical healthcare buildings running throughout the works.',
  },
  {
    slug: 'heritage',
    no: '03',
    name: 'Heritage',
    tag: 'Listed & public buildings',
    blurb:
      'Heating infrastructure inside live heritage landmarks - Tower Bridge, Bow Street, Victorian estates - working around the public, conservation constraints and multi-trade coordination.',
  },
  {
    slug: 'education',
    no: '04',
    name: 'Education',
    tag: 'Universities · student accommodation',
    blurb:
      'Campus-scale plant and distribution for university estates - 463 student rooms at Kingston Hill, ASHP retrofit at Seething Wells - phased around the academic calendar.',
  },
  {
    slug: 'local-authority',
    no: '05',
    name: 'Local Authority',
    tag: 'Civic centres · gas-free retrofit',
    blurb:
      'Civic and council-owned buildings, including gas-free Air Source Heat Pump conversions at Dartford Civic Centre - infrastructure for the net-zero estate.',
  },
  {
    slug: 'commercial',
    no: '06',
    name: 'Commercial',
    tag: 'New build · refurbishment · hotels',
    blurb:
      'Commercial new build and refurbishment, from hotel conversions to cultural venues - design, fabrication and installation under a single accountable contractor.',
  },
];

export type Service = {
  slug: string;
  no: string;
  name: string;
  tag: string;
  blurb: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'plant-rooms',
    no: '01',
    name: 'Plant Rooms',
    tag: 'Boilers up to 1.5MW',
    blurb:
      'Complete plant rooms from strip-out to commissioning - boilers, plate heat exchangers, buffer vessels, pumps and pipework. Up to three 1.5MW boilers (4.5MW) in a single energy centre.',
  },
  {
    slug: 'district-heating',
    no: '02',
    name: 'District Heating',
    tag: 'Mains up to 2km',
    blurb:
      'Pre-insulated district heating distribution mains - up to 2km of Class 1 welded flow and return, civils included, connecting 1,000+ properties from a centralised energy centre.',
  },
  {
    slug: 'heat-pumps',
    no: '03',
    name: 'Heat Pumps & Renewables',
    tag: 'MCS certified · ASHP',
    blurb:
      'MCS-certified Air Source Heat Pump schemes and gas-free conversions - Dartford Civic Centre and Orchard Theatres regenerated to run solely on Air Source.',
  },
  {
    slug: 'electrical-bms',
    no: '04',
    name: 'Electrical & BMS',
    tag: 'In-house design',
    blurb:
      'Full electrical design and Building Management Systems engineered in-house, controlling and monitoring every plant room we install.',
  },
  {
    slug: 'ventilation-ac',
    no: '05',
    name: 'Ventilation & AC',
    tag: 'Air handling',
    blurb:
      'Ventilation and air conditioning installation integrated with the heating and hot water systems we design and fabricate.',
  },
  {
    slug: 'ground-works',
    no: '06',
    name: 'Ground Works',
    tag: 'In-house civils team',
    blurb:
      'An in-house ground works team for excavation, directional drilling and civils - so district heating and external mains stay under our own programme control.',
  },
  {
    slug: 'emergency-boiler-hire',
    no: '07',
    name: 'Emergency Boiler Hire',
    tag: '24/7 · 100kW–2MW fleet',
    featured: true,
    blurb:
      'Our own fleet of temporary boiler plants from 100kW to 2MW, supplied and serviced by us, for emergency heating and hot water cover when a system fails.',
  },
  {
    slug: 'maintenance',
    no: '08',
    name: 'Maintenance & PPM',
    tag: 'Condition monitoring',
    blurb:
      'Planned preventative maintenance, condition monitoring and reporting to keep installed plant compliant and running - with project management and space-planning consultancy.',
  },
  {
    slug: 'design-fabrication',
    no: '09',
    name: 'Design & Fabrication',
    tag: 'In-house · rare in the industry',
    blurb:
      'Full in-house M&E design and our own pipe fabrication service - concept to commissioning under one roof, giving clients delivery certainty subcontracted chains can’t match.',
  },
];

export type Project = {
  slug: string;
  name: string;
  value: string;
  valueNum: number;
  sector: string;
  sectorSlug: string;
  year?: string;
  client: string;
  location: string;
  summary: string;
  scope: string[];
  specs: { label: string; value: string }[];
  narrative: string[];
  photos: string[];
  // stylised map position (0–100 in viewBox space) across London & the South East
  map: { x: number; y: number };
};

export const projects: Project[] = [
  {
    slug: 'tower-bridge',
    name: 'Tower Bridge',
    value: '£800,000',
    valueNum: 800000,
    sector: 'Heritage',
    sectorSlug: 'heritage',
    client: 'Tower Bridge / City of London',
    location: 'Tower Bridge, London SE1',
    summary:
      'Two new commercial boiler rooms and full distribution pipework inside a working heritage landmark - delivered through the height of the tourist season.',
    scope: [
      'Two new commercial boiler rooms within the two main piers',
      'New structural steelwork to extend the existing plantrooms',
      'New distribution pipework to the two public viewing walkways',
      'Renewal of leaking gas supply via duct from Shad Thames',
      'High-level space heating and existing radiator feeds',
    ],
    specs: [
      { label: 'Project value', value: '£800,000' },
      { label: 'New boiler rooms', value: '2' },
      { label: 'Setting', value: 'Live heritage landmark' },
      { label: 'Sector', value: 'Heritage' },
    ],
    narrative: [
      'This project involved installing new structural steelwork to extend the existing plantrooms within the two main piers. We removed the redundant plant and installed a completely new boiler plant onto the new steelwork platform.',
      'From there we installed new distribution pipework up to the two public viewing walkways to feed the existing radiators and new high-level space heating. The existing gas supply to the south-west tower boiler room was leaking and had to be replaced - running a new pipe from the existing gas meter room located on Shad Thames beneath the bridge, through the gift shop and up onto the Tower Bridge Approach footpath within a duct.',
      'All of this was carried out during the height of the tourist season. This was a complex project as we had to work around the public, staff and the busy traffic that crosses the bridge every day. Planning and preparation were key to the success of this project, which was completed on time.',
    ],
    photos: ['tower-bridge-01', 'tower-bridge-02', 'tower-bridge-03', 'tower-bridge-04', 'tower-bridge-05', 'tower-bridge-06', 'tower-bridge-07'],
    map: { x: 58, y: 53 },
  },
  {
    slug: 'kingston-hill',
    name: 'Kingston Hill Campus',
    value: '£1,500,000',
    valueNum: 1500000,
    sector: 'Education',
    sectorSlug: 'education',
    client: 'Kingston University',
    location: 'Kingston upon Thames',
    summary:
      'New plant rooms and full heating, hot water and ventilation distribution to 463 student accommodation rooms, with a 500m gas main installed by directional drilling.',
    scope: [
      'Main plantroom: 6 × 250kW boilers, plate heat exchanger, distribution pumps',
      'Satellite loft plantrooms with PHEs and hot water calorifiers',
      'Heating, hot water and cold-water distribution to 463 rooms',
      '500m new gas supply via directional drilling',
      'Foam-pig pressure test and remote-camera inspection',
    ],
    specs: [
      { label: 'Project value', value: '£1,500,000' },
      { label: 'Student rooms', value: '463' },
      { label: 'Main plant', value: '6 × 250kW boilers' },
      { label: 'New gas main', value: '500m (directional drill)' },
    ],
    narrative: [
      'This project was broken down into separate student blocks. Students were moved out of each block, then demolition of internal walls was carried out. 21 Degrees Heating installed new heating, hot water and cold-water distribution pipework from satellite plantrooms - also installed by us - to each new student room. New bathroom pods were installed by other contractors; 21 Degrees connected to these and installed new ventilation.',
      'The satellite plantrooms were in the loft space of each block with a plate heat exchanger and hot water calorifiers. The main plantroom that fed the whole site consisted of six 250kW boilers, a plate heat exchanger and distribution pumps.',
      'We installed a new gas supply to the building from the existing supply 500m away. To keep the site running smoothly this was done using directional drilling - a specialist rig drills the full 500m length at roughly 1m depth, then pulls the new MDPE pipe back through. After installation we send a foam pig through under pressure to confirm no debris contaminated the pipe, then a remote-controlled camera the full length to check all is clear.',
    ],
    photos: ['kingston-hill-01', 'kingston-hill-02', 'kingston-hill-03', 'kingston-hill-04', 'kingston-hill-05', 'kingston-hill-06', 'kingston-hill-07', 'kingston-hill-08', 'kingston-hill-09', 'kingston-hill-10', 'kingston-hill-11'],
    map: { x: 23, y: 70 },
  },
  {
    slug: 'seething-wells',
    name: 'Seething Wells',
    value: '£1,000,000',
    valueNum: 1000000,
    sector: 'Education',
    sectorSlug: 'education',
    client: 'Kingston University',
    location: 'Surbiton, Kingston upon Thames',
    summary:
      'Student accommodation heating and a site-wide gas network upgrade, with an Air Source Heat Pump installed to a Victorian heritage building.',
    scope: [
      'New hot water cylinders and heating distribution to rooms and communal areas',
      'Site-wide gas network upgrade',
      'New cold-water supply to all blocks',
      'ASHP feeding a Victorian heritage building',
    ],
    specs: [
      { label: 'Project value', value: '£1,000,000' },
      { label: 'Renewables', value: 'ASHP (heritage building)' },
      { label: 'Boilers', value: 'Heat-only domestic type' },
      { label: 'Sector', value: 'Education + Renewables' },
    ],
    narrative: [
      'Very similar to the Kingston Hill project, except the blocks are smaller and run heat-only domestic-type boilers. We installed new hot water cylinders and heating distribution to rooms and communal areas.',
      'Outside the blocks the gas network was upgraded, along with a new cold-water supply to all the blocks. We installed a new Air Source Heat Pump to feed one of the Victorian-built heritage buildings, supplying the heating and hot water primary pipework.',
    ],
    photos: ['renewables-02', 'plant-05', 'renewables-03'],
    map: { x: 15, y: 80 },
  },
  {
    slug: 'bow-street-magistrates',
    name: 'Bow Street Magistrates',
    value: '£750,000',
    valueNum: 750000,
    sector: 'Heritage',
    sectorSlug: 'heritage',
    client: 'Hotel developer',
    location: 'Bow Street, Covent Garden',
    summary:
      'New plantroom and full wet-services distribution for the conversion of the former Bow Street Magistrates Court into a hotel, alongside multiple trades in a heritage building.',
    scope: [
      'New level 3 plantroom',
      'New 6" in 8" gas distribution within the heritage building',
      'Hot, cold and chilled water distribution to hotel rooms',
      'Gas supply to three commercial kitchens',
    ],
    specs: [
      { label: 'Project value', value: '£750,000' },
      { label: 'Gas main', value: '6" in 8" distribution' },
      { label: 'Commercial kitchens', value: '3' },
      { label: 'Sector', value: 'Heritage + Hotel' },
    ],
    narrative: [
      'This was another complex project as we had to work alongside multiple trades in a heritage building. The work involved a new 6" in 8" gas distribution pipe within the building to supply the new level 3 plantroom and three commercial kitchens.',
      '21 Degrees Heating carried out the installation of the new plantroom and the distribution of the associated pipework to the new hotel rooms.',
    ],
    photos: ['plant-01', 'plant-04'],
    map: { x: 52, y: 49 },
  },
  {
    slug: 'st-martins-hospital',
    name: 'St Martins Hospital',
    value: '£400,000',
    valueNum: 400000,
    sector: 'NHS & Healthcare',
    sectorSlug: 'nhs-healthcare',
    client: 'NHS Trust',
    location: 'Canterbury, Kent',
    summary:
      'Complete renewal of three boiler rooms across three separate hospital blocks, including new BMS panels - strip-out to commissioning.',
    scope: [
      'Three boiler rooms across three separate blocks',
      'New boilers, plate heat exchangers, pumps and pipework',
      'New BMS control panels',
      'Strip-out to commissioning and handover',
    ],
    specs: [
      { label: 'Project value', value: '£400,000' },
      { label: 'Boiler rooms', value: '3 blocks' },
      { label: 'Controls', value: 'New BMS panels' },
      { label: 'Sector', value: 'NHS Healthcare' },
    ],
    narrative: [
      'These plantrooms fed varying-size blocks of the hospital in Canterbury. We carried out complete renewal of each plantroom from strip-out to commissioning and handover - new boilers, plate heat exchangers, pumps, pipework and new controls.',
    ],
    photos: ['st-martins-01', 'st-martins-02', 'st-martins-03', 'st-martins-04', 'st-martins-05', 'st-martins-06'],
    map: { x: 93, y: 80 },
  },
  {
    slug: 'brimmington-estate',
    name: 'Brimmington Estate',
    value: '£1,200,000',
    valueNum: 1200000,
    sector: 'Social Housing',
    sectorSlug: 'social-housing',
    client: 'London Borough of Southwark',
    location: 'Southwark, London',
    summary:
      'New district heating mains from a centralised boiler house to over 1,000 properties - 2km of Class 1 welded pre-insulated steel pipework, civils included.',
    scope: [
      '2km of flow and return pre-insulated steel pipework',
      'Civils, excavation and reinstatement across the estate',
      'Road closures and traffic management with Southwark Council',
      'Class 1 welding, all welds tested and numbered',
      'Specialist Mittel method of jointing',
    ],
    specs: [
      { label: 'Project value', value: '£1,200,000' },
      { label: 'District main', value: '2km flow & return' },
      { label: 'Properties served', value: '1,000+' },
      { label: 'Welding', value: 'Class 1, tested & numbered' },
    ],
    narrative: [
      '21 Degrees carried out the civils works installation of 2km of flow and return pre-insulated steel pipework. This involved excavation around the estate working in close proximity to the public, as well as organising road closures and traffic management with Southwark Council.',
      'All the pipework installed was carried out in accordance with Class 1 welding, and all welds were tested and numbered before being closed up using the specialist Mittel method of jointing.',
    ],
    photos: ['plant-03', 'plant-05'],
    map: { x: 60, y: 60 },
  },
  {
    slug: 'middlesex-york-way',
    name: 'Middlesex & York Way Estates',
    value: '£1,500,000',
    valueNum: 1500000,
    sector: 'Social Housing',
    sectorSlug: 'social-housing',
    client: 'City of London',
    location: "King's Cross / City of London",
    summary:
      'New plant rooms and full heating and cold-water distribution across estate blocks, prepared for in-flat HIU and radiator handover.',
    scope: [
      'New plantrooms: boilers, buffer vessels, PHEs, pumps and pipework',
      'New heating distribution pipework from the plantrooms',
      'New cold-water pipework terminating outside each flat',
      'Full pressure testing and insulation before handover',
      'Prepared for in-flat HIU and radiator installation',
    ],
    specs: [
      { label: 'Project value', value: '£1,500,000' },
      { label: 'Plant', value: 'Boilers, buffer vessels, PHEs' },
      { label: 'Handover', value: 'HIU + radiator ready' },
      { label: 'Sector', value: 'Social Housing' },
    ],
    narrative: [
      '21 Degrees Heating installed new plantrooms to each of these blocks, consisting of new boilers, buffer vessels, plate heat exchangers, pumps and pipework. At the same time we installed new distribution heating pipework from the plantrooms and new cold-water pipework to the various blocks, terminating outside each flat.',
      'After full pressure testing and insulation, these were handed over to the teams that carried out the in-flat installation of new HIUs and radiators.',
    ],
    photos: ['middlesex-york-01', 'middlesex-york-02', 'middlesex-york-03', 'middlesex-york-04', 'middlesex-york-05', 'middlesex-york-06', 'middlesex-york-07', 'middlesex-york-08', 'middlesex-york-09'],
    map: { x: 52, y: 43 },
  },
  {
    slug: 'aylesbury-estate',
    name: 'Aylesbury Estate',
    value: '£1,100,000',
    valueNum: 1100000,
    sector: 'Social Housing',
    sectorSlug: 'social-housing',
    client: 'London Borough of Southwark',
    location: 'Walworth, Southwark',
    summary:
      'Complete refurbishment of a central energy centre - three 1.5MW boilers, 4.5MW of heat - feeding nine satellite plant rooms across the estate.',
    scope: [
      'Central energy centre: three 1.5MW boilers (4.5MW total)',
      'Two plate heat exchangers and pump sets per estate leg',
      'Complete strip-out and replacement of all plant and pipework up to 24"',
      'Nine satellite plant rooms refurbished',
      'Secondary HEX, HWS calorifiers and circulating pumps',
    ],
    specs: [
      { label: 'Project value', value: '£1,100,000' },
      { label: 'Central plant', value: '3 × 1.5MW (4.5MW)' },
      { label: 'Satellite plant rooms', value: '9' },
      { label: 'Pipework', value: 'Up to 24 inch' },
    ],
    narrative: [
      'The Aylesbury Estate in Southwark comprises a central energy centre feeding an array of satellite plant rooms, which in turn serve the heating and hot water needs of the entire estate. The refurbishment works comprised a complete refurbishment of the energy centre itself, as well as nine of the satellite plant rooms.',
      'The centralised energy centre comprises three 1,500kW (1.5 megawatt) boilers providing a total of 4.5 megawatts of heat. These boilers leave the plant room via two plate heat exchangers and are distributed via pump sets for each leg of the estate. 21 Degrees carried out a complete strip-out and replacement of all plant, pipework (up to 24 inch) and insulation within the energy centre.',
      'The satellite plant rooms fed from the energy centre comprise a secondary heat exchanger, HWS calorifiers and circulating pumps out to the blocks. All interconnecting pipework, valves, ancillaries, filters and insulation were replaced. Once complete, the energy centre and satellite plant rooms were commissioned and set to work.',
    ],
    photos: ['plant-02', 'plant-04', 'plant-05'],
    map: { x: 53, y: 67 },
  },
  {
    slug: 'dartford-civic-centre',
    name: 'Dartford Civic Centre',
    value: 'ASHP scheme',
    valueNum: 0,
    sector: 'Local Authority',
    sectorSlug: 'local-authority',
    client: 'Dartford Borough Council',
    location: 'Dartford, Kent',
    summary:
      'A large Air Source Heat Pump scheme upgrading the Civic Centre plant room to a system powered solely by Air Source - gas-free.',
    scope: [
      'Civic Centre plant room upgrade',
      'Air Source Heat Pump installation',
      'Gas-free conversion, powered solely by Air Source',
      'MCS-certified renewable scheme',
    ],
    specs: [
      { label: 'Type', value: 'ASHP retrofit' },
      { label: 'Outcome', value: 'Gas-free plant room' },
      { label: 'Certification', value: 'MCS' },
      { label: 'Sector', value: 'Local Authority' },
    ],
    narrative: [
      'We completed a large Air Source Heat Pump scheme for Dartford Borough Council, upgrading their Civic Centre plant room to a system powered solely by Air Source - removing the building’s reliance on gas.',
    ],
    photos: ['renewables-01', 'renewables-03'],
    map: { x: 82, y: 61 },
  },
  {
    slug: 'orchard-theatres',
    name: 'Orchard Theatres',
    value: 'Gas-free retrofit',
    valueNum: 0,
    sector: 'Heritage',
    sectorSlug: 'heritage',
    client: 'Orchard Theatres',
    location: 'Dartford, Kent',
    summary:
      'Complete plant room regeneration to run gas-free - an Air Source Heat Pump conversion for a working cultural venue.',
    scope: [
      'Complete plant room regeneration',
      'Air Source Heat Pump conversion',
      'Gas-free operation',
      'Delivered in a live cultural venue',
    ],
    specs: [
      { label: 'Type', value: 'ASHP regeneration' },
      { label: 'Outcome', value: 'Completely gas-free' },
      { label: 'Certification', value: 'MCS' },
      { label: 'Sector', value: 'Heritage + Renewables' },
    ],
    narrative: [
      'We regenerated the Orchard Theatres’ complete plant room in the same manner as Dartford Civic Centre, so as to become completely gas-free - an Air Source Heat Pump conversion delivered for a working cultural venue.',
    ],
    photos: ['renewables-03', 'renewables-01'],
    map: { x: 88, y: 68 },
  },
];

export type Accreditation = {
  name: string;
  full: string;
  img?: string;
  verify: string;
};

// 12 industry accreditations (+ First Aid as a bonus capability)
export const accreditations: Accreditation[] = [
  { name: 'SafeContractor', full: 'SafeContractor Approved', img: '/badges/safecontractor.gif', verify: 'https://www.safecontractor.com/' },
  { name: 'CHAS', full: 'Contractors Health & Safety Assessment Scheme', img: '/badges/chas.jpg', verify: 'https://www.chas.co.uk/' },
  { name: 'Constructionline', full: 'Constructionline Registered', img: '/badges/constructionline.jpg', verify: 'https://www.constructionline.co.uk/' },
  { name: 'Gas Safe', full: 'Gas Safe Registered', img: '/badges/gas-safe-1.png', verify: 'https://www.gassaferegister.co.uk/' },
  { name: 'ISO', full: 'ISO Certified (certificate no. to be confirmed)', verify: 'https://www.iso.org/' },
  { name: 'MCS', full: 'Microgeneration Certification Scheme', img: '/badges/mcs.jpg', verify: 'https://mcscertified.com/' },
  { name: 'RECC', full: 'Renewable Energy Consumer Code · member 00075844', verify: 'https://recc.org.uk/' },
  { name: 'PASMA', full: 'Mobile Access Tower Safety', img: '/badges/pasma.png', verify: 'https://pasma.co.uk/' },
  { name: 'UKATA', full: 'UK Asbestos Training Association', img: '/badges/ukata.jpg', verify: 'https://www.ukata.org.uk/' },
  { name: 'CSCS / CITB', full: 'Construction Skills Certification Scheme', img: '/badges/cscs-citb.png', verify: 'https://www.cscs.uk.com/' },
  { name: 'NICEIC', full: 'NICEIC Approved Contractor', img: '/badges/niceic.png', verify: 'https://niceic.com/' },
  { name: 'IPAF', full: 'International Powered Access Federation', img: '/badges/ipaf.jpg', verify: 'https://www.ipaf.org/' },
];

export const reasons = [
  {
    no: '01',
    title: 'In-house M&E design',
    body: 'We design every system ourselves - full electrical, BMS and mechanical design under one roof, so what is drawn is what gets built.',
  },
  {
    no: '02',
    title: 'Our own pipe fabrication',
    body: 'We run our own pipe fabrication service - rare in the industry. It gives clients delivery certainty a subcontracted chain cannot promise.',
  },
  {
    no: '03',
    title: 'Our own boiler fleet',
    body: 'Temporary boiler plants from 100kW to 2MW on our own fleet - emergency heat and hot water cover that doesn’t depend on a hire market.',
  },
  {
    no: '04',
    title: '22 years, staff since 2004',
    body: 'Incorporated in 2004, with team members who have been here since the foundation. Continuity of knowledge on every project we deliver.',
  },
];

// UK public-sector frameworks the build signals readiness for
export const frameworks = ['SCAPE', 'Procure23', 'Pagabo', 'LHC', 'Crown Commercial Service', 'Fusion21'];

export const nav = [
  { label: 'Sectors', href: '/sectors' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/portfolio' },
  { label: 'Renewables', href: '/services/heat-pumps' },
  { label: 'Accreditations', href: '/accreditations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
