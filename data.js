const DB = {
    branches: [
        { id: 'cse', name: 'Computer Science Engineering', code: 'CSE', desc: 'Software, Web, App Development, Cloud, and Systems.' },
        { id: 'it', name: 'Information Technology', code: 'IT', desc: 'Networking, Databases, Web Technologies.' },
        { id: 'ece', name: 'Electronics & Communication', code: 'ECE', desc: 'Embedded Systems, VLSI, Telecommunications.' },
        { id: 'eee', name: 'Electrical & Electronics', code: 'EEE', desc: 'Power Systems, Core Electronics, Control Systems.' },
        { id: 'mech', name: 'Mechanical Engineering', code: 'MECH', desc: 'Automotive, Manufacturing, Thermal Engineering.' },
        { id: 'civil', name: 'Civil Engineering', code: 'CIVIL', desc: 'Construction, Structural, and Urban Planning.' },
        { id: 'aids', name: 'Artificial Intelligence & Data Science', code: 'AI & DS', desc: 'Machine Learning, Data Mining, Analytics.' },
        { id: 'aiml', name: 'Artificial Intelligence & Machine Learning', code: 'AI & ML', desc: 'Deep Learning, NLP, Computer Vision.' }
    ],
    companies: []
};

const cse_it = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Oracle", "Salesforce", "Adobe", "NVIDIA", "Intel",
    "IBM", "Accenture", "Infosys", "TCS", "Wipro", "HCLTech", "Zoho", "Flipkart", "Paytm", "Atlassian",
    "Cisco", "Juniper Networks", "VMware", "ServiceNow", "SAP", "Red Hat", "Palantir", "Twitter", "Uber",
    "Airbnb", "Stripe", "Square", "Dropbox", "Slack", "GitHub", "LinkedIn", "Intuit", "AMD", "Qualcomm",
    "Broadcom", "MediaTek", "Splunk", "Nutanix",
    "Zoom", "ByteDance", "Tencent", "Alibaba", "Baidu", "Snowflake", "Databricks", "Zendesk", "Shopify",
    "Spotify", "Netflix", "Electronic Arts", "Epic Games", "Unity", "Workday", "Okta", "CrowdStrike",
    "Palo Alto Networks", "Fortinet", "Cvent",
    // Added Missing Companies
    "Tech Mahindra", "Cognizant", "Capgemini", "Deloitte", "EY", "KPMG", "PwC", "JP Morgan", "Goldman Sachs", "Reliance Jio", "Airtel"
];

const ece = [
    "Qualcomm", "Intel", "Texas Instruments", "NVIDIA", "AMD", "Samsung Electronics", "Broadcom", "MediaTek",
    "Micron Technology", "Cisco", "Juniper Networks", "DRDO", "ISRO", "BEL", "Honeywell", "Bosch",
    "Analog Devices", "STMicroelectronics", "Infineon Technologies", "Cadence Design Systems",
    "Synopsys", "Mentor Graphics", "ARM", "NXP Semiconductors", "Marvell", "Sony", "LG Electronics",
    "Panasonic", "Ericsson", "Nokia", "Motorola Solutions", "Huawei", "ZTE", "Apple (Hardware)",
    "Google (Hardware)", "Dell", "HP", "Lenovo", "Western Digital", "Seagate", "Skyworks Solutions", "Qorvo",
    "Renesas Electronics", "Microchip Technology", "Onsemi", "Silicon Labs", "Lattice Semiconductor",
    "Xilinx", "Mellanox", "Cypress Semiconductor", "Maxim Integrated", "Rohde & Schwarz", "Keysight Technologies",
    "Tektronix", "National Instruments", "Garmin", "Fitbit", "Foxconn", "Pegatron", "Wistron", "Flex", "Jabil",
    // Added Missing Companies
    "Reliance Jio", "Airtel", "Siemens", "Schneider Electric", "ABB"
];

