import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import About5 from "@/components/sections/About5"
import About6 from "@/components/sections/About6"
import About7 from "@/components/sections/About7"
import Achievement1 from "@/components/sections/Achievement1"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/Hero1"
import Hero4 from "@/components/sections/Hero4"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import Marque3 from "@/components/sections/Marque3"
import Marque4 from "@/components/sections/Marque4"
import News1 from "@/components/sections/News1"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Project2 from "@/components/sections/Project2"
import Project3 from "@/components/sections/Project3"
import Project4 from "@/components/sections/Project4"
import Service3 from "@/components/sections/Service3"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial2 from "@/components/sections/Testimonial2"
import Testimonial3 from "@/components/sections/Testimonial3"
import Testimonial4 from "@/components/sections/Testimonial4"
import SideScroll from "@/components/SideScroll"

var services = [
    {
        "head": "Corporate & Enterprise",
        "desc" : "Smart boardrooms, video conferencing, and unified control systems for efficient communication",
        "img" : "assets/img/about/10.webp"
    },
    {
        "head": "Hospitality",
        "desc" : "Intuitive automation for hotels, resorts, and event spaces, enhancing guest experiences",
        "img" : "assets/img/about/08.png"
    },
    {
        "head": "Education",
        "desc" : " Interactive classrooms, lecture halls, and campus-wide AV solutions for modern learning environments.",
        "img" : "assets/img/about/10.webp"
    },
    {
        "head": "Healthcare",
        "desc" : "Reliable AV and control systems for hospitals, clinics, and telemedicine applications",
        "img" : "assets/img/about/08.png"
    },
    {
        "head": "Retail",
        "desc" : "Dynamic digital signage, background music, and smart control solutions for engaging customer experiences.",
        "img" : "assets/img/about/10.webp"
    },
    {
        "head": " Entertainment & Venues",
        "desc" : " Theatres, Arenas, and performance spaces with immersive AV and lighting control.",
        "img" : "assets/img/about/08.png"
    },
    {
        "head": "Sports Venues",
        "desc" : " High-performance AV and control solutions for immersive fan experiences and seamless event management.",
        "img" : "assets/img/about/10.webp"
    },
    {
        "head": " Houses of Worship",
        "desc" : " Powerful audio, video, and control systems to enhance services and community engagement",
        "img" : "assets/img/about/08.png"
    },
    {
        "head": "Government & Defense",
        "desc" : " Secure and reliable AV solutions for mission-critical environments",
        "img" : "assets/img/about/10.webp"
    },
];

