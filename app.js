// App State
let currentRoute = '#home';

// DOM Elements
const appRoot = document.getElementById('app-root');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Helper for generating clearbit logos with smart fallback
function getCompanyLogoHTML(companyName) {
    const domainMap = {
        'Google': 'google.com', 'Microsoft': 'microsoft.com', 'Amazon': 'amazon.com',
        'Apple': 'apple.com', 'Meta': 'meta.com', 'Netflix': 'netflix.com',
        'IBM': 'ibm.com', 'Intel': 'intel.com', 'NVIDIA': 'nvidia.com',
        'Cisco': 'cisco.com', 'Oracle': 'oracle.com', 'Adobe': 'adobe.com',
        'Salesforce': 'salesforce.com', 'Qualcomm': 'qualcomm.com', 'Samsung': 'samsung.com',
        'TCS': 'tcs.com', 'Infosys': 'infosys.com', 'Wipro': 'wipro.com',
        'HCLTech': 'hcltech.com', 'Tech Mahindra': 'techmahindra.com', 'Accenture': 'accenture.com',
        'Cognizant': 'cognizant.com', 'Capgemini': 'capgemini.com', 'Deloitte': 'deloitte.com',
        'EY': 'ey.com', 'KPMG': 'kpmg.com', 'PwC': 'pwc.com',
        'JP Morgan': 'jpmorgan.com', 'Goldman Sachs': 'goldmansachs.com',
        'Siemens': 'siemens.com', 'Bosch': 'bosch.com', 'Honeywell': 'honeywell.com',
        'Schneider Electric': 'se.com', 'ABB': 'abb.com', 'L&T': 'larsentoubro.com',
        'Reliance Jio': 'jio.com', 'Airtel': 'airtel.in', 'DRDO': 'drdo.gov.in',
        'ISRO': 'isro.gov.in', 'BHEL': 'bhel.com', 'BEL': 'bel-india.in',
        'NTPC': 'ntpc.co.in', 'Tata Motors': 'tatamotors.com', 'Mahindra & Mahindra': 'mahindra.com',
        'Hyundai': 'hyundai.com', 'Maruti Suzuki': 'marutisuzuki.com', 'Ashok Leyland': 'ashokleyland.com',
        'Zoho': 'zoho.com', 'Flipkart': 'flipkart.com', 'Paytm': 'paytm.com', 'Atlassian': 'atlassian.com',
        'Juniper Networks': 'juniper.net', 'VMware': 'vmware.com', 'ServiceNow': 'servicenow.com',
        'SAP': 'sap.com', 'Red Hat': 'redhat.com', 'Palantir': 'palantir.com', 'Twitter': 'twitter.com',
        'Uber': 'uber.com', 'Airbnb': 'airbnb.com', 'Stripe': 'stripe.com', 'Square': 'squareup.com',
        'Dropbox': 'dropbox.com', 'Slack': 'slack.com', 'GitHub': 'github.com', 'LinkedIn': 'linkedin.com',
        'Intuit': 'intuit.com', 'AMD': 'amd.com', 'Broadcom': 'broadcom.com', 'MediaTek': 'mediatek.com',
        'Splunk': 'splunk.com', 'Nutanix': 'nutanix.com', 'Zoom': 'zoom.us', 'ByteDance': 'bytedance.com',
        'Tencent': 'tencent.com', 'Alibaba': 'alibabagroup.com', 'Baidu': 'baidu.com',
        'Snowflake': 'snowflake.com', 'Databricks': 'databricks.com', 'Zendesk': 'zendesk.com',
        'Shopify': 'shopify.com', 'Spotify': 'spotify.com', 'Electronic Arts': 'ea.com',
        'Epic Games': 'epicgames.com', 'Unity': 'unity.com', 'Workday': 'workday.com',
        'Okta': 'okta.com', 'CrowdStrike': 'crowdstrike.com', 'Palo Alto Networks': 'paloaltonetworks.com',
        'Fortinet': 'fortinet.com', 'Cvent': 'cvent.com', 'Texas Instruments': 'ti.com',
        'Micron Technology': 'micron.com', 'Analog Devices': 'analog.com', 'STMicroelectronics': 'st.com',
        'Infineon Technologies': 'infineon.com', 'Cadence Design Systems': 'cadence.com',
        'Synopsys': 'synopsys.com', 'Mentor Graphics': 'mentor.com', 'ARM': 'arm.com',
        'NXP Semiconductors': 'nxp.com', 'Marvell': 'marvell.com', 'Sony': 'sony.com',
        'LG Electronics': 'lg.com', 'Panasonic': 'panasonic.com', 'Ericsson': 'ericsson.com',
        'Nokia': 'nokia.com', 'Motorola Solutions': 'motorolasolutions.com', 'Huawei': 'huawei.com',
        'ZTE': 'zte.com.cn', 'Apple (Hardware)': 'apple.com', 'Google (Hardware)': 'google.com',
        'Dell': 'dell.com', 'HP': 'hp.com', 'Lenovo': 'lenovo.com', 'Western Digital': 'westerndigital.com',
        'Seagate': 'seagate.com', 'Skyworks Solutions': 'skyworksinc.com', 'Qorvo': 'qorvo.com',
        'Renesas Electronics': 'renesas.com', 'Microchip Technology': 'microchip.com', 'Onsemi': 'onsemi.com',
        'Silicon Labs': 'silabs.com', 'Lattice Semiconductor': 'latticesemi.com', 'Xilinx': 'xilinx.com',
        'Mellanox': 'mellanox.com', 'Cypress Semiconductor': 'cypress.com', 'Maxim Integrated': 'maximintegrated.com',
        'Rohde & Schwarz': 'rohde-schwarz.com', 'Keysight Technologies': 'keysight.com', 'Tektronix': 'tek.com',
        'National Instruments': 'ni.com', 'Garmin': 'garmin.com', 'Fitbit': 'fitbit.com', 'Foxconn': 'foxconn.com',
        'Pegatron': 'pegatroncorp.com', 'Wistron': 'wistron.com', 'Flex': 'flex.com', 'Jabil': 'jabil.com',
        'GE': 'ge.com', 'Hitachi Energy': 'hitachienergy.com', 'Power Grid': 'powergrid.in', 'Tata Power': 'tatapower.com',
        'Adani Power': 'adanipower.com', 'Eaton': 'eaton.com', 'Crompton Greaves': 'crompton.co.in',
        'Havells': 'havells.com', 'Vedanta': 'vedantalimited.com', 'JSW Energy': 'jsw.in',
        'Torrent Power': 'torrentpower.com', 'Suzlon Energy': 'suzlon.com', 'Alstom': 'alstom.com',
        'Emerson': 'emerson.com', 'Rockwell Automation': 'rockwellautomation.com', 'Delta Electronics': 'deltaww.com',
        'Panasonic Energy': 'panasonic.com', 'Reliance Power': 'reliancepower.co.in', 'NHPC': 'nhpcindia.com',
        'SJVN': 'sjvn.nic.in', 'CESC': 'cesc.co.in', 'Enphase Energy': 'enphase.com', 'First Solar': 'firstsolar.com',
        'Vestas': 'vestas.com', 'Gamesa': 'siemensgamesa.com', 'Renew Power': 'renewpower.in', 'Greenko': 'greenkogroup.com',
        'Tata Projects': 'tataprojects.com', 'KEC International': 'kecrpg.com', 'Kalpataru Power': 'kalpatarupower.com',
        'Blue Star': 'bluestarindia.com', 'Voltas': 'voltas.com', 'Mitsubishi Electric': 'mitsubishielectric.com',
        'Oppo': 'oppo.com', 'Vivo': 'vivo.com', 'Xiaomi': 'mi.com', 'OnePlus': 'oneplus.com', 'Realme': 'realme.com',
        'V-Guard': 'vguard.in', 'Orient Electric': 'orientelectric.com', 'Usha': 'usha.com', 'Bajaj Electricals': 'bajajelectricals.com',
        'Philips': 'philips.com', 'Osram': 'osram.com', 'Legrand': 'legrand.com', 'Wipro Lighting': 'wiprolighting.com',
        'Finolex Cables': 'finolex.com', 'Polycab': 'polycab.com', 'KEI Industries': 'kei-ind.com',
        'Exide Industries': 'exideindustries.com', 'Amara Raja': 'amararajabatteries.com', 'Luminous': 'luminousindia.com',
        'Bajaj Auto': 'bajajauto.com', 'Hero MotoCorp': 'heromotocorp.com', 'TVS Motor': 'tvsmotor.com',
        'Caterpillar': 'caterpillar.com', 'John Deere': 'deere.com', 'JCB': 'jcb.com', 'HAL': 'hal-india.co.in',
        'Thermax': 'thermaxglobal.com', 'Cummins India': 'cummins.com', 'SKF India': 'skf.com',
        'Ford': 'ford.com', 'General Motors': 'gm.com', 'Toyota': 'toyota.com', 'Honda': 'honda.com',
        'Renault': 'renault.com', 'Nissan': 'nissan-global.com', 'Royal Enfield': 'royalenfield.com',
        'Volvo': 'volvocars.com', 'Daimler': 'daimler.com', 'GE Aviation': 'geaviation.com', 'Rolls-Royce': 'rolls-royce.com',
        'Pratt & Whitney': 'prattwhitney.com', 'Godrej & Boyce': 'godrej.com', 'Daikin': 'daikin.com',
        'Carrier': 'carrier.com', 'Hyundai Construction': 'hyundai-ce.com', 'Kia Motors': 'kia.com',
        'MG Motor': 'mgmotor.co.in', 'Skoda': 'skoda-auto.com', 'Volkswagen': 'volkswagen.com', 'Fiat': 'fiat.com',
        'Jeep': 'jeep.com', 'Jaguar Land Rover': 'jaguarlandrover.com', 'Volvo Eicher': 'vecv.in',
        'Sonalika Tractors': 'sonalika.com', 'Escorts': 'escortsgroup.com', 'Bharat Forge': 'bharatforge.com',
        'Jindal Steel': 'jindalsteelpower.com', 'Tata Steel': 'tatasteel.com', 'JSW Steel': 'jsw.in',
        'Hindalco': 'hindalco.com', 'Reliance Industries': 'ril.com', 'Essar': 'essar.com',
        'Aditya Birla Group': 'adityabirla.com', 'LafargeHolcim': 'holcim.com', 'Shapoorji Pallonji': 'shapoorjipallonji.com',
        'NCC Limited': 'ncclimited.com', 'Afcons Infrastructure': 'afcons.com', 'GMR Group': 'gmrgroup.in',
        'Adani Group': 'adani.com', 'DLF': 'dlf.in', 'Sobha Limited': 'sobha.com', 'Godrej Properties': 'godrejproperties.com',
        'IRCON': 'ircon.org', 'NBCC': 'nbccindia.in', 'Gammon India': 'gammonindia.com', 'Punj Lloyd': 'punjlloyd.com',
        'Reliance Infrastructure': 'rinfra.com', 'Simplex Infrastructures': 'simplexinfra.com', 'Ashoka Buildcon': 'ashokabuildcon.com',
        'JMC Projects': 'jmcprojects.com', 'HCC': 'hccindia.com', 'Lanco Infratech': 'lancogroup.com',
        'Dilip Buildcon': 'dilipbuildcon.com', 'PNC Infratech': 'pncinfratech.com', 'KNR Constructions': 'knrcl.com',
        'GR Infraprojects': 'grinfra.com', 'HG Infra': 'hginfra.com', 'Gayatri Projects': 'gayatri.co.in',
        'ITD Cementation': 'itdcem.co.in', 'J Kumar Infraprojects': 'jkumar.com', 'Patel Engineering': 'pateleng.com',
        'Navayuga Engineering': 'navayuga.com', 'Megha Engineering': 'meil.in', 'Hindustan Construction Company': 'hccindia.com',
        'Bechtel': 'bechtel.com', 'Fluor': 'fluor.com', 'AECOM': 'aecom.com', 'Jacobs': 'jacobs.com',
        'Turner Construction': 'turnerconstruction.com', 'Skanska': 'skanska.com', 'Strabag': 'strabag.com',
        'L&T Construction': 'lntecc.com', 'Shapoorji Pallonji EPC': 'shapoorjipallonji.com', 'Pioneer Urban': 'pioneerurban.in',
        'Omaxe': 'omaxe.com', 'Parsvnath Developers': 'parsvnath.com', 'Unitech': 'unitechgroup.com',
        'Jaypee Group': 'jalindia.com', 'GVK': 'gvk.com', 'GMR Infrastructure': 'gmrgroup.in', 'Essel Infraprojects': 'esselinfraprojects.com',
        'IL&FS': 'ilfsindia.com', 'IRB Infrastructure': 'irb.co.in', 'Sadbhav Engineering': 'sadbhaveng.com',
        'Navayuga': 'navayuga.com', 'ITD': 'itdcem.co.in', 'Ahluwalia Contracts': 'acilnet.com',
        'Capacite Infraprojects': 'capacite.in', 'Kridhan Infra': 'kridhan.com', 'Bridges & Roof': 'bridgeandroof.co.in',
        'RITES': 'rites.com'
    };

    let domain = domainMap[companyName];
    if (!domain) {
        domain = companyName.toLowerCase().replace(/[\s&()]+/g, '') + '.com';
    }

    // Completely removed generic briefcase icons. If Clearbit fails, smart fallback to Google Favicon API.
    return `<img src="https://logo.clearbit.com/${domain}?size=128" onerror="this.onerror=null; this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128';" alt="${companyName} Logo">`;
}

