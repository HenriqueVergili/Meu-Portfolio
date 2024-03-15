import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/hv.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Olá, sou o Henrique<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
             Eu sou um <span>Desenvolvedor Frontend</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              Eu passei meus últimos 3 anos construindo e aprimorando aplicações e sites para alguns dos meus projetos universitários, e agora estou a procura de estagiar!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Entre em contato
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Henrique Vergili de Freitas Dias | Frontend Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
