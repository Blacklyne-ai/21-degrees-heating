// Extended copy for sector + service landing pages.
// Sober, engineering-authoritative voice. Grounded in the real project record.

export type SectorDetail = { intro: string[]; points: string[]; services: string[] };
export type ServiceDetail = { intro: string[]; points: string[] };

export const sectorDetail: Record<string, SectorDetail> = {
  'social-housing': {
    intro: [
      'Council estates are our core. For two decades we have installed energy centres, district heating mains and in-flat plant across occupied social housing - work that has to happen around residents, wardens and the daily life of the building.',
      'From 2km of pre-insulated district main at Brimmington to a 4.5MW energy centre at Aylesbury, we deliver the heavy infrastructure that keeps thousands of homes warm, then hand over clean interfaces for in-flat HIU and radiator teams.',
    ],
    points: [
      'District heating mains - up to 2km of Class 1 welded pre-insulated steel',
      'Central energy centres up to 4.5MW feeding satellite plant rooms',
      'In-flat HIU and radiator handover preparation',
      'Traffic management and road closures coordinated with the council',
      'Delivered in occupied buildings, around residents',
    ],
    services: ['district-heating', 'plant-rooms', 'ground-works', 'maintenance'],
  },
  'nhs-healthcare': {
    intro: [
      'Healthcare estates cannot lose heat or hot water, so we plan NHS plantroom renewals block-by-block, keeping critical buildings running while we strip out and rebuild.',
      'At St Martins Hospital we renewed three boiler rooms across three separate blocks, from strip-out to new BMS panels and commissioning, with continuity of service throughout.',
    ],
    points: [
      'Phased plantroom renewal that keeps the estate running',
      'New boilers, plate heat exchangers, pumps and pipework',
      'BMS control panels and condition monitoring',
      'Temporary boiler cover available during changeover',
      'Gas Safe, CHAS and SafeContractor accredited',
    ],
    services: ['plant-rooms', 'electrical-bms', 'emergency-boiler-hire', 'maintenance'],
  },
  heritage: {
    intro: [
      'Listed and landmark buildings demand a different discipline - conservation constraints, public access and multi-trade coordination on top of the engineering.',
      'We installed two new boiler rooms inside the piers of Tower Bridge through the tourist season, and ran new gas distribution through the heritage fabric of Bow Street. Heritage work is where in-house design and fabrication earn their place.',
    ],
    points: [
      'Plant and distribution inside live, public heritage buildings',
      'Structural steelwork to extend constrained plant rooms',
      'Discreet routing of gas and pipework through historic fabric',
      'Sequenced around public access and other trades',
      'ASHP retrofit to Victorian buildings where appropriate',
    ],
    services: ['plant-rooms', 'design-fabrication', 'heat-pumps'],
  },
  education: {
    intro: [
      'University estates run to the academic calendar, so campus heating has to be delivered in tight, phased windows between cohorts.',
      'At Kingston Hill we distributed heating, hot water and ventilation to 463 student rooms from a 6 x 250kW plantroom, and drilled a 500m gas main in by directional drilling. At Seething Wells we added ASHP to a Victorian block.',
    ],
    points: [
      'Campus plant rooms and site-wide distribution',
      'Hundreds of student rooms phased around term dates',
      'Directional drilling for new gas and service mains',
      'ASHP and renewables for heritage campus buildings',
      'Pressure testing, foam-pig and camera inspection',
    ],
    services: ['plant-rooms', 'district-heating', 'heat-pumps', 'ground-works'],
  },
  'local-authority': {
    intro: [
      'Civic buildings are where the energy transition gets real. Councils need plant that meets carbon commitments without losing resilience - and contractors who understand public procurement.',
      'We converted Dartford Civic Centre to run solely on Air Source Heat Pumps, removing its reliance on gas. We are MCS certified and ready for framework delivery.',
    ],
    points: [
      'Gas-free ASHP conversions for civic buildings (MCS certified)',
      'Plant room upgrades and BMS modernisation',
      'Built for Heat Network Zoning and the Future Buildings Standard',
      'Framework-ready: SCAPE, Procure23, Pagabo, LHC, CCS',
      'Full design, fabrication and installation in-house',
    ],
    services: ['heat-pumps', 'electrical-bms', 'plant-rooms', 'maintenance'],
  },
  commercial: {
    intro: [
      'Commercial new build and refurbishment - hotels, cultural venues and office estates - where programme certainty and single-point accountability matter most.',
      'We delivered a new plantroom, gas distribution and three commercial kitchens for the Bow Street hotel conversion, and regenerated the Orchard Theatres plant room to run gas-free.',
    ],
    points: [
      'New build and refurbishment M&E heating',
      'Hotel, cultural and office plant rooms',
      'Commercial kitchen gas distribution',
      'Ventilation, AC and BMS integration',
      'Single accountable contractor, design to commissioning',
    ],
    services: ['plant-rooms', 'ventilation-ac', 'electrical-bms', 'design-fabrication'],
  },
};

