import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Flame,
  Users,
  Briefcase,
  Crown,
  Target,
  TrendingUp,
  MessageSquare,
  Mic,
  Handshake,
  Award,
  Shield,
  Zap,
  CheckCircle2,
  XCircle,
  Building2,
  Play,
  Lock,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import speakerImg from "@/assets/ignacio-vilhagra.png";
import stageBg from "@/assets/stage-bg.jpg";

// Edit this to point to the external checkout
const CHECKOUT_URL = "#checkout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const SectionDivider = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
);

const PrimaryCTA = ({
  children,
  className = "",
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
}) => (
  <motion.a
    href={CHECKOUT_URL}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
    className={`inline-flex items-center justify-center gap-3 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-wider shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300 ${
      size === "lg" ? "px-10 py-6 text-base md:text-lg" : "px-8 py-5 text-sm md:text-base"
    } ${className}`}
  >
    {children}
    <ArrowRight className="w-5 h-5" />
  </motion.a>
);

const Index = () => {
  const audience = [
    { icon: Briefcase, title: "Empresários", desc: "Que precisam negociar grandes contratos sem perder margem." },
    { icon: Crown, title: "Líderes", desc: "Que comandam equipes e precisam impor autoridade pela palavra." },
    { icon: TrendingUp, title: "Vendedores", desc: "Que cansaram de fechar pouco por insegurança na hora do sim." },
    { icon: Users, title: "Profissionais Liberais", desc: "Que cobram menos do que valem por não saberem se posicionar." },
    { icon: Mic, title: "Quem fala em público", desc: "E quer presença, voz firme e domínio absoluto da audiência." },
    { icon: Target, title: "Quem quer dominar o jogo", desc: "E não aceita mais ser invisível no próprio mercado." },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Comunicação com Autoridade",
      desc: "Aprenda a falar de um jeito que ninguém ousa interromper. Cada palavra com peso, cada pausa com intenção.",
    },
    {
      icon: Zap,
      title: "Venda Sem Medo",
      desc: "Quebre o bloqueio do preço, da objeção e do silêncio. Feche vendas mesmo quando o cliente resiste.",
    },
    {
      icon: Handshake,
      title: "Negociação de Alto Nível",
      desc: "Domine a mesa de negociação. Conduza a conversa, dite o ritmo e sai com o que veio buscar.",
    },
    {
      icon: Crown,
      title: "Presença Profissional",
      desc: "Entre em qualquer ambiente sendo reconhecido. Construa a presença de quem comanda, não de quem pede.",
    },
    {
      icon: Target,
      title: "Posicionamento de Liderança",
      desc: "Pare de ocupar o canto da sala. Aprenda a ocupar o centro com naturalidade e firmeza.",
    },
    {
      icon: MessageSquare,
      title: "Poder de Persuasão",
      desc: "Influencie decisões, mude opiniões e conduza pessoas com argumentos blindados.",
    },
  ];

  const stats = [
    { icon: Calendar, value: "29", label: "anos de mercado" },
    { icon: Users, value: "+70 mil", label: "profissionais treinados" },
    { icon: Award, value: "Inédito", label: "no Acre" },
    { icon: Flame, value: "Disruptivo", label: "treinamento mais forte" },
  ];

  const beforeItems = [
    "Trava na hora de falar e perde o cliente",
    "Aceita qualquer condição com medo de perder",
    "Cobra menos do que vale por insegurança",
    "É interrompido e ignorado em reuniões",
    "Fica em silêncio quando precisa se impor",
    "Vê outros menos preparados ocupando seu espaço",
  ];

  const afterItems = [
    "Fala com firmeza e o cliente escuta até o fim",
    "Negocia de igual para igual em qualquer mesa",
    "Cobra o que merece e o cliente fecha",
    "Toma a palavra e a sala silencia",
    "Impõe presença antes mesmo de falar",
    "Vira referência no próprio mercado",
  ];

  const includes = [
    "3 horas de conteúdo intensivo presencial",
    "Mentoria direta com Ignacio Vilhagra",
    "Certificado oficial de participação",
    "Material exclusivo do treinamento",
    "Networking com profissionais de elite",
    "Apoio da Associação Comercial Industrial",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* ============= 1. HERO ============= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 px-4 sm:px-6">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={stageBg}
            alt=""
            className="w-full h-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary/30 backdrop-blur-sm px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">
              Evento Inédito · Cruzeiro do Sul · AC
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-4"
          >
            COMUNICAÇÃO
            <br />
            <span className="text-primary">BLINDADA</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-heading italic text-lg md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-2"
          >
            Mentalidade de atirador de elite para quem não aceita mais vender com medo.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-xs md:text-sm uppercase tracking-widest font-semibold text-primary mb-12"
          >
            com Ignacio Vilhagra
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          >
            {[
              { icon: Calendar, label: "06 de Maio" },
              { icon: Clock, label: "19h30 Check-in" },
              { icon: MapPin, label: "Teatro dos Náuas" },
              { icon: Flame, label: "Vagas Limitadas" },
            ].map((p, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/40 backdrop-blur-sm px-4 py-2"
              >
                <p.icon className="w-4 h-4 text-primary" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground/90">
                  {p.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.5 }}
          >
            <PrimaryCTA size="lg">Garantir minha vaga agora</PrimaryCTA>
            <p className="mt-6 text-sm text-muted-foreground">
              Associados da ACI possuem <span className="text-primary font-semibold">50% de desconto</span> · Investimento promocional R$ 299,99
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============= 2. PAIN / CONFRONTATION ============= */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="max-w-4xl mx-auto text-center relative">
          <SectionDivider />
          <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 mt-3">
            A Verdade Que Ninguém Te Conta
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Comunicação fraca <span className="text-primary">custa caro.</span>
            <br />
            E você está pagando essa conta todo mês.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-10">
            <p>
              Você já perdeu uma venda porque travou na hora do preço. Já aceitou condições ruins porque teve medo de perder o cliente. Já viu pessoas <em>menos preparadas que você</em> ocuparem o palco enquanto você ficava de fora.
            </p>
            <p>
              <span className="text-foreground font-semibold">Não é falta de competência.</span> É falta de comunicação. É a voz que tremeu, o argumento que faltou, o silêncio na hora errada.
            </p>
          </div>

          <blockquote className="font-heading italic text-xl md:text-2xl text-primary/90 max-w-2xl mx-auto border-l-2 border-primary pl-6 text-left">
            "Se você não sabe se posicionar, alguém ocupa o seu lugar."
          </blockquote>
        </div>
      </section>

      {/* ============= 3. AUTHORITY ============= */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-gradient-to-br from-secondary to-card aspect-[4/5]">
                <img
                  src={speakerImg}
                  alt="Ignacio Vilhagra — mentor especialista em comunicação e vendas"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-2xl pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-2xl shadow-primary/30">
                <div className="font-heading text-3xl md:text-4xl font-bold leading-none">29</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold mt-1">
                  Anos de mercado
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                O Mentor
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Ignacio <span className="text-primary">Vilhagra</span>
              </h2>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-5">
                Mentor, palestrante e especialista em comunicação, vendas, negociação e autoridade profissional. Construiu uma carreira sólida treinando líderes, empresários e profissionais que decidiram parar de pedir oportunidade e começar a ditar as regras.
              </p>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8">
                Comunicação Blindada é considerado o treinamento mais <span className="text-primary font-semibold">disruptivo</span> já criado por ele. Não é teoria. É um ponto de ruptura para quem está cansado de vender com medo.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/50 bg-secondary/50 p-4"
                  >
                    <s.icon className="w-5 h-5 text-primary mb-2" />
                    <div className="font-heading text-2xl font-bold leading-none mb-1">
                      {s.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============= 4. AUDIENCE ============= */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 relative">
            <SectionDivider />
            <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 mt-3">
              Para Quem É
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Esta mentoria é para quem <span className="text-primary">não aceita mais</span> ser invisível.
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
              Se você se reconhece em qualquer um dos perfis abaixo, esta data é sua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audience.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl border border-border/50 bg-secondary/40 hover:bg-secondary/60 hover:border-primary/40 p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <a.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= 5. TRANSFORMATION ============= */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 relative">
            <SectionDivider />
            <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 mt-3">
              A Transformação
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              De quem pede oportunidade
              <br />
              <span className="text-primary">para quem dita as regras.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
            {/* Before */}
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/15 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold">
                  Antes da Mentoria
                </h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold">
                  Depois da Mentoria
                </h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="font-heading italic text-xl md:text-2xl text-primary/90 max-w-2xl mx-auto mb-10">
              "Quem não domina a própria comunicação deixa dinheiro na mesa."
            </blockquote>
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center gap-3 rounded-lg border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 text-sm md:text-base transition-colors duration-300"
            >
              Quero essa transformação
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============= 6. BENEFITS ============= */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 relative">
            <SectionDivider />
            <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 mt-3">
              O Que Você Vai Dominar
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Os 6 pilares da <span className="text-primary">comunicação blindada.</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
              Aqui não tem teoria bonitinha. Aqui você aprende a falar com autoridade absoluta, negociar em alto nível e fechar vendas mesmo quando o cliente resiste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border/50 bg-card hover:border-primary/30 p-6 md:p-8 h-full transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <b.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= 7. OFFER ============= */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 relative">
            <SectionDivider />
            <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 mt-3">
              A Oportunidade
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Sua vaga no <span className="text-primary">Comunicação Blindada</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border-2 border-primary/40 bg-card p-8 md:p-12 shadow-2xl shadow-primary/10"
          >
            {/* Floating badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2 shadow-lg shadow-primary/30">
              <Flame className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Vagas Extremamente Limitadas
              </span>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Investimento normal
              </p>
              <p className="text-2xl md:text-3xl text-muted-foreground line-through font-heading mb-6">
                R$ 599,99
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
                  50% OFF para Associados ACI
                </span>
              </div>

              <p className="text-sm uppercase tracking-widest text-foreground/60 mb-2">
                Por apenas
              </p>
              <div className="font-heading text-6xl md:text-7xl font-bold text-primary leading-none mb-2">
                R$ 299,99
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                à vista · pagamento único · acesso garantido
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

              <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-6">
                O que está incluso
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
                {includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <PrimaryCTA size="lg">Garantir minha vaga agora</PrimaryCTA>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 text-xs text-muted-foreground">
                <div className="inline-flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Certificado incluso</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>3h de imersão</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============= 8. INSTITUTIONAL ============= */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border/50 bg-secondary/30 p-8 md:p-12 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Handshake className="w-7 h-7 text-primary" />
              </div>
            </div>
            <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-3">
              Apoio Institucional
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Associação Comercial Industrial
            </h3>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
              Um evento chancelado pela Associação Comercial Industrial de Cruzeiro do Sul. Credibilidade, seriedade e compromisso com o desenvolvimento profissional do empresariado acreano.
            </p>
          </div>
        </div>
      </section>

      {/* ============= 9. VIDEO ============= */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 relative">
            <SectionDivider />
            <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 mt-3">
              Assista
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Veja o que te espera <span className="text-primary">no palco.</span>
            </h2>
          </div>

          <div className="relative rounded-2xl border border-primary/20 aspect-video overflow-hidden bg-card group cursor-pointer shadow-2xl shadow-primary/10">
            <img
              src={stageBg}
              alt=""
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/40 mb-6 transition-colors"
                aria-label="Reproduzir vídeo de apresentação"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
              </motion.button>
              <p className="text-sm md:text-base text-foreground/80 uppercase tracking-widest font-semibold">
                Clique para assistir
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= 10. CLOSING ============= */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={stageBg}
            alt=""
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 border border-destructive/30 px-5 py-2 mb-8">
            <Flame className="w-4 h-4 text-destructive" />
            <span className="text-xs font-bold uppercase tracking-widest text-destructive">
              Últimas Vagas
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Comunicação Blindada não é um curso.
            <br />
            <span className="text-primary">É um ponto de ruptura.</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto mb-8">
            É a diferença entre quem pede oportunidade e quem dita as regras do jogo. Quem está dentro sabe: comunicação é a única chave que separa quem sobrevive de quem lidera.
          </p>

          <blockquote className="font-heading italic text-xl md:text-2xl text-primary/90 max-w-2xl mx-auto mb-10">
            "Se você está pronto para o próximo nível, essa é a sua data."
          </blockquote>

          <PrimaryCTA size="lg">Eu quero garantir minha vaga</PrimaryCTA>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> 06 de Maio
            </span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> 19h30 Check-in
            </span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Teatro dos Náuas — Cruzeiro do Sul/AC
            </span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic max-w-xl mx-auto">
            Exclusivo para quem realmente quer mudar de vida e dominar o mercado.
          </p>
        </div>
      </section>

      {/* ============= 11. FOOTER ============= */}
      <footer className="border-t border-border/50 py-10 md:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-heading text-xl font-bold mb-3">
                COMUNICAÇÃO <span className="text-primary">BLINDADA</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mentoria presencial e imersão intensiva com Ignacio Vilhagra. Para quem decidiu liderar com a palavra.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                Evento
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Teatro dos Náuas — Cruzeiro do Sul, Acre</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>06 de Maio · 19h30 (Check-in)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>3 horas de conteúdo intensivo</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                Contato
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>contato@comunicacaoblindada.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>(68) 0000-0000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Comunicação Blindada · Ignacio Vilhagra. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Apoio institucional: <span className="text-primary font-semibold">Associação Comercial Industrial</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
