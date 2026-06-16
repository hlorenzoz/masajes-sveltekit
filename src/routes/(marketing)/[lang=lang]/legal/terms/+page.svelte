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
    {lang === 'es' ? 'Términos del Servicio · Hondo' : 'Terms of Service · Hondo'}
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
          Términos del Servicio
        </h1>
        <p class="mt-4 text-xs text-(--text-muted) uppercase tracking-wider font-mono">
          Última actualización: 16 de Junio, 2026
        </p>
      </header>

      <div class="prose dark:prose-invert text-base leading-relaxed text-(--text-muted) space-y-8">
        <p>
          Bienvenido a <strong>Hondo</strong>. Al solicitar una reserva o utilizar los servicios del estudio privado de masajes de Sergio Zaldívar Guillén, aceptás cumplir con estos Términos del Servicio. Te recomendamos leerlos con atención.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          1. Reservas y Confirmación
        </h2>
        <p>
          Las solicitudes de reserva se realizan a través de nuestro formulario en línea. Toda solicitud está sujeta a revisión de disponibilidad y <strong>no se considera confirmada</strong> hasta que recibas un correo electrónico de confirmación directa de Sergio con la fecha y hora definitivas.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          2. Política de Cancelación y Reprogramación
        </h2>
        <p>
          Para mantener la calidad y el ritmo de atención sin prisa del estudio, reservamos el tiempo completo exclusivamente para vos. Por ello:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Cualquier cancelación o solicitud de reprogramación debe realizarse con un mínimo de <strong>24 horas de antelación</strong>.</li>
          <li>Las cancelaciones fuera de este plazo o las inasistencias sin previo aviso podrán acarrear cargos equivalentes al valor total del tratamiento solicitado en futuras reservas.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          3. Puntualidad
        </h2>
        <p>
          Te solicitamos llegar a la hora exacta de tu cita para garantizar la duración completa del tratamiento. Si llegás con retraso, la sesión finalizará a la hora prevista para respetar al siguiente cliente, aplicándose la tarifa completa de la sesión reservada.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          4. Salud y Contraindicaciones
        </h2>
        <p>
          Es tu responsabilidad informar al terapeuta antes de iniciar la sesión sobre cualquier condición médica relevante, lesiones recientes, embarazo, cirugías o alergias a aceites esenciales.
        </p>
        <p>
          <em>Descargo de responsabilidad médica:</em> Los tratamientos corporales realizados en Hondo tienen fines de bienestar, relajación y recuperación muscular. No reemplazan en ningún caso el diagnóstico, tratamiento o indicación de un profesional de la salud o médico certificado.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          5. Modificaciones de Servicio y Tarifas
        </h2>
        <p>
          Nos reservamos el derecho de modificar o discontinuar tratamientos de la carta, así como ajustar las tarifas de los servicios en cualquier momento. Los precios aplicados a tu sesión confirmada respetarán siempre el valor cotizado en el momento del envío de tu propuesta.
        </p>
      </div>
    {:else}
      <header class="border-b border-(--line) pb-10 mb-10">
        <span class="eyebrow text-xs uppercase tracking-widest text-(--accent)">Legal</span>
        <h1 class="mt-4 font-display text-4xl sm:text-5xl font-light text-(--text-base)">
          Terms of Service
        </h1>
        <p class="mt-4 text-xs text-(--text-muted) uppercase tracking-wider font-mono">
          Last updated: June 16, 2026
        </p>
      </header>

      <div class="prose dark:prose-invert text-base leading-relaxed text-(--text-muted) space-y-8">
        <p>
          Welcome to <strong>Hondo</strong>. By requesting a booking or utilizing the services at the private massage studio of Sergio Zaldívar Guillén, you agree to comply with these Terms of Service. Please read them carefully.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          1. Bookings and Confirmation
        </h2>
        <p>
          Booking requests are submitted via our online form. All requests are subject to availability checks and <strong>are not considered confirmed</strong> until you receive a direct email confirmation from Sergio with final details.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          2. Cancellation and Rescheduling Policy
        </h2>
        <p>
          To maintain the quality and unhurried pace of the studio, we dedicate the entire block of time exclusively to you. Therefore:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Any cancellation or rescheduling request must be made at least <strong>24 hours in advance</strong>.</li>
          <li>Cancellations made less than 24 hours prior to the appointment or no-shows may incur charges equivalent to the full price of the booked session on future visits.</li>
        </ul>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          3. Punctuality
        </h2>
        <p>
          We kindly request you to arrive at the exact time of your appointment to guarantee the full length of the treatment. If you arrive late, the session will still end at the scheduled time to respect the next client's booking, and the full rate will apply.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          4. Health and Contraindications
        </h2>
        <p>
          It is your responsibility to inform the therapist before starting the session about any relevant medical conditions, recent injuries, pregnancy, surgeries, or essential oil allergies.
        </p>
        <p>
          <em>Medical disclaimer:</em> Bodywork treatments performed at Hondo are for wellness, relaxation, and muscle recovery. They do not, under any circumstances, replace the diagnosis, treatment, or guidance of a licensed healthcare professional or medical doctor.
        </p>

        <h2 class="font-display text-2xl text-(--text-base) font-light pt-4 border-b border-(--line) pb-2">
          5. Modifications of Services and Rates
        </h2>
        <p>
          We reserve the right to modify or discontinue treatments from the menu, and adjust service rates at any time. Prices applied to a confirmed session will always match the rate quoted when your request was submitted.
        </p>
      </div>
    {/if}
  </div>
</section>