const eee = [
    "Siemens", "ABB", "Schneider Electric", "GE", "Hitachi Energy", "NTPC", "Power Grid", "BHEL", "Tata Power",
    "Adani Power", "L&T", "Bosch", "Honeywell", "Eaton", "Crompton Greaves", "Havells", "Vedanta", "JSW Energy",
    "Torrent Power", "Suzlon Energy",
    "Alstom", "Emerson", "Rockwell Automation", "Delta Electronics", "Panasonic Energy", "Reliance Power",
    "NHPC", "SJVN", "CESC", "Enphase Energy", "First Solar", "Vestas", "Gamesa", "Renew Power", "Greenko",
    "Tata Projects", "KEC International", "Kalpataru Power", "Blue Star", "Voltas", "Mitsubishi Electric",
    "Oppo", "Vivo", "Xiaomi", "OnePlus", "Realme", "V-Guard", "Orient Electric", "Usha", "Bajaj Electricals",
    "Philips", "Osram", "Legrand", "Wipro Lighting", "Finolex Cables", "Polycab", "KEI Industries",
    "Exide Industries", "Amara Raja", "Luminous"
];

const mech = [
    "Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Ashok Leyland", "Bajaj Auto", "Hero MotoCorp",
    "TVS Motor", "L&T", "Bosch", "Caterpillar", "John Deere", "JCB", "BHEL", "DRDO", "ISRO", "HAL",
    "Thermax", "Cummins India", "SKF India", "Siemens",
    "Boeing", "Airbus", "Ford", "General Motors", "Toyota", "Honda", "Hyundai", "Renault", "Nissan",
    "Royal Enfield", "Volvo", "Daimler", "Alstom", "GE Aviation", "Rolls-Royce", "Pratt & Whitney",
    "Godrej & Boyce", "Blue Star", "Voltas", "Daikin", "Carrier", "Hyundai Construction",
    "Kia Motors", "MG Motor", "Skoda", "Volkswagen", "Fiat", "Jeep", "Jaguar Land Rover", "Volvo Eicher",
    "Sonalika Tractors", "Escorts", "Bharat Forge", "Jindal Steel", "Tata Steel", "JSW Steel", "Hindalco",
    "Reliance Industries", "Essar", "Aditya Birla Group", "LafargeHolcim"
];

const civil = [
    "L&T", "Shapoorji Pallonji", "Tata Projects", "NCC Limited", "Afcons Infrastructure", "GMR Group",
    "Adani Group", "DLF", "Sobha Limited", "Godrej Properties", "IRCON", "NBCC", "Gammon India", "Punj Lloyd",
    "Reliance Infrastructure", "Simplex Infrastructures", "Ashoka Buildcon", "JMC Projects", "HCC", "Lanco Infratech",
    "KEC International", "Kalpataru Power", "Dilip Buildcon", "PNC Infratech", "KNR Constructions",
    "GR Infraprojects", "HG Infra", "Gayatri Projects", "ITD Cementation", "J Kumar Infraprojects",
    "Patel Engineering", "Navayuga Engineering", "Megha Engineering", "Hindustan Construction Company",
    "Bechtel", "Fluor", "AECOM", "Jacobs", "Turner Construction", "Skanska", "Strabag",
    "L&T Construction", "Shapoorji Pallonji EPC", "Pioneer Urban", "Omaxe", "Parsvnath Developers",
    "Unitech", "Jaypee Group", "GVK", "GMR Infrastructure", "Essel Infraprojects", "IL&FS", "IRB Infrastructure",
    "Sadbhav Engineering", "Navayuga", "ITD", "Ahluwalia Contracts", "Capacite Infraprojects", "Kridhan Infra",
    "Bridges & Roof", "RITES"
];

const branchMap = {
    'cse': cse_it,
    'it': cse_it,
    'ece': ece,
    'eee': eee,
    'mech': mech,
    'civil': civil,
    'aids': cse_it, 
    'aiml': cse_it 
};

const companyDict = {};

