<script lang="ts">
  import { getContext } from 'svelte';
  import { I18N_KEY, type I18nContext } from '$lib/i18n';
  import ArrowLeft from '$lib/components/ui/icons/ArrowLeft.svelte';
  import { reveal } from '$lib/actions/reveal';

  const i18n = getContext<I18nContext>(I18N_KEY);
  const lang = $derived(i18n.lang);
  const base = $derived(`/${lang}`);
</script>

<svelte:head>
  <title>
    {lang === 'es' ? 'Política de Privacidad · Demo Massage' : 'Privacy Policy · Demo Massage'}
  </title>
</svelte:head>

<section class="bg-(--bg-base) pt-32 pb-24 md:pt-40 md:pb-36 min-h-dvh">
  <div class="container-zen max-w-3xl mx-auto" use:reveal>
    <!-- Volver -->
    <a
      href={base}
      class="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--brand) transition-colors mb-8"
    >
      <ArrowLeft size={16} />
      {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
    </a>

    {#if lang === 'es'}
      <header class="border-b border-(--line) pb-10 mb-10">
        <span class="eyebrow text-xs uppercase tracking-widest text-(--accent)">Legal</span>
        <h1 class="mt-4 font-display text-4xl sm:text-5xl font-light text-(--text-base)">
          Política de Privacidad
        </h1>
        <p class="mt-4 text-xs text-(--text-muted) uppercase tracking-wider font-mono">
          Última actualización: 16 de Junio, 2026
        </p>
      </header>

      <div class="prose dark:prose-invert text-base leading-relaxed text-(--text-muted) space-y-8">
        <p>
          En <strong>Demo Massage</strong>, valoramos y respetamos tu privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionás al interactuar con nuestro sitio web y al solicitar reservas de sesiones de masaje terapéutico.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          1. Información que Recopilamos
        </h2>
        <p>
          Recopilamos únicamente la información necesaria para gestionar tu solicitud de reserva y brindarte una atención personalizada de calidad:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Datos identificativos:</strong> Nombre y apellidos.</li>
          <li><strong>Datos de contacto:</strong> Dirección de correo electrónico y número de teléfono.</li>
          <li><strong>Detalles de la sesión:</strong> Tratamiento seleccionado, duración preferida, fecha y hora sugeridas, así como cualquier preferencia o zona a tratar que decidas detallar en el formulario.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          2. Finalidad del Tratamiento
        </h2>
        <p>
          Tus datos se utilizan con las siguientes finalidades exclusivas:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Procesar, agendar y confirmar tus solicitudes de reserva.</li>
          <li>Comunicarnos con vos en caso de cambios de horario, cancelaciones o consultas relacionadas con tu sesión.</li>
          <li>Garantizar la seguridad del sitio web y prevenir accesos no autorizados o spam utilizando Cloudflare Turnstile.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          3. Seguridad y Conservación de Datos
        </h2>
        <p>
          Implementamos medidas técnicas y organizativas adecuadas para proteger tu información contra pérdida, alteración o acceso no autorizado. Tus datos se conservan únicamente durante el tiempo necesario para gestionar tu relación con nosotros y cumplir con las obligaciones legales correspondientes.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          4. Terceros y Servicios de Terceros
        </h2>
        <p>
          No vendemos ni compartimos tu información personal con fines publicitarios. Tus datos pueden ser procesados a través de proveedores de servicios de confianza necesarios para operar el sitio:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Cloudflare:</strong> Para seguridad y validación de autenticidad de los formularios (Turnstile).</li>
          <li><strong>Resend:</strong> Para el envío automático de correos transaccionales y confirmaciones de reservas.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          5. Tus Derechos
        </h2>
        <p>
          Tenés derecho a acceder, rectificar, limitar o solicitar la eliminación de tus datos personales en cualquier momento. Para ejercer estos derechos, podés ponerte en contacto con nosotros escribiendo a <strong>hello@demomassage.co.uk</strong>.
        </p>
      </div>
    {:else}
      <header class="border-b border-(--line) pb-10 mb-10">
        <span class="eyebrow text-xs uppercase tracking-widest text-(--accent)">Legal</span>
        <h1 class="mt-4 font-display text-4xl sm:text-5xl font-light text-(--text-base)">
          Privacy Policy
        </h1>
        <p class="mt-4 text-xs text-(--text-muted) uppercase tracking-wider font-mono">
          Last updated: June 16, 2026
        </p>
      </header>

      <div class="prose dark:prose-invert text-base leading-relaxed text-(--text-muted) space-y-8">
        <p>
          At <strong>Demo Massage</strong>, we value and respect your privacy. This Privacy Policy describes how we collect, use, and protect the personal information you provide when interacting with our website and requesting therapeutic massage bookings.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          1. Information We Collect
        </h2>
        <p>
          We collect only the necessary information to process your booking requests and provide high-quality personal attention:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Identification details:</strong> Full name.</li>
          <li><strong>Contact information:</strong> Email address and phone number.</li>
          <li><strong>Session details:</strong> Selected treatment, preferred duration, date and time suggestion, and any treatment area preferences you choose to write in the form.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          2. How We Use Your Data
        </h2>
        <p>
          Your data is used solely for the following purposes:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>To process, schedule, and confirm your booking requests.</li>
          <li>To contact you regarding schedule modifications, cancellations, or inquiries about your session.</li>
          <li>To secure the website and prevent spam using Cloudflare Turnstile.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          3. Data Security and Retention
        </h2>
        <p>
          We implement appropriate technical and organizational measures to safeguard your information against loss, alteration, or unauthorized access. We retain your data only for as long as necessary to manage your relationship with us and to fulfill our legal obligations.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          4. Third-Party Services
        </h2>
        <p>
          We do not sell or share your personal data with third parties for commercial or advertising purposes. Your information is processed through trusted service providers necessary to operate the site:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Cloudflare:</strong> For form security and spam prevention (Turnstile).</li>
          <li><strong>Resend:</strong> For transactional email delivery and booking confirmations.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          5. Your Rights
        </h2>
        <p>
          You have the right to access, rectify, restrict, or request the deletion of your personal data at any time. To exercise these rights, please contact us by writing to <strong>hello@demomassage.co.uk</strong>.
        </p>
      </div>
    {/if}
  </div>
</section>