// Helper to render an enhanced company card
function renderCompanyCard(c) {
    return `
        <div class="company-card" data-name="${c.name}" data-industry="${c.industry}" onclick="window.location.hash='#company/${c.id}'">
            <div class="company-header">
                <div class="company-logo" style="background: transparent;">${getCompanyLogoHTML(c.name)}</div>
                <div class="company-info">
                    <h3>${c.name}</h3>
                    <p>${c.industry}</p>
                </div>
            </div>
            <div class="company-badges">
                ${c.internship ? `<span class="badge-intern"><i data-feather="star" style="width:10px;height:10px;margin-right:2px;"></i> Internship</span>` : ''}
                ${c.careerPath ? `<span class="badge-path"><i data-feather="trending-up" style="width:10px;height:10px;margin-right:2px;"></i> Career Path</span>` : ''}
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">${c.desc.substring(0, 80)}...</p>
            <div class="company-meta">
                <i data-feather="user"></i>
                <span>${c.criteria ? 'B.E/B.Tech - ' + (c.branches.length > 2 ? 'All Branches' : c.branches[0].toUpperCase()) : 'B.E/B.Tech'}</span>
            </div>
        </div>
    `;
}

// Routing
function handleRouting() {
    const hash = window.location.hash || '#home';
    currentRoute = hash;

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash.split('?')[0].split('/')[0]) {
            link.classList.add('active');
        }
    });

    navMenu.classList.remove('active');

    // Parse route
    if (hash === '#home') renderHome();
    else if (hash === '#branches') renderBranches();
    else if (hash.startsWith('#branch/')) renderBranchDetails(hash.split('/')[1]);
    else if (hash.startsWith('#companies')) renderCompanies();
    else if (hash.startsWith('#company/')) renderCompanyDetails(hash.split('/')[1]);
    else if (hash === '#experiences') renderExperiences();
    else if (hash === '#about') renderAbout();
    else if (hash === '#contact') renderContact();
    else renderHome();

    window.scrollTo(0, 0);

    // Re-render feather icons for newly added HTML
    if (window.feather) {
        feather.replace();
    }
}

