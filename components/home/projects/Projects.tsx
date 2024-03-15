import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projetos" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Bluezone",
    imgSrc: "/project-imgs/agency-listing.png",
    code: "https://github.com/cleberzinhos/app_cidadao",
    projectLink: "https://www.figma.com/file/rEMQGa5IrTH3d55qkelZ2L/BlueZone?type=design&node-id=0-1&mode=design&t=JhSqLdPIVIwFvLNI-0",
    tech: ["Dart"],
    description: "Aplicativo para estacionar em zonas azuis",
    modalContent: (
      <>
        <p>
          Trabalhei como um desenvolvedor frontend para esse aplicativo de celular feito para um projeto da faculdade, onde o propósito era de facilitar para o cidadão a achar uma vaga livre na zona azul, e realizar o pagamento pelo aplicativo
        </p>
        <p>
          Esse trabalho foi realizado com outros 4 alunos.
        </p>
      </>
    ),
  },
  {
    title: "Qtivate",
    imgSrc: "/project-imgs/elancerz.png",
    code: "https://github.com/theneptunes/front-end/tree/main/app",
    projectLink: "#",
    tech: ["TypeScript", "HTML", "Dart"],
    description:
      "Aplicativo para facilitar as chamadas escolares",
    modalContent: (
      <>
        <p>
          Trabalhei como um desenvolvedor frontend para um aplicativo de celular, que tinha como objetivo realizar chamadas escolares através de um esquema baseado no QR Code vinculada a sua conta universitária.
          Também trabalhei na parte WEB, que seria a página onde o professor teria acesso ao tempo selecionado para realizar a chamada e também para finalizar, conseguindo ver quem estava presente ou não.
        </p>
        <p>
          Worked in group with another 5 people on this project.
        </p>
      </>
    ),
  },
  {
    title: "Trusty Links",
    imgSrc: "/project-imgs/Trusty.png",
    code: "https://github.com/0x6775737461766f/trusty-links",
    projectLink: "https://www.figma.com/file/JAy9qWs3KSxvWZdPvLnl1d/Trusty-Link?type=design&mode=design&t=g40tD4EYhbDbddfZ-0",
    tech: ["React", "VuE", "Ionic", "Postgres", "Python"],
    description:
      "A project to help people selling art online without being worried of gettind scammed",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer and back-end developer for this web application.
        </p>
        <p>
          I work primarily on the frontend, creating reusable components and
          integrating api.
        </p>
        <p>
          The team in total consists of 6 developers.
        </p>
      </>
    ),
  },
  {
    title: "Drip Wallet",
    imgSrc: "/project-imgs/drip-wallet.png",
    code: "https://www.github.com",
    projectLink:
      ".",
    tech: ["React", "TypescriptX", "Tailwind", "Vue.js"],
    description:
      "Drip Wallet.",
    modalContent: (
      <>
        <p>
          Drip Wallet foi um projeto que nós fizemos em conjunto com uma empresa holandesa do mesmo nome, onde o objetivo era criar uma carteira virtual de criptomoedas que funcionava como uma extensão de navegador, onde era possível fazer transações entre usuários, conversões de moeda e também transações em sites de terceiros
        </p>
        <p>Porém algum tempo depois a empresa apresentou algum problemas e o projeto foi descontinuado, por isso infelizmente não é possível disponibilizar o figma ou o repositório do github, por isso a imagem está um pouco destorcida, já que perdemos o acesso a tudo relacionado ao projeto.</p>
      </>
    ),
  },
  {
    title: "WorshipHIM Landing Page",
    imgSrc: "/project-imgs/worshiphim.png",
    code: "https://www.github.com",
    projectLink: "https://worshiphim.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "Google Play Scrapper", "Ko-Fi"],
    description:
      "Landing Page of WorshipHIM mobile application for showcasing feature rich and tools of the app.",
    modalContent: (
      <>
        <p>
          This is another self project that i made to showcase our mobile app.
        </p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project.
          I also use a plugin for scrapping data from our google play to display
          directly on the landing page.
        </p>
      </>
    ),
  },
  {
    title: "BeeBee",
    imgSrc: "/project-imgs/portfolio-01.png",
    code: "https://github.com/jcdevz-dev/portfolio",
    projectLink: "#",
    tech: ["React", "Styled Components", "Typescript", "Gatsby"],
    description: "First Portfolio Made with React JS",
    modalContent: (
      <>
        <p>
          This is my second version of my portfolio that i made to showcase my
          projects.
        </p>
        <p>Trying out gatsby and creating my second version of portfolio</p>
      </>
    ),
  },
  {
    title: "Portfolio v.1",
    imgSrc: "/project-imgs/portfolio-00.png",
    code: "https://github.com/jcdevz-dev/jc-portfolio",
    projectLink: "https://jc-devera.vercel.app/",
    tech: ["React", "Styled Components", "Typescript"],
    description: "First Portfolio Made with React JS",
    modalContent: (
      <>
        <p>
          This is my first version of my portfolio that i made to showcase my
          projects.
        </p>
        <p>First step for learning React JS and creating my portfolio</p>
      </>
    ),
  },
];