// Helper to determine industry based on name or branch
function getIndustry(name, branches) {
    if (["Google", "Microsoft", "Amazon", "Meta", "Apple", "Oracle", "Salesforce", "Adobe", "VMware", "ServiceNow", "SAP", "Palantir", "Twitter", "Uber", "Airbnb", "Stripe", "Square", "Dropbox", "Slack", "GitHub", "LinkedIn", "Intuit", "Splunk", "Netflix", "Spotify", "Snowflake", "Databricks"].includes(name)) return "Tech / Software";
    if (["NVIDIA", "Intel", "AMD", "Qualcomm", "Broadcom", "MediaTek", "Texas Instruments", "Synopsys", "ARM", "NXP Semiconductors", "Marvell", "Skyworks Solutions", "Xilinx", "Microchip Technology", "Onsemi"].includes(name)) return "Semiconductors";
    if (["TCS", "Infosys", "Wipro", "Accenture", "HCLTech", "IBM", "Cognizant", "Capgemini", "Tech Mahindra"].includes(name)) return "IT Services";
    if (["Deloitte", "EY", "KPMG", "PwC"].includes(name)) return "Consulting / Big 4";
    if (["JP Morgan", "Goldman Sachs"].includes(name)) return "FinTech / Banking";
    if (["Reliance Jio", "Airtel", "Cisco", "Juniper Networks"].includes(name)) return "Telecommunications";
    if (["Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Bajaj Auto", "Ashok Leyland", "Ford", "General Motors", "Toyota", "Honda", "Hyundai", "Renault", "Nissan", "Volkswagen", "BMW", "Mercedes-Benz"].includes(name)) return "Automotive";
    if (["L&T", "Shapoorji Pallonji", "Tata Projects", "DLF", "Adani Group", "GMR Group", "Bechtel", "AECOM", "Omaxe", "Jaypee Group"].includes(name)) return "Infrastructure & Construction";
    if (["Siemens", "ABB", "Schneider Electric", "GE", "Hitachi Energy", "Emerson", "Rockwell Automation"].includes(name)) return "Industrial & Energy";
    if (["Flipkart", "Paytm", "Zoho", "Atlassian", "Zoom", "Shopify", "Zendesk"].includes(name)) return "Internet / SaaS";
    if (["DRDO", "ISRO", "BEL", "HAL", "Boeing", "Airbus"].includes(name)) return "Aerospace & Defense";

    if (branches.includes('ece')) return "Electronics & Communication";
    if (branches.includes('eee')) return "Electrical & Energy";
    if (branches.includes('mech')) return "Mechanical & Manufacturing";
    if (branches.includes('civil')) return "Civil & Construction";
    return "Technology";
}

for (const [branchId, compList] of Object.entries(branchMap)) {
    compList.forEach(compName => {
        if (!companyDict[compName]) {
            companyDict[compName] = {
                id: compName.toLowerCase().replace(/[\s&()]+/g, '-').replace(/-$/, ''),
                name: compName,
                branches: [],
                criteria: { cgpa: '7.0+', backlogs: '0', graduation: 'Current Year' },
                process: ['Online Assessment', 'Technical Interview', 'HR Interview', 'Offer'],
                experiences: [{ role: 'Graduate Engineer', difficulty: 'diff-medium', diffLabel: 'Medium', tech: 'Core domain questions based on resume and technical subjects.', hr: 'Tell me about yourself. Why do you want to join us?', tips: 'Focus on fundamentals and be confident.' }],
                desc: `${compName} is a leading organization actively recruiting engineering graduates. They look for strong analytical skills, domain knowledge, and problem-solving abilities.`,
                internship: 'Summer Internships available for Pre-Final Year students',
                careerPath: 'Engineer Trainee → Project Engineer → Technical Lead'
            };
        }
        if (!companyDict[compName].branches.includes(branchId)) {
            companyDict[compName].branches.push(branchId);
        }
    });
}