window.addEventListener('hashchange', handleRouting);

// Templates & Render Functions
function renderHome() {
    // Generate Branches Grid
    const branchCards = DB.branches.map(b => {
        let icon = 'monitor';
        let color = '#3b82f6';
        if (b.code === 'IT') { icon = 'globe'; color = '#10b981'; }
        else if (b.code === 'ECE') { icon = 'cpu'; color = '#f59e0b'; }
        else if (b.code === 'EEE') { icon = 'zap'; color = '#eab308'; }
        else if (b.code === 'MECH') { icon = 'settings'; color = '#64748b'; }
        else if (b.code === 'CIVIL') { icon = 'map'; color = '#8b5cf6'; }
        else if (b.code.includes('AI')) { icon = 'cpu'; color = '#ec4899'; }

        return `
        <div class="branch-card" onclick="window.location.hash='#branch/${b.id}'">
            <div class="branch-icon" style="color: ${color}; background: ${color}15;"><i data-feather="${icon}"></i></div>
            <h3>${b.name}</h3>
            <p>${b.code}</p>
        </div>
    `}).join('');

    appRoot.innerHTML = `
        <section class="container hero" style="position: relative; padding-bottom: 6rem; padding-top: 4rem;">
            <!-- Subtle background glows -->
            <div style="position: absolute; top: -50px; left: -100px; width: 300px; height: 300px; background: rgba(37, 99, 235, 0.12); filter: blur(80px); border-radius: 50%; z-index: -1;"></div>
            <div style="position: absolute; bottom: 0; right: -50px; width: 400px; height: 400px; background: rgba(59, 130, 246, 0.08); filter: blur(100px); border-radius: 50%; z-index: -1;"></div>
            
            <div class="hero-content" style="z-index: 1;">
                <div class="hero-badge" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(37, 99, 235, 0.1); color: var(--primary-blue); padding: 8px 16px; border-radius: 50px; font-weight: 700; font-size: 0.8rem; margin-bottom: 1.5rem; border: 1px solid rgba(37, 99, 235, 0.2); letter-spacing: 0.5px;">
                    <i data-feather="briefcase" style="width: 14px;"></i> THE ULTIMATE PLACEMENT PLATFORM
                </div>
                <h1 style="font-size: 3.5rem; line-height: 1.15; font-weight: 800; margin-bottom: 1.5rem; color: var(--dark-navy);">
                    Launch Your <br>
                    <span style="color: transparent; background: linear-gradient(135deg, var(--primary-blue), #60a5fa); -webkit-background-clip: text;">Engineering Career</span>
                </h1>
                <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2.5rem; max-width: 500px; line-height: 1.7;">
                    Explore top-tier companies, detailed eligibility criteria, step-by-step selection processes, and real interview experiences for every branch.
                </p>
                
                <div class="hero-search" style="box-shadow: 0 20px 40px rgba(0,0,0,0.08); border: 1px solid var(--border-color); display: flex; align-items: center; background: white; padding: 8px; border-radius: 12px; gap: 8px; max-width: 500px;">
                    <i data-feather="search" style="color: var(--text-muted); margin-left: 12px; width: 20px;"></i>
                    <input type="text" id="search-input" placeholder="Search companies (e.g. Google, Microsoft...)" style="flex: 1; border: none; outline: none; font-size: 1rem; padding: 8px;">
                    <button id="search-btn" class="btn-primary" style="padding: 12px 24px; border-radius: 8px;">Explore</button>
                </div>
                
                <div style="margin-top: 2rem; display: flex; align-items: center; gap: 1rem;">
                    <div style="display: flex; align-items: center;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: #3b82f6; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.7rem; z-index: 3;">JS</div>
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: #10b981; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.7rem; margin-left: -10px; z-index: 2;">AK</div>
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: #f59e0b; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.7rem; margin-left: -10px; z-index: 1;">MP</div>
                    </div>
                    <span style="font-size: 0.95rem; color: var(--text-secondary); font-weight: 500;">Trusted by <span style="color: var(--dark-navy); font-weight: 700;">10,000+</span> Students</span>
                </div>
            </div>
            
            <div class="hero-image" style="position: relative; z-index: 1;">
                <!-- Decorative element behind image -->
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%); z-index: -1;"></div>
                
                <img src="file:///C:/Users/ADMIN/.gemini/antigravity-ide/brain/1f27d966-ba50-4ab0-8f25-e10ca6908ea5/hero_team_illustration_1780571770469.png" alt="Engineering Team Collaboration" style="width: 100%; max-width: 550px; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2); border: 4px solid white; display: block; margin: 0 auto;">
                
                <!-- Floating Glassmorphism Cards -->
                <div class="glass-card floating-1" style="position: absolute; top: 10%; right: -5%; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); padding: 12px 20px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid rgba(255,255,255,1); display: flex; align-items: center; gap: 12px;">
                    <div style="background: #e0e7ff; color: #4f46e5; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i data-feather="trending-up"></i></div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Highest Package</div>
                        <div style="font-size: 1.1rem; color: var(--dark-navy); font-weight: 800;">50+ LPA</div>
                    </div>
                </div>
                
                <div class="glass-card floating-2" style="position: absolute; bottom: 15%; left: -5%; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); padding: 12px 20px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid rgba(255,255,255,1); display: flex; align-items: center; gap: 12px;">
                    <div style="background: #dcfce7; color: #16a34a; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i data-feather="check-circle"></i></div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Top Recruiters</div>
                        <div style="font-size: 1.1rem; color: var(--dark-navy); font-weight: 800;">Google, MS</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="background-color: #fff;">
            <div class="container">
                <h2 class="section-title">Explore by Branch</h2>
                <div class="branch-grid">
                    ${branchCards}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-header" style="flex-direction: row; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 2rem;">
                    <h2 class="section-title" style="margin-bottom: 0;">Featured Companies</h2>
                    <button class="btn-outline" onclick="window.location.hash='#companies'">View All</button>
                </div>
                
                <div class="filter-tabs" id="featured-tabs">
                    <button class="filter-btn active" data-branch="all">Top Companies</button>
                    <button class="filter-btn" data-branch="cse">CSE & IT</button>
                    <button class="filter-btn" data-branch="ece">Electronics (ECE)</button>
                    <button class="filter-btn" data-branch="eee">Electrical (EEE)</button>
                    <button class="filter-btn" data-branch="mech">Mechanical</button>
                    <button class="filter-btn" data-branch="civil">Civil</button>
                </div>
                
                <div class="company-grid" id="featured-grid">
                    <!-- Dynamic rendering via JS -->
                </div>
            </div>
        </section>

        <section class="section" style="background-color: #fff;">
            <div class="container">
                <h2 class="section-title">Why Use EngiExplorer?</h2>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon"><i data-feather="layout"></i></div>
                        <div class="feature-info">
                            <h3>Top Companies</h3>
                            <p>Explore top tech companies and their hiring insights.</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i data-feather="file-text"></i></div>
                        <div class="feature-info">
                            <h3>Detailed Information</h3>
                            <p>Eligibility, selection process, and interview experiences.</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i data-feather="users"></i></div>
                        <div class="feature-info">
                            <h3>Branch-wise Guidance</h3>
                            <p>Find relevant opportunities tailored to your branch.</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i data-feather="bell"></i></div>
                        <div class="feature-info">
                            <h3>Regular Updates</h3>
                            <p>Stay updated with the latest hiring trends and drives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Dynamic Featured Companies Rendering
    const renderFeatured = (branchId) => {
        let companies = DB.companies;
        if (branchId !== 'all') {
            companies = companies.filter(c => c.branches.includes(branchId));
        }

        // Take top 12 for the featured grid
        const topCompanies = companies.slice(0, 12);

        document.getElementById('featured-grid').innerHTML = topCompanies.map(c => renderCompanyCard(c)).join('');
        if (window.feather) feather.replace();
    };

    // Initialize with all
    renderFeatured('all');

    // Add tab click listeners
    const tabs = document.querySelectorAll('#featured-tabs .filter-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            renderFeatured(e.target.getAttribute('data-branch'));
        });
    });

    const triggerSearch = () => {
        const query = document.getElementById('search-input').value.trim();
        window.location.hash = query ? `#companies?q=${encodeURIComponent(query)}` : '#companies';
    };

    document.getElementById('search-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') triggerSearch();
    });
    document.getElementById('search-btn')?.addEventListener('click', triggerSearch);
}

