import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Sobre mim" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Olá, me chamo Henrique Vergili de Freitas Dias e sou um estudante de Engenharia de Software!
              <br/><br/>
              Por conta da faculdade eu tenho expriência em criações de Aplicativos para celulares, sites e extensões de navegadores. Isso tudo focado especialmente na parte de Front-End, já que sou extremamente interessado em deixar tudo o mais acessível possível e agradável para os usuários
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Minhas Skills incluem HTML, CSS, JavaScript/TypeScript, e varios frameworks desde React até o básico de Vue.js. Também tenho uma grande satisfação e disponibilidade para aprender linguagens novas e estou sempre aberto a novos desafios!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Quando não estou programando eu gosto de me dedicar a música, tendo aprendido meu primeiro instrumento aos 10 anos e até hoje explorando novos instrumentos, o último sendo o piano!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Como disse anteriormente, estou sempre a procura de novos desafios e oportunidades para crescer como desenvolvedor, então se está interessado em me ter em sua equipe ou caso possua alguma dúvida, não hesite em entrar em contato!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Contatos</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