var projects = [
    {
        "head" : "ADNOC Control Room",
        "desc" : "At ADNOC HQ Control Room, we have expertly programmed and integrated the Q-SYS ecosystem with Seervision camera tracking for seamless automation. Additionally, we have implemented high-demand features such as voice lift and speaker tracking using eight ceiling tile microphones, along with sound reinforcement through wireless microphones. The entire 50-meter video wall is efficiently controlled by Q-SYS, ensuring a dynamic and intuitive experience. To further enhance user interaction, we have incorporated voice prompts that respond intelligently to user inputs, delivering a more immersive and efficient control system",
        "img" : ""
    },
    {
        "head" : "Dubai Police Forensic Control room",
        "desc" : "At the Dubai Police Forensic Control Room, we have expertly programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. Additionally, we have implemented high-demand features such as voice lift and speaker tracking using two ceiling tile microphones, all centrally controlled by Q-SYS. Furthermore, our team has meticulously optimized the room’s audio, fine-tuning it based on room reflections to ensure crystal-clear sound, even in challenging acoustic conditions, making it ideal for mission-critical applications",
        "img" : ""
    },
    {
        "head" : "ADGM Al Reem Courtroom",
        "desc" : ` At ADGM Al Reem Courtroom, Evolvix executed a comprehensive AV and control system upgrade, integrating cutting-edge technology for seamless communication 
and automation. The renovation included the installation of four ceiling tile microphones and 16 wireless microphones, ensuring crystal-clear audio capture and 
reinforcement. Advanced voice lift and sound optimization were implemented to enhance speech intelligibility across the room. `,
        "img" : ""
    },
    {
        "head" : "Department of Government Enablement",
        "desc" : ` The Department of Government Enablement envisioned replicating the Cisco Touch Panel interface within the Q-SYS iPad application, and our team successfully 
brought this concept to life. We meticulously recreated the User Control Interface (UCI) on the Q-SYS platform, seamlessly integrating Cisco API to enable full control 
directly from the Q-SYS UCI viewer, ensuring a streamlined and intuitive user experience`,
        "img" : ""
    },
    {
        "head" : "NMK Electronics HQ Boardroom",
        "desc" : ` Evolvix designed and implemented a fully synchronized AV and control system at UCI, creating a seamless replica of the actual room where both environments remain 
in perfect sync. When changes occur in the physical space—such as lights turning off—the UCI replica dynamically adjusts, reflecting the real-time state. The 
integration features multiple microphones and advanced speaker tracking for enhanced audio clarity and automation. Additionally, an intuitive pantry ordering system 
was developed, where user requests trigger real-time updates on digital signage screens, streamlining service efficiency and elevating the overall user experience`,
        "img" : ""
    },
    {
        "head" : "ADNOC Executive Meeting Room",
        "desc" : `At ADNOC HQ Executive Meeting Room, we have skilfully programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. The system 
manages various types of meeting room displays and multiple input sources, all centrally controlled by Q-SYS. Additionally, our team has meticulously fine-tuned the 
room’s audio, optimizing it based on room reflections to ensure crystal-clear sound from the ceiling microphones, making it ideal for mission-critical applications`,
        "img" : ""
    },
    {
        "head" : "ADNOC Crisis Meeting room",
        "desc" : ` At ADNOC HQ Crisis Meeting Room, we have expertly programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. The system efficiently 
manages diverse display layouts with multiple input sources, all centrally controlled by Q-SYS. Furthermore, our team has meticulously optimized the room’s audio, 
fine-tuning it based on room reflections to deliver crystal-clear sound from the ceiling microphones, ensuring reliability for mission-critical applications`,
        "img" : ""
    },
    {
        "head" : "ADNOC Logistics Services Boardroom",
        "desc" : ` At the ADNOC Logistics Boardroom, we have expertly programmed and seamlessly integrated the Q-SYS ecosystem for advanced automation. The system efficiently 
manages a 120" video wall with multiple video inputs, all encoded and decoded through the network and centrally controlled by Q-SYS. Additionally, the room 
features speaker tracking for enhanced audio clarity. Our team has meticulously optimized the room’s acoustics, fine-tuning the audio based on room reflections to 
ensure crystal-clear sound from the ceiling microphones, guaranteeing reliability for mission-critical applications.`,
        "img" : ""
    },
    {
        "head" : "Khalifa University Auditorium",
        "desc" : ` The Khalifa University Auditorium, designed to accommodate 300 attendees, has been expertly programmed and seamlessly integrated with the Q-SYS ecosystem for 
audio-video processing and advanced automation. The system efficiently manages a 220" projector and motorized screen with multiple video inputs, all encoded and 
decoded through the network and centrally controlled by Q-SYS. Additionally, our team has meticulously optimized the room’s acoustics, fine-tuning the audio based 
on room reflections to ensure crystal-clear sound from the ceiling microphones, guaranteeing reliability for mission-critical applications`,
        "img" : ""
    },
    {
        "head" : "Al Dhaid University Boardroom",
        "desc" : `At Al Dhaid University Boardroom, we have skilfully engineered and integrated the Q-SYS ecosystem, incorporating speaker tracking to enable seamless automation. In 
response to high user demand, we have also implemented advanced features such as voice lift and sound reinforcement using wireless microphones. To elevate user 
engagement, the system includes intelligent voice prompts that dynamically respond to user inputs, creating a more interactive and efficient control experience.`,
        "img" : ""
    },
    {
        "head" : "Emirates Chairman Boardroom",
        "desc" : ` Evolvix successfully delivered a state-of-the-art AV solution for the Emirates Chairman Boardroom, optimizing it for high-performance video conferencing. Our 
integration of the Crestron control system ensures seamless automation, enhancing user experience with effortless operation. To meet high user demand, we 
implemented advanced features such as voice lift and intelligent speaker tracking, utilizing five ceiling tile microphones and multiple PTZ cameras. This comprehensive 
setup guarantees crystal-clear audio and dynamic video capture, enabling a smooth and immersive conferencing experience.`,
        "img" : ""
    },
];

export default function Home() {

    return (
        <>

            <Layout headerStyle={4} footerStyle={3}>
                <Hero4 />
                <About4 />
                <About5 />
                <Service3 />
                <About6 />
                <About7 />
                <Project4 data={services} title={"Industries We Serve"}/>
                <Testimonial1 />
                {/* <Project2 /> */}
                {/* <Project1 /> */}
                <Marque2 />

            </Layout>
        </>
    )
}