function renderBranches() {
    renderHome();
}

function renderBranchDetails(branchId) {
    const branch = DB.branches.find(b => b.id === branchId);
    if (!branch) return renderHome();

    const branchCompanies = DB.companies.filter(c => c.branches.includes(branchId));

    let companiesHtml = branchCompanies.length > 0 ? branchCompanies.map(c => renderCompanyCard(c)).join('') : `<div class="empty-state">No companies found for this branch yet.</div>`;

    appRoot.innerHTML = `
        <div class="container section">
            <a href="#home" class="back-btn"><i data-feather="arrow-left"></i> Back to Branches</a>
            <div class="detail-header" style="text-align: center; margin-bottom: 3rem;">
                <div class="branch-icon" style="background: var(--primary-blue); color: white; margin-bottom: 1rem;"><i data-feather="book-open"></i></div>
                <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--dark-navy);">${branch.name} (${branch.code})</h1>
                <p style="color: var(--text-secondary); max-width: 600px; margin: 1rem auto 0;">${branch.desc}</p>
            </div>
            
            <h2 class="section-title">Top Companies</h2>
            <div class="company-grid">
                ${companiesHtml}
            </div>
        </div>
    `;
}

function renderCompanies() {
    const hashParts = window.location.hash.split('?q=');
    const query = hashParts.length > 1 ? decodeURIComponent(hashParts[1]).toLowerCase() : '';

    const allCompanies = DB.companies.map(c => {
        const isMatch = !query || c.name.toLowerCase().includes(query) || c.industry.toLowerCase().includes(query);
        const cardHtml = renderCompanyCard(c);
        // Replace outer div to add inline style display for searching
        return cardHtml.replace('class="company-card"', `class="company-card" style="display: ${isMatch ? 'flex' : 'none'};"`);
    }).join('');

    appRoot.innerHTML = `
        <div class="container section">
            <h2 class="section-title">Explore Companies</h2>
            <div class="page-search">
                <div class="icon"><i data-feather="search"></i></div>
                <input type="text" id="page-search-input" placeholder="Search by name or industry..." value="${query}">
            </div>
            <div class="company-grid" id="companies-grid">
                ${allCompanies}
            </div>
            <div id="no-results" style="display: none; text-align: center; color: var(--text-secondary); padding: 2rem;">No companies found matching your search.</div>
        </div>
    `;

    const filterCompanies = () => {
        const q = document.getElementById('page-search-input').value.toLowerCase();
        const cards = document.querySelectorAll('.company-card');
        let visibleCount = 0;
        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            const industry = card.getAttribute('data-industry').toLowerCase();
            if (name.includes(q) || industry.includes(q)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        document.getElementById('no-results').style.display = visibleCount === 0 ? 'block' : 'none';
    };

    document.getElementById('page-search-input').addEventListener('input', filterCompanies);

    if (query) filterCompanies();
}

function renderCompanyDetails(companyId) {
    const company = DB.companies.find(c => c.id === companyId);
    if (!company) return renderCompanies();

    const branchesNames = company.branches.map(bId => DB.branches.find(b => b.id === bId)?.code).join(', ');

    const processSteps = company.process.map((step, idx) => `
        <div class="timeline-step">
            <h4>Step ${idx + 1}</h4>
            <p>${step}</p>
        </div>
    `).join('');

    const exps = company.experiences.map(e => `
        <div class="exp-card">
            <div class="exp-header">
                <h4 style="font-weight: 700;">Role: ${e.role}</h4>
                <span class="difficulty-badge ${e.difficulty}">${e.diffLabel}</span>
            </div>
            <div class="q-box">
                <h5>Technical Questions:</h5>
                <p>${e.tech}</p>
            </div>
            <div class="q-box">
                <h5>HR Questions:</h5>
                <p>${e.hr}</p>
            </div>
            <div class="q-box" style="margin-bottom:0;">
                <h5>Candidate Tips:</h5>
                <p style="font-style:italic;">"${e.tips}"</p>
            </div>
        </div>
    `).join('');

    appRoot.innerHTML = `
        <div class="container section">
            <a href="javascript:history.back()" class="back-btn"><i data-feather="arrow-left"></i> Back to listings</a>
            
            <div class="company-hero">
                <div class="company-hero-content">
                    <h1>${company.name}</h1>
                    <span class="industry-badge">${company.industry}</span>
                    <p style="margin: 0 auto; color: #e2e8f0; max-width: 800px; font-size: 1.1rem;">${company.desc}</p>
                </div>
            </div>
            
            <div class="content-section">
                <h2 style="margin-bottom: 2rem; color: var(--dark-navy);">Eligibility Criteria</h2>
                <div class="criteria-list">
                    <div class="criteria-item">
                        <h4>Minimum CGPA</h4>
                        <p>${company.criteria.cgpa}</p>
                    </div>
                    <div class="criteria-item">
                        <h4>Eligible Branches</h4>
                        <p>${branchesNames}</p>
                    </div>
                    <div class="criteria-item">
                        <h4>Backlogs Allowed</h4>
                        <p>${company.criteria.backlogs}</p>
                    </div>
                    <div class="criteria-item">
                        <h4>Graduation Year</h4>
                        <p>${company.criteria.graduation}</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section" style="margin-top: 4rem;">
                <h2 style="margin-bottom: 2rem; color: var(--dark-navy);">Selection Process</h2>
                <div class="process-timeline">
                    ${processSteps}
                </div>
            </div>
            
            <div class="content-section" style="margin-top: 4rem;">
                <h2 style="margin-bottom: 2rem; color: var(--dark-navy);">Interview Experiences</h2>
                ${exps || '<p>No experiences shared yet.</p>'}
            </div>
        </div>
    `;
}

function renderExperiences() {
    let allExps = '';
    DB.companies.forEach(c => {
        c.experiences.forEach(e => {
            allExps += `
                <div class="exp-card">
                    <div class="exp-header">
                        <h4 style="font-weight: 700;">${c.name} - ${e.role}</h4>
                        <span class="difficulty-badge ${e.difficulty}">${e.diffLabel}</span>
                    </div>
                    <div class="q-box">
                        <h5>Technical Questions:</h5>
                        <p>${e.tech}</p>
                    </div>
                    <div class="q-box">
                        <h5>HR Questions:</h5>
                        <p>${e.hr}</p>
                    </div>
                    <button class="btn-outline" style="margin-top: 1rem;" onclick="window.location.hash='#company/${c.id}'">View Company</button>
                </div>
            `;
        });
    });

    appRoot.innerHTML = `
        <div class="container section">
            <h2 class="section-title">Interview Experiences</h2>
            <p style="margin-bottom: 3rem; text-align: center; color: var(--text-secondary);">Learn from the experiences of candidates who have gone through the selection process.</p>
            <div style="max-width: 900px; margin: 0 auto;">
                ${allExps}
            </div>
        </div>
    `;
}

function renderAbout() {
    appRoot.innerHTML = `
        <div class="container section content-section" style="max-width: 900px; margin: 0 auto;">
            <h2 class="section-title">About EngiExplorer</h2>
            
            <div class="profile-card">
                <div class="profile-sidebar">
                    <div class="profile-avatar">SA</div>
                    <h3>SAYED ARIF</h3>
                    <p>B.Tech ECE Student & Creator</p>
                    <div class="profile-socials">
                        <a href="#"><i data-feather="linkedin"></i></a>
                        <a href="#"><i data-feather="github"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="globe"></i></a>
                    </div>
                </div>
                
                <div class="profile-content">
                    <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem; color: var(--text-secondary);">
                        "Hi, I'm SAYED ARIF, a B.Tech Electronics and Communication Engineering (ECE) student passionate about technology, web development, career guidance, and helping engineering students make informed career decisions. I created EngiExplorer to provide branch-wise career opportunities, company eligibility criteria, selection processes, internship information, and interview experiences in one place."
                    </p>
                    
                    <div class="profile-section">
                        <h4><i data-feather="book"></i> Education</h4>
                        <p style="color: var(--text-secondary); margin-top: 0.5rem; font-weight: 500;">B.Tech - Electronics & Communication Engineering (ECE)</p>
                    </div>
                    
                    <div class="profile-section">
                        <h4><i data-feather="code"></i> Skills & Interests</h4>
                        <div class="skill-tags" style="margin-top: 1rem;">
                            <span class="skill-tag">Web Development</span>
                            <span class="skill-tag">Career Guidance</span>
                            <span class="skill-tag">UI/UX Design</span>
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">Electronics</span>
                        </div>
                    </div>
                    
                    <div class="profile-section" style="margin-bottom: 0;">
                        <h4><i data-feather="target"></i> Project Highlights</h4>
                        <p style="color: var(--text-secondary); margin-top: 0.5rem;"><strong>EngiExplorer:</strong> A premium, comprehensive internship and placement guidance platform for engineering students.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    appRoot.innerHTML = `
        <div class="container section content-section" style="max-width: 600px; margin: 4rem auto;">
            <h2 class="section-title" style="margin-bottom: 1rem;">Get in Touch</h2>
            <p style="margin-bottom: 3rem; color: var(--text-secondary); text-align: center;">Have questions, feedback, or want to contribute an interview experience? Drop us a line!</p>
            
            <form id="contact-form" style="display: flex; flex-direction: column; gap: 1.5rem; background: var(--bg-card); padding: 3rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); border: 1px solid var(--border-color);">
                <div>
                    <label style="display:block; margin-bottom: 8px; font-weight: 600; color: var(--dark-navy);">Your Name</label>
                    <input type="text" name="name" required style="border-radius: var(--radius-sm); border: 1px solid var(--border-color); width: 100%; padding: 12px 16px; font-size: 1rem; outline: none; transition: border 0.3s;" onfocus="this.style.borderColor='var(--primary-blue)'" onblur="this.style.borderColor='var(--border-color)'">
                </div>
                <div>
                    <label style="display:block; margin-bottom: 8px; font-weight: 600; color: var(--dark-navy);">Email Address</label>
                    <input type="email" name="email" required style="border-radius: var(--radius-sm); border: 1px solid var(--border-color); width: 100%; padding: 12px 16px; font-size: 1rem; outline: none; transition: border 0.3s;" onfocus="this.style.borderColor='var(--primary-blue)'" onblur="this.style.borderColor='var(--border-color)'">
                </div>
                <div>
                    <label style="display:block; margin-bottom: 8px; font-weight: 600; color: var(--dark-navy);">Message</label>
                    <textarea name="message" required style="border-radius: var(--radius-sm); border: 1px solid var(--border-color); width: 100%; padding: 12px 16px; font-size: 1rem; min-height: 150px; font-family: inherit; outline: none; transition: border 0.3s;" onfocus="this.style.borderColor='var(--primary-blue)'" onblur="this.style.borderColor='var(--border-color)'"></textarea>
                </div>
                <button type="submit" id="submit-btn" class="btn-primary" style="justify-content: center; padding: 14px; font-size: 1.05rem; margin-top: 1rem; transition: opacity 0.3s;">
                    <span>Send Message</span> <i data-feather="send" style="width: 18px;"></i>
                </button>
                <div id="form-status" style="text-align: center; font-weight: 600; margin-top: 1rem; display: none;"></div>
            </form>
        </div>
    `;

    setTimeout(() => {
        const form = document.getElementById('contact-form');
        const status = document.getElementById('form-status');
        const btn = document.getElementById('submit-btn');
        
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                // Loading state
                const originalBtnContent = btn.innerHTML;
                btn.innerHTML = 'Sending...';
                btn.style.opacity = '0.7';
                btn.disabled = true;
                
                const formData = new FormData(form);
                
                try {
                    const response = await fetch('https://formspree.io/f/mvznojqg', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        status.style.display = 'block';
                        status.style.color = '#10b981';
                        status.innerText = 'Thank you! Your message has been sent successfully.';
                        form.reset();
                    } else {
                        throw new Error('Formspree returned an error');
                    }
                } catch (error) {
                    status.style.display = 'block';
                    status.style.color = '#ef4444';
                    status.innerText = 'Oops! There was a problem submitting your form.';
                    console.error('Error!', error.message);
                } finally {
                    // Reset button state
                    btn.innerHTML = originalBtnContent;
                    btn.style.opacity = '1';
                    btn.disabled = false;
                    if (window.feather) feather.replace();
                }
            });
        }
    }, 100);
}

// Init
handleRouting();