export const serviceDetail: Record<string, ServiceDetail> = {
  'plant-rooms': {
    intro: [
      'A plant room is the heart of any commercial heating system, and we build them complete - strip-out to commissioning and set to work. Boilers, plate heat exchangers, buffer vessels, pumps, pipework and controls, designed and fabricated in-house.',
      'Our largest energy centre to date runs three 1.5MW boilers - 4.5MW of heat - feeding nine satellite plant rooms across the Aylesbury Estate, with pipework up to 24 inch.',
    ],
    points: [
      'Boilers up to 1.5MW, energy centres to 4.5MW+',
      'Plate heat exchangers, calorifiers, buffer vessels and pump sets',
      'Pipework up to 24 inch, fabricated in-house',
      'Full strip-out, installation, testing and commissioning',
      'BMS controls and condition monitoring',
    ],
  },
  'district-heating': {
    intro: [
      'District heating connects many buildings to one efficient energy centre - and the mains that link them are unforgiving work. We install pre-insulated steel distribution to Class 1 welding standards, with every weld tested and numbered.',
      'At Brimmington Estate we laid 2km of flow and return to over 1,000 properties, civils included, with road closures coordinated through Southwark Council.',
    ],
    points: [
      'Up to 2km of pre-insulated steel flow and return',
      'Class 1 welding, all welds tested and numbered',
      'Specialist Mittel jointing method',
      'Civils, excavation and reinstatement by our in-house team',
      'Traffic management and council coordination',
    ],
  },
  'heat-pumps': {
    intro: [
      'We became an MCS-accredited company because the work is changing, and councils and estates need a contractor who can deliver low-carbon heat at scale.',
      'We have completed a large Air Source Heat Pump scheme for Dartford Civic Centre, upgrading the plant room to run solely on Air Source, and regenerated the Orchard Theatres plant room to become completely gas-free. We also retrofitted ASHP to a Victorian heritage building at Seething Wells.',
    ],
    points: [
      'MCS-certified Air Source Heat Pump installation',
      'Gas-free plant room conversions for civic and cultural buildings',
      'ASHP retrofit to Victorian and heritage buildings',
      'Positioned for Heat Network Zoning and the Future Buildings Standard',
      'RECC member (00075844)',
    ],
  },
  'electrical-bms': {
    intro: [
      'Every plant room we install needs control, so we design the electrical systems and Building Management Systems in-house alongside the mechanical work.',
      'In-house electrical and BMS design means the controls match the plant exactly, with monitoring that supports planned maintenance and condition reporting from day one.',
    ],
    points: [
      'Full electrical design for plant and energy centres',
      'BMS design, installation and commissioning',
      'Integration with condition monitoring and PPM',
      'NICEIC approved electrical work',
      'Coordinated with mechanical design under one roof',
    ],
  },
  'ventilation-ac': {
    intro: [
      'Heating rarely travels alone. We install ventilation and air conditioning integrated with the heating and hot water systems we design and fabricate.',
      'From student accommodation ventilation at Kingston Hill to commercial air conditioning, we deliver air systems as part of a coordinated M&E package.',
    ],
    points: [
      'Ventilation for residential and commercial buildings',
      'Air conditioning installation and integration',
      'Coordinated with heating, hot water and BMS',
      'Designed and commissioned in-house',
    ],
  },
  'ground-works': {
    intro: [
      'External mains and district heating live underground, so we run our own ground works team - excavation, directional drilling and civils stay under our programme, not a subcontractor’s.',
      'At Kingston Hill we directional-drilled a 500m gas main at roughly 1m depth, then proved it with a foam pig and remote camera. In-house civils is why our district heating programmes hold.',
    ],
    points: [
      'In-house excavation, civils and reinstatement',
      'Directional drilling for gas and service mains',
      'Foam-pig pressure testing and camera inspection',
      'Road closures and traffic management',
      'Kept under our own programme control',
    ],
  },
  'emergency-boiler-hire': {
    intro: [
      'When plant fails, buildings cannot wait - and the hire market cannot always move fast enough. So we run our own fleet of temporary boiler plants, from 100kW to 2MW, supplied and serviced by us.',
      'Our temporary plant provides emergency heating and hot water cover for estates, healthcare and commercial buildings across London and the Home Counties. Call us directly and we will mobilise.',
    ],
    points: [
      'Own fleet, 100kW to 2MW',
      'Emergency heating and hot water cover',
      'Supplied, installed and serviced by us',
      'Across London and the Home Counties',
      'Direct line - we mobilise fast',
    ],
  },
  maintenance: {
    intro: [
      'Plant that is well maintained lasts longer and fails less. We keep installed systems compliant and running through planned preventative maintenance, condition monitoring and reporting.',
      'We can also consult on project management, design and space planning - the same in-house knowledge that builds the plant, looking after it.',
    ],
    points: [
      'Planned preventative maintenance (PPM)',
      'Condition monitoring and reporting',
      'Project management consultancy',
      'Design and space-planning consultancy',
      'Backed by our temporary boiler fleet',
    ],
  },
  'design-fabrication': {
    intro: [
      'Full in-house M&E design and our own pipe fabrication - rare in the industry, and the single biggest reason clients get delivery certainty from us.',
      'When the design office, the fabrication shop and the installation team are the same company, there is no subcontracted chain to break. What we draw is what we build and commission.',
    ],
    points: [
      'Full in-house M&E design service',
      'Our own pipe fabrication shop',
      'Concept to commissioning under one roof',
      'Electrical and BMS design integrated',
      'Delivery certainty a subcontracted chain cannot match',
    ],
  },
};
