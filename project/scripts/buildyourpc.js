document.addEventListener("DOMContentLoaded", () => {

    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastmodified");
    if (currentYear) currentYear.textContent = new Date().getFullYear();
    if (lastModified) lastModified.textContent = document.lastModified;

    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');
    if (mainnav && hambutton) {
        hambutton.addEventListener('click', () => {
            mainnav.classList.toggle('show');
            hambutton.classList.toggle('show');
        });
    }

    const lightBtn = document.querySelector("#light-mode");
    const darkBtn = document.querySelector("#dark-mode");

    function setTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    if (lightBtn && darkBtn) {
        lightBtn.addEventListener("click", () => setTheme("light"));
        darkBtn.addEventListener("click", () => setTheme("dark"));
    }

    const componentContainer = document.querySelector("#component-container");
    const toggleComponentsBtn = document.querySelector("#toggle-components");

    if (componentContainer && toggleComponentsBtn) {
        const components = [
            {
                name: "CPU",
                image: "images/cpu.webp",
                description: `The Central Processing Unit (CPU) is the core of your computer, often referred to as its "brain." It executes instructions from software, performs calculations, and orchestrates communication between all other components. A powerful CPU improves multitasking, speeds up complex computations, and ensures smooth performance in applications ranging from web browsing to video rendering. Modern CPUs come with multiple cores and threads, which allow simultaneous execution of tasks, while technologies like turbo boost dynamically increase clock speed for demanding processes.
        <strong>**Tip:** Consider core count, thread count, and clock speed. Also, ensure compatibility with your motherboard socket. High-end CPUs excel at gaming, content creation, and scientific computing, whereas mid-range CPUs handle everyday tasks efficiently.</strong>`
            },
            {
                name: "Motherboard",
                image: "images/motherboard.webp",
                description: `The motherboard is the main circuit board that connects every component of your PC, enabling communication between the CPU, RAM, storage, GPU, and peripherals. It determines system expandability, supported technologies, and power delivery quality. A good motherboard can improve overclocking potential, enhance stability under load, and provide a wide range of connectivity options including USB ports, Wi-Fi, and PCIe lanes.
        <strong>**Tip:** Match your motherboard’s socket with your CPU, check chipset features, RAM support, and storage interfaces. Look for quality power phases and cooling if you plan on overclocking or running a high-performance build.</strong>`
            },
            {
                name: "RAM",
                image: "images/ram.webp",
                description: `Random Access Memory (RAM) is the short-term memory of your computer. It temporarily stores data that the CPU needs to access quickly, affecting system speed and responsiveness. More RAM allows smoother multitasking and enhances performance in memory-heavy applications like video editing, 3D modeling, or running multiple programs simultaneously. RAM speed and latency can also influence overall system performance, particularly in gaming or professional workloads.
        <strong>**Tip:** 16GB is typically sufficient for most users; 32GB or more is ideal for heavy multitasking, gaming, or creative work. Check motherboard compatibility and consider using dual-channel memory kits for better efficiency.</strong>`
            },
            {
                name: "Storage",
                image: "images/storage.webp",
                description: `Storage devices hold your operating system, applications, games, and files. Solid State Drives (SSDs) offer high-speed read and write capabilities, dramatically reducing boot times and improving application loading. NVMe SSDs connect via PCIe and provide even faster data transfer than traditional SATA SSDs. Hard Disk Drives (HDDs) provide large storage capacities at a lower cost, making them ideal for backups, media, and bulk storage.
        <strong>**Tip:** Use an SSD for your operating system and frequently used programs to maximize speed. Use an HDD for large files or backups. Consider RAID or backup solutions for critical data safety.</strong>`
            },
            {
                name: "GPU",
                image: "images/gpu.webp",
                description: `The Graphics Processing Unit (GPU) handles rendering of images, videos, and 3D graphics, taking the load off the CPU. A strong GPU is essential for gaming at high resolutions, VR experiences, professional video editing, 3D rendering, and AI or machine learning tasks. GPUs vary in VRAM, cooling design, and processing power, which affect performance and efficiency.
        <strong>**Tip:** Choose a GPU that matches your workload — casual users can rely on integrated graphics or entry-level cards, while gamers and professionals benefit from high-end models. Ensure your PSU can handle the GPU's power requirements and that it physically fits in your case.</strong>`
            },
            {
                name: "Power Supply",
                image: "images/powersupply.webp",
                description: `The Power Supply Unit (PSU) converts electrical power from your wall outlet into a stable and safe voltage for your PC components. A high-quality PSU prevents damage from voltage fluctuations, supports system stability, and can improve energy efficiency. Modular PSUs allow for cleaner cable management, improving airflow and aesthetics.
        <strong>**Tip:** Choose a PSU with wattage exceeding your system's peak requirements, 80+ efficiency rating, and reliable protection features like over-voltage and short-circuit protection. High-quality PSUs last longer and safeguard expensive components.</strong>`
            }
        ];

        let componentsVisible = false;

        function displayComponents() {
            componentContainer.innerHTML = "";
            components.forEach(comp => {
                const card = document.createElement("div");
                card.classList.add("component-card");
                card.innerHTML = `
            <h3>${comp.name}</h3>
            <img src="${comp.image}" alt="${comp.name}" loading="lazy">
            <p>${comp.description}</p>
        `;
                componentContainer.appendChild(card);
            });
        }

        toggleComponentsBtn.addEventListener("click", () => {
            if (!componentsVisible) {
                displayComponents();
                toggleComponentsBtn.textContent = "Hide Components";
            } else {
                componentContainer.innerHTML = "";
                toggleComponentsBtn.textContent = "Show Components";
            }
            componentsVisible = !componentsVisible;
        });
    }

    const guideContainer = document.querySelector("#guide-container");
    const toggleGuideBtn = document.querySelector("#toggle-guide");

    if (guideContainer && toggleGuideBtn) {
        const steps = [
            {
                title: "1. Prepare Your Workspace",
                description: `Before touching any parts, prepare a clean and well-lit workspace. 
        Avoid carpeted areas to reduce the risk of static electricity, which can damage sensitive electronics. 
        Place all your tools and components nearby: a Phillips screwdriver, thermal paste (if needed), an anti-static wrist strap, and small containers for screws. 
        Keep drinks and food away from your components. 
        <strong>**Tip:** Work on a wooden or plastic surface, and if possible, wear an anti-static strap connected to a grounded metal object.</strong>`
            },
            {
                title: "2. Unbox and Inspect Components",
                description: `Unpack all your components carefully, one at a time. Inspect each part for visible damage, such as bent CPU pins, cracked PCBs, or loose screws. 
        Make sure you have all accessories — screws, SATA cables, manuals, I/O shield, etc. 
        <strong>**Tip:**Take note of your parts’ serial numbers for warranty registration later. Always handle PCBs and chips by their edges to avoid finger oils or static damage.</strong>`
            },
            {
                title: "3. Install the CPU",
                description: `Place the motherboard on its anti-static bag or box. 
        Unlock the CPU socket lever and gently lift it up. Align the gold triangle on the CPU corner with the marker on the motherboard socket — this ensures correct orientation. 
        Drop the CPU carefully into the socket; it should fit snugly without force. Lock the lever back into place to secure it. 
        <strong>**Tip:** Never press or wiggle the CPU into position — if it doesn’t drop in, it’s misaligned.</strong>`
            },
            {
                title: "4. Apply Thermal Paste & Install the CPU Cooler",
                description: `Thermal paste helps transfer heat from the CPU to the cooler. If your cooler doesn’t come with paste pre-applied, squeeze a small pea-sized dot in the center of the CPU. 
        Attach the cooler according to its type (air or liquid) and tighten screws in a cross pattern for even pressure. Plug the cooler’s fan cable into the motherboard’s CPU_FAN header. 
        <strong>**Tip:** Too much paste can cause overheating. Use just enough to cover the surface when pressure is applied.</strong>`
            },
            {
                title: "5. Install RAM",
                description: `Locate your motherboard’s RAM slots — usually labeled DIMM1, DIMM2, etc. 
        Check the manual for dual-channel configuration (typically slots 2 and 4). 
        Open the latches, align the notch on the RAM stick with the ridge in the slot, and press down firmly until both sides click. 
        <strong>**Tip:** Mixing different RAM brands or speeds can cause instability — use matched sticks whenever possible.</strong>`
            },
            {
                title: "6. Install M.2 SSD or SATA Drives",
                description: `If using an M.2 SSD, insert it diagonally into its slot and gently press it down, securing it with the small screw provided. 
        For SATA SSDs or HDDs, mount them in drive bays using screws or tool-free brackets, and connect both the SATA data and power cables. 
        <strong>**Tip:** NVMe drives can get hot — if your motherboard includes a heatsink, use it for better longevity and performance.</strong>`
            },
            {
                title: "7. Mount the Motherboard",
                description: `Place the I/O shield into the back of your case — it should click into place firmly. 
        Carefully lower the motherboard into the case, aligning its holes with the standoffs pre-installed in the case. 
        Screw it in using the provided screws, tightening evenly but gently. 
        <strong>**Tip:** Ensure no cables are trapped under the board. Missing or extra standoffs can cause shorts — double-check placement!</strong>`
            },
            {
                title: "8. Install the Power Supply",
                description: `Mount the PSU in the case, typically at the bottom. The fan should face down (if there’s ventilation) or outward. 
        Screw it securely into place, then connect the major cables: 24-pin motherboard, 8-pin CPU power, and any additional PCIe or SATA power cables. 
        Route cables through the case’s management holes for a clean look. 
        <strong>**Tip:** Always buy a PSU from a trusted brand with at least an 80+ Bronze efficiency rating. It’s the most important safety component.</strong>`
            },
            {
                title: "9. Install the GPU",
                description: `Remove the case’s expansion slot covers where your GPU will go. Align the graphics card with the top PCIe x16 slot and press down firmly until it clicks. 
        Secure it with screws and plug in the PCIe power cables if required. 
        <strong>**Tip:** High-end GPUs are heavy — if your case supports it, use a GPU support bracket to prevent sagging.</strong>`
            },
            {
                title: "10. Connect Case Cables and Fans",
                description: `Connect your case’s front panel connectors (power switch, reset, HDD LED, USB, audio) to the motherboard headers. 
        Plug in all your fans to the proper headers or fan hub. Match connectors carefully — incorrect placement can cause issues. 
        <strong>**Tip:** Refer closely to your motherboard manual for the front panel header diagram. It’s easy to mix up pins.</strong>`
            },
            {
                title: "11. Cable Management",
                description: `Organize your cables behind the motherboard tray. Use zip ties or Velcro straps to bundle them neatly. 
        This improves airflow and gives your PC a professional look. 
        Route cables strategically — for example, group PSU cables together and hide excess length in unused drive bays. 
        <strong>**Tip:** Good cable management not only looks great but also helps with future upgrades or troubleshooting.</strong>`
            },
            {
                title: "12. First Boot & BIOS Setup",
                description: `Connect your monitor, keyboard, and mouse. Plug in power and press the case’s power button. 
        If everything turns on, enter BIOS (press DEL or F2 during boot). 
        Check that your CPU, RAM, and storage are detected. Set your boot priority to the correct drive. 
        <strong>**Tip:** Enable XMP (Intel) or DOCP (AMD) in BIOS to ensure your RAM runs at its advertised speed.</strong>`
            },
            {
                title: "13. Install the Operating System",
                description: `Use a bootable USB drive with your preferred OS (like Windows 11 or Ubuntu). 
        Follow on-screen prompts to partition drives and install the system. Once installed, download your motherboard and GPU drivers from the official websites. 
        <strong>**Tip:** Avoid using outdated drivers from CDs — always get the latest versions online for stability and security.</strong>`
            },
            {
                title: "14. Test System Stability",
                description: `Run stability and temperature tests to ensure your PC performs correctly. 
        Use tools like Cinebench, 3DMark, HWMonitor, or Prime95 to stress-test the CPU and GPU. 
        Watch for overheating or shutdowns, which may indicate cooling or power issues. 
        <strong>**Tip:** If temps exceed 85°C under load, reseat your cooler or improve airflow in your case.</strong>`
            },
            {
                title: "15. Finishing Touches & Maintenance",
                description: `Congratulations! Your build is complete. 
        Recheck that all cables are secure and install any remaining case panels. 
        Download utilities to monitor your system (like MSI Afterburner or HWInfo). 
        Over time, clean dust filters and fans regularly to maintain performance. 
        <strong>**Tip:**Keep a small brush or compressed air can handy — a clean PC runs quieter and lasts longer.</strong>`
            }
        ];

        let guideVisible = false;

        function displayGuide() {
            guideContainer.innerHTML = "";
            steps.forEach(step => {
                const card = document.createElement("div");
                card.classList.add("component-card");
                card.innerHTML = `
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                `;
                guideContainer.appendChild(card);
            });

            const tips = document.createElement("div");
            tips.classList.add("component-card");
            tips.innerHTML = `
                <h3>Final Tips</h3>
                <ul>
                    <li>Take your time — rushing can damage components.</li>
                    <li>Ground yourself to avoid static discharge.</li>
                    <li>Keep screws and cables organized.</li>
                    <li>Install all drivers after OS setup.</li>
                </ul>
            `;
            guideContainer.appendChild(tips);
        }

        toggleGuideBtn.addEventListener("click", () => {
            if (!guideVisible) {
                displayGuide();
                toggleGuideBtn.textContent = "Hide Steps";
            } else {
                guideContainer.innerHTML = "";
                toggleGuideBtn.textContent = "Show Steps";
            }
            guideVisible = !guideVisible;
        });
    }
});