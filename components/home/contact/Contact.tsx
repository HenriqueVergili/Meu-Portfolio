import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="Entre em contato">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Está com alguma dúvida ou tem interesse em me ter em sua equipe? Me mande um email! Você também pode me encontrar no{" "}
            <Link
              href="https://www.linkedin.com/in/henrique-vergili-774642209/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            ou pelo{" "}
            <Link href="https://join.skype.com/invite/vKVMgi5SGjvM" target="_blank" rel="nofollow">
              Whatsapp
            </Link>{" "}
            se achar melhor!
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:henrique.vergili@hotmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