// Custom descriptions for a few known companies
if (companyDict['Google']) {
    companyDict['Google'].criteria.cgpa = '8.0+';
    companyDict['Google'].process = ['Resume Shortlisting', 'Online Coding Assessment (OA)', 'Technical Interviews (2-3 rounds)', 'Googliness / HR Round'];
    companyDict['Google'].experiences = [{ role: 'SWE', difficulty: 'diff-hard', diffLabel: 'Hard', tech: 'Graphs, Dynamic Programming, System Design basics.', hr: 'Tell me about a time you resolved a conflict.', tips: 'Master LeetCode Medium/Hard. Focus on code quality.' }];
    companyDict['Google'].careerPath = 'L3 (SWE II) → L4 (SWE III) → L5 (Senior SWE) → L6 (Staff SWE)';
}
if (companyDict['Microsoft']) {
    companyDict['Microsoft'].criteria.cgpa = '7.5+';
    companyDict['Microsoft'].process = ['Online Test', 'Technical Round 1', 'Technical Round 2 (System Design)', 'AA Round (As-Appropriate/HR)', 'Offer'];
    companyDict['Microsoft'].experiences = [{ role: 'SDE', difficulty: 'diff-medium', diffLabel: 'Medium', tech: 'Trees, LinkedLists, OOPs concepts.', hr: 'Why Microsoft? What are your future goals?', tips: 'Be clear with data structures and core CS subjects.' }];
    companyDict['Microsoft'].careerPath = 'SDE I → SDE II → Senior SDE → Principal SDE';
}
if (companyDict['L&T']) {
    companyDict['L&T'].criteria.cgpa = '6.5+';
    companyDict['L&T'].experiences = [{ role: 'Graduate Engineer Trainee', difficulty: 'diff-medium', diffLabel: 'Medium', tech: 'Fluid Mechanics, Strength of Materials, Final Year Project details.', hr: 'Are you willing to relocate to project sites?', tips: 'Know your final year project inside out.' }];
    companyDict['L&T'].careerPath = 'Graduate Engineer Trainee → Senior Engineer → Project Manager';
}

function getCompanyRank(name) {
    // Tier 1 - Top Tech, FAANG, Core Industry Giants, Space/Defense, Top Finance
    const tier1 = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "NVIDIA", "Intel", "Qualcomm", "Texas Instruments", "Netflix", "L&T", "Siemens", "Tata Motors", "Bosch", "Boeing", "Airbus", "ISRO", "DRDO", "JP Morgan", "Goldman Sachs"];
    if (tier1.includes(name)) return 1;

    // Tier 2 - Large Multinationals, Major SaaS, Top Automotive, Tier-1 Infra/Energy, Big 4
    const tier2 = ["Oracle", "Salesforce", "Adobe", "AMD", "Samsung Electronics", "Broadcom", "MediaTek", "Cisco", "IBM", "TCS", "Infosys", "Wipro", "Tech Mahindra", "Cognizant", "Capgemini", "Deloitte", "EY", "KPMG", "PwC", "Mahindra & Mahindra", "Maruti Suzuki", "ABB", "GE", "Honeywell", "Flipkart", "Atlassian", "Reliance Jio", "Airtel"];
    if (tier2.includes(name)) return 2;

    // Tier 3 - Everyone Else (Fallback)
    return 3;
}

// Assign industries, ranks, and career paths based on industry if not specifically set
for (const key in companyDict) {
    companyDict[key].industry = getIndustry(companyDict[key].name, companyDict[key].branches);
    companyDict[key].rank = getCompanyRank(companyDict[key].name);
    
    if(companyDict[key].careerPath === 'Engineer Trainee → Project Engineer → Technical Lead') {
        if(companyDict[key].industry === 'IT Services') companyDict[key].careerPath = 'Systems Engineer → Technology Analyst → Project Manager';
        if(companyDict[key].industry === 'Consulting / Big 4') companyDict[key].careerPath = 'Analyst → Consultant → Senior Consultant → Manager';
        if(companyDict[key].industry === 'Tech / Software') companyDict[key].careerPath = 'Software Engineer → Senior SWE → Staff SWE → Architect';
    }
    
    DB.companies.push(companyDict[key]);
}

// Sort by rank (top wise) first, then alphabetically
DB.companies.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return a.name.localeCompare(b.name);
});
