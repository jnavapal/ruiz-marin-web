/**
 * Contenido completo de las páginas de servicio. Estructurado por entidades para
 * alimentar la ruta dinámica /servicios/[slug], el Schema y los bloques FAQ.
 *
 * Redacción orientada a tres decisores:
 *  (a) director financiero de pyme obligada a auditar,
 *  (b) responsable que justifica subvenciones I+D/FEDER/CDTI,
 *  (c) empresa que necesita deducciones fiscales acreditadas.
 *
 * Cada respuesta de FAQ empieza con un primer párrafo autocontenido de 40-55
 * palabras, apto para featured snippet / AI Overview.
 */

export interface ServiceContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  forWhom: string;
  lead: string;
  definition: { term: string; text: string };
  /** Bloques de contenido en orden. `html` admite marcado simple. */
  blocks: { heading: string; html: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  'cuentas-anuales': {
    slug: 'cuentas-anuales',
    metaTitle: 'Auditoría de cuentas anuales en Burgos | Auditor ROAC | Ruiz & Marín',
    metaDescription:
      'Auditoría de cuentas anuales obligatoria y voluntaria en Burgos. Informe firmado por auditor inscrito en el ROAC, conforme a las NIA-ES. Le decimos si está obligado y con qué alcance.',
    h1: 'Auditoría de cuentas anuales (obligatoria y voluntaria)',
    forWhom: 'Para el director financiero de una pyme obligada a auditar',
    lead:
      'Realizamos la auditoría de sus cuentas anuales con rigor técnico e independencia, y emitimos un informe firmado por auditor inscrito en el ROAC conforme a las Normas Internacionales de Auditoría adaptadas a España (NIA-ES). Le confirmamos primero si su sociedad está obligada y con qué alcance.',
    definition: {
      term: 'Auditoría de cuentas anuales',
      text: 'La auditoría de cuentas anuales es la revisión, por un auditor independiente inscrito en el ROAC, de las cuentas anuales de una empresa (balance, cuenta de pérdidas y ganancias, memoria, estado de cambios en el patrimonio neto y, en su caso, estado de flujos de efectivo) para emitir una opinión técnica sobre si reflejan la imagen fiel del patrimonio y los resultados.',
    },
    blocks: [
      {
        heading: 'Qué es',
        html: `<p>La auditoría de cuentas anuales es un trabajo de aseguramiento que verifica que sus estados financieros reflejan la <strong>imagen fiel</strong> de la empresa conforme al marco contable aplicable (Plan General de Contabilidad). El auditor reúne evidencia suficiente y adecuada y emite un informe con una <strong>opinión</strong>: favorable, con salvedades, desfavorable o denegada.</p>
        <p>Distinguimos dos supuestos:</p>
        <ul>
          <li><strong>Auditoría obligatoria (legal):</strong> exigida por la ley cuando la sociedad supera determinados umbrales o concurren otras circunstancias.</li>
          <li><strong>Auditoría voluntaria:</strong> encargada por decisión de la empresa, sus socios o un tercero (banco, inversor, grupo) aunque no exista obligación legal.</li>
        </ul>`,
      },
      {
        heading: 'Cuándo la necesita',
        html: `<p>Su sociedad está <strong>obligada a auditarse</strong> si durante <strong>dos ejercicios consecutivos</strong> supera, a la fecha de cierre, al menos <strong>dos de estos tres límites</strong>:</p>
        <table>
          <thead><tr><th>Parámetro</th><th>Límite</th></tr></thead>
          <tbody>
            <tr><td>Total activo</td><td>4.000.000 €</td></tr>
            <tr><td>Importe neto de la cifra de negocios</td><td>8.000.000 €</td></tr>
            <tr><td>Nº medio de trabajadores</td><td>50</td></tr>
          </tbody>
        </table>
        <p>Además, con independencia del tamaño, suele existir obligación de auditar cuando:</p>
        <ul>
          <li>Recibe <strong>subvenciones o ayudas públicas</strong> por importe superior a 600.000 € (en el ejercicio en que se reconocen y los siguientes en que se apliquen).</li>
          <li>Realiza <strong>obras, servicios o suministros al sector público</strong> por importe superior a 600.000 €, cuando representen más del 50 % de la cifra de negocio.</li>
          <li>Lo solicitan <strong>socios que representen al menos el 5 %</strong> del capital al registrador mercantil, dentro de los tres meses siguientes al cierre.</li>
          <li>Lo exigen los <strong>estatutos, un contrato de financiación o el grupo</strong> al que pertenece.</li>
        </ul>
        <p>Si no tiene la certeza de si está obligado, lo verificamos sin compromiso antes de presupuestar.</p>`,
      },
      {
        heading: 'Qué entregable recibe',
        html: `<p>Recibe el <strong>informe de auditoría</strong> firmado por auditor inscrito en el ROAC, listo para depositar en el Registro Mercantil junto con las cuentas anuales. El informe incluye la opinión, el fundamento de la opinión y, cuando procede, párrafos de énfasis o cuestiones clave de la auditoría.</p>
        <p>Le acompañamos también en la <strong>comunicación de debilidades de control interno</strong> detectadas y en la planificación del calendario para cumplir los plazos legales de formulación, aprobación y depósito de cuentas.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Cuándo es obligatoria la auditoría de cuentas anuales en España?',
        a: 'Es obligatoria cuando la sociedad supera, durante dos ejercicios consecutivos, dos de estos tres límites: activo superior a 4.000.000 €, cifra de negocio superior a 8.000.000 € o más de 50 trabajadores de media. También por recibir subvenciones superiores a 600.000 €, contratar con el sector público o a petición de socios con el 5 % del capital.',
      },
      {
        q: '¿Qué diferencia hay entre auditoría obligatoria y voluntaria?',
        a: 'La auditoría obligatoria viene impuesta por la ley al superar ciertos umbrales o concurrir circunstancias tasadas; la voluntaria la encarga la empresa por decisión propia o de un tercero (banco, inversor, grupo). El trabajo y el informe son técnicamente equivalentes: cambian el motivo del encargo y, si se inscribe el nombramiento, sus efectos registrales.',
      },
      {
        q: '¿Qué ocurre si una empresa obligada no audita sus cuentas?',
        a: 'El Registro Mercantil no admite el depósito de cuentas sin el informe de auditoría obligatorio, lo que conlleva el cierre registral de la hoja de la sociedad. Además, expone a los administradores a responsabilidad y a posibles sanciones, y dificulta el acceso a financiación, contratación pública y operaciones societarias.',
      },
      {
        q: '¿Cuándo debe nombrarse al auditor?',
        a: 'En las sociedades obligadas, la junta general debe nombrar al auditor antes de que finalice el ejercicio a auditar, y la inscripción del nombramiento en el Registro Mercantil refuerza su validez. Recomendamos planificar el encargo con antelación para asegurar tiempo suficiente de trabajo de campo antes de la formulación de las cuentas.',
      },
      {
        q: '¿Cuánto tiempo lleva una auditoría de cuentas anuales?',
        a: 'Depende del tamaño y la complejidad de la empresa, pero un encargo de pyme suele desarrollarse en varias semanas combinando trabajo preliminar y final. Definimos un calendario a medida para emitir el informe con margen sobre los plazos de aprobación (junta antes de seis meses) y depósito de cuentas.',
      },
    ],
  },

  'procedimientos-acordados': {
    slug: 'procedimientos-acordados',
    metaTitle: 'Informes de procedimientos acordados | Auditor ROAC en Burgos | Ruiz & Marín',
    metaDescription:
      'Trabajos de procedimientos acordados (ISRS 4400) sobre estados financieros o transacciones concretas. Informe de hallazgos objetivo y verificable, firmado por auditor inscrito en el ROAC.',
    h1: 'Informes de procedimientos acordados',
    forWhom: 'Para empresas y terceros que necesitan verificar partidas concretas',
    lead:
      'Ejecutamos los procedimientos que usted o un tercero (banco, matriz, organismo) define previamente sobre información financiera concreta y le entregamos un informe de hallazgos objetivo. No emitimos una opinión de auditoría: reportamos hechos verificables para que cada destinatario extraiga sus conclusiones.',
    definition: {
      term: 'Procedimientos acordados',
      text: 'Un trabajo de procedimientos acordados (norma ISRS 4400) es un encargo en el que el auditor aplica procedimientos previamente convenidos con el cliente y los destinatarios sobre datos financieros específicos, y emite un informe de hallazgos de hechos (factual findings) sin expresar una opinión ni proporcionar un nivel de seguridad sobre la información.',
    },
    blocks: [
      {
        heading: 'Qué es',
        html: `<p>En un trabajo de procedimientos acordados, las partes definen <strong>de antemano</strong> qué se va a comprobar y cómo. El auditor ejecuta exactamente esos procedimientos y describe los <strong>hallazgos</strong>, sin valorarlos ni emitir opinión. Su valor está en la <strong>objetividad y trazabilidad</strong>: cada destinatario, que conoce los procedimientos, juzga por sí mismo la suficiencia de los resultados.</p>`,
      },
      {
        heading: 'Cuándo lo necesita',
        html: `<p>Es la solución idónea cuando necesita comprobar algo <strong>específico</strong> sin el coste y alcance de una auditoría completa. Casos habituales:</p>
        <ul>
          <li>Verificación de <strong>cláusulas (covenants) de contratos de financiación</strong> ante una entidad bancaria.</li>
          <li>Revisión de una <strong>cuenta o transacción concreta</strong> (ventas, existencias, tesorería, partidas con un socio o proveedor).</li>
          <li>Comprobaciones para una <strong>matriz, grupo o inversor</strong> en procesos de integración o reporting.</li>
          <li>Soporte parcial de una <strong>due diligence</strong> o de una operación corporativa.</li>
        </ul>`,
      },
      {
        heading: 'Qué entregable recibe',
        html: `<p>Recibe un <strong>informe de hallazgos de hechos</strong> que detalla los procedimientos aplicados y los resultados obtenidos, dirigido a las partes que los acordaron. Es un documento conciso, verificable y orientado a la decisión concreta para la que se solicita.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Qué son los procedimientos acordados?',
        a: 'Son trabajos en los que el auditor aplica procedimientos pactados de antemano con el cliente y los destinatarios sobre información financiera concreta, y emite un informe de hallazgos de hechos. A diferencia de una auditoría, no expresa una opinión ni ofrece seguridad: reporta resultados objetivos para que cada parte concluya por sí misma.',
      },
      {
        q: '¿En qué se diferencian de una auditoría de cuentas?',
        a: 'La auditoría cubre las cuentas anuales en su conjunto y termina con una opinión sobre la imagen fiel. Los procedimientos acordados se centran en partidas o transacciones específicas, siguen procedimientos pactados y no concluyen con opinión ni seguridad, solo con hechos constatados. Por eso suelen ser más rápidos y económicos para necesidades puntuales.',
      },
      {
        q: '¿Sirve un informe de procedimientos acordados para depositar cuentas?',
        a: 'No. El depósito de cuentas en el Registro Mercantil de las sociedades obligadas requiere un informe de auditoría con opinión. Un informe de procedimientos acordados cubre necesidades concretas de verificación frente a terceros, pero no sustituye a la auditoría legal de cuentas anuales cuando esta es obligatoria.',
      },
      {
        q: '¿Quién decide los procedimientos que se aplican?',
        a: 'Los acuerdan el cliente y los destinatarios del informe (por ejemplo, el banco o la matriz) antes de iniciar el trabajo, y se documentan por escrito. El auditor puede ayudar a definirlos para que sean claros y verificables, pero no los amplía ni interpreta por su cuenta durante la ejecución.',
      },
    ],
  },

  'deducciones-fiscales': {
    slug: 'deducciones-fiscales',
    metaTitle: 'Acreditación de deducciones fiscales | Auditor ROAC en Burgos | Ruiz & Marín',
    metaDescription:
      'Acreditación y verificación de deducciones fiscales (I+D+i y otras) con soporte documental sólido frente a la Agencia Tributaria. Informe independiente de auditor inscrito en el ROAC.',
    h1: 'Acreditación de deducciones fiscales',
    forWhom: 'Para empresas que necesitan deducciones fiscales acreditadas',
    lead:
      'Verificamos con rigor las partidas que reducen su carga tributaria y preparamos el soporte documental que respalda las deducciones frente a la Agencia Tributaria. El objetivo: que su empresa aplique las deducciones a las que tiene derecho con seguridad jurídica y trazabilidad ante una eventual comprobación.',
    definition: {
      term: 'Acreditación de deducciones fiscales',
      text: 'Acreditar una deducción fiscal consiste en reunir y verificar la evidencia que demuestra que los gastos e inversiones que generan el derecho a deducir (por ejemplo, en I+D+i) cumplen los requisitos legales en cuanto a naturaleza, importe e imputación temporal, de modo que la deducción aplicada en el Impuesto sobre Sociedades resista una comprobación de la Administración.',
    },
    blocks: [
      {
        heading: 'Qué es',
        html: `<p>Aplicar una deducción sin un soporte sólido es un riesgo: en una comprobación, la Administración puede rechazar la base de la deducción y exigir su devolución con intereses. Nuestro trabajo consiste en <strong>verificar la base de deducción</strong> —su naturaleza, su cuantía y su correcta imputación— y dejar documentada la evidencia que la sustenta.</p>
        <p>Trabajamos con especial atención a las <strong>deducciones por actividades de I+D+i</strong>, que exigen una correcta identificación y cuantificación de gastos de personal, colaboraciones externas, amortizaciones y materiales afectos al proyecto.</p>`,
      },
      {
        heading: 'Cuándo lo necesita',
        html: `<ul>
          <li>Va a <strong>aplicar deducciones por I+D+i</strong> y quiere asegurar la base antes de presentar el Impuesto sobre Sociedades.</li>
          <li>Necesita <strong>respaldo independiente</strong> ante el consejo, los socios o un inversor sobre el importe deducible.</li>
          <li>Quiere <strong>reducir el riesgo</strong> de una regularización en una futura comprobación tributaria.</li>
          <li>Acompaña la deducción con un <strong>informe motivado</strong> u otros mecanismos de seguridad y necesita la cuantificación verificada.</li>
        </ul>`,
      },
      {
        heading: 'Qué entregable recibe',
        html: `<p>Recibe un <strong>informe de verificación</strong> de las bases de deducción, con el detalle de las partidas analizadas, los criterios aplicados y la documentación de soporte. Un documento que aporta seguridad a la dirección y trazabilidad frente a la Agencia Tributaria.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Qué significa acreditar una deducción fiscal?',
        a: 'Acreditar una deducción es reunir y verificar la evidencia que demuestra que los gastos o inversiones que la generan cumplen los requisitos legales de naturaleza, importe e imputación temporal. Así, la deducción aplicada en el Impuesto sobre Sociedades queda documentada y preparada para resistir una comprobación de la Agencia Tributaria.',
      },
      {
        q: '¿Por qué conviene verificar las deducciones por I+D+i antes de aplicarlas?',
        a: 'Porque las deducciones por I+D+i son de las más revisadas por la Administración y requieren cuantificar con precisión gastos de personal, colaboraciones, amortizaciones y materiales afectos. Verificar la base antes de aplicarla reduce el riesgo de una regularización con intereses y aporta seguridad a la dirección sobre el importe realmente deducible.',
      },
      {
        q: '¿La verificación del auditor sustituye al informe motivado del Ministerio?',
        a: 'No. El informe motivado vinculante lo emite el órgano competente y aporta seguridad jurídica sobre la calificación del proyecto. La verificación del auditor es complementaria: comprueba y documenta la base de deducción y su correcta imputación contable, reforzando el soporte de la deducción frente a una comprobación tributaria.',
      },
      {
        q: '¿Qué documentación se necesita para soportar una deducción?',
        a: 'Habitualmente: memoria técnica del proyecto, registro de horas y costes de personal afecto, contratos y facturas de colaboraciones externas, justificación de amortizaciones y materiales, y la conciliación con la contabilidad. Ayudamos a ordenar y verificar esta documentación para que respalde con solidez el importe deducido.',
      },
    ],
  },

  'justificacion-de-subvenciones': {
    slug: 'justificacion-de-subvenciones',
    metaTitle: 'Justificación de subvenciones I+D, FEDER y CDTI · PMP | Auditor ROAC | Ruiz & Marín',
    metaDescription:
      'Informe justificativo de subvenciones de I+D, FEDER y CDTI mediante cuenta justificativa con informe de auditor, y acreditación del periodo medio de pago a proveedores (PMP). Auditor inscrito en el ROAC en Burgos.',
    h1: 'Revisión justificativa de subvenciones (I+D, FEDER, CDTI) y PMP a proveedores',
    forWhom: 'Para el responsable que justifica subvenciones de I+D, FEDER o CDTI',
    lead:
      'Emitimos el informe de auditor sobre la cuenta justificativa de su subvención (I+D, FEDER, CDTI y otros programas) conforme a la normativa aplicable, y acreditamos el periodo medio de pago a proveedores (PMP). Le ayudamos a justificar correctamente la ayuda y a evitar reintegros por defectos formales.',
    definition: {
      term: 'Cuenta justificativa con informe de auditor',
      text: 'La cuenta justificativa con aportación de informe de auditor es la modalidad por la que un beneficiario de una subvención acredita el empleo de los fondos mediante la revisión de un auditor inscrito en el ROAC, que comprueba los gastos justificados conforme a las bases reguladoras y a la Orden EHA/1434/2007, y emite un informe que sustituye a la presentación de justificantes individuales.',
    },
    blocks: [
      {
        heading: 'Qué es',
        html: `<p>Muchas subvenciones (especialmente las de <strong>I+D+i, FEDER y CDTI</strong>) permiten o exigen justificar el empleo de los fondos mediante un <strong>informe de auditor</strong>. El auditor revisa que los gastos imputados cumplen las <strong>bases reguladoras</strong> de la ayuda y los requisitos de elegibilidad, temporalidad y pago, y emite un informe conforme a la <strong>Orden EHA/1434/2007</strong>.</p>
        <p>Incluimos también la <strong>acreditación del periodo medio de pago a proveedores (PMP)</strong>, una métrica con creciente relevancia legal y reputacional, exigida en determinada información y como requisito para acceder a ciertas ayudas y contratos.</p>`,
      },
      {
        heading: 'Cuándo lo necesita',
        html: `<ul>
          <li>Ha recibido una <strong>subvención de I+D, FEDER o CDTI</strong> cuyas bases prevén la cuenta justificativa con informe de auditor.</li>
          <li>Se acerca el <strong>plazo de justificación</strong> y necesita revisar los gastos imputables antes de presentarlos.</li>
          <li>Debe <strong>acreditar su PMP</strong> a proveedores para informar de él o para cumplir un requisito de acceso a ayudas o contratación.</li>
          <li>Quiere <strong>minimizar el riesgo de reintegro</strong> por gastos no elegibles o defectos en la justificación.</li>
        </ul>`,
      },
      {
        heading: 'Qué entregable recibe',
        html: `<p>Recibe el <strong>informe de auditor sobre la cuenta justificativa</strong>, en el formato y con el alcance que exige la entidad concedente, listo para su presentación. Cuando aplica, le entregamos además el <strong>informe sobre el periodo medio de pago a proveedores</strong>. Le señalamos previamente cualquier gasto que pudiera no ser elegible para que pueda corregirlo a tiempo.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Qué es la cuenta justificativa con informe de auditor?',
        a: 'Es la modalidad por la que el beneficiario de una subvención acredita el empleo de los fondos mediante un auditor inscrito en el ROAC, que revisa los gastos según las bases reguladoras y la Orden EHA/1434/2007 y emite un informe. Sustituye a la entrega de todos los justificantes individuales y agiliza la justificación ante el organismo.',
      },
      {
        q: '¿Qué subvenciones se justifican con informe de auditor?',
        a: 'Es habitual en ayudas a la I+D+i, fondos FEDER, programas del CDTI y numerosas convocatorias autonómicas, estatales y europeas cuyas bases reguladoras prevén esta modalidad. Conviene revisar siempre las bases concretas de la convocatoria, porque definen el alcance, el formato del informe y los requisitos del auditor.',
      },
      {
        q: '¿Qué es el periodo medio de pago a proveedores (PMP)?',
        a: 'El periodo medio de pago a proveedores (PMP) es el número medio de días que una empresa tarda en pagar a sus proveedores comerciales desde la recepción de la factura o la entrega del bien o servicio. Es un indicador de cumplimiento de los plazos legales de pago y cada vez más relevante para acceder a ayudas y contratos públicos.',
      },
      {
        q: '¿Cómo se evita el reintegro de una subvención?',
        a: 'Imputando solo gastos elegibles, efectivamente pagados y dentro del periodo subvencionable, con soporte documental completo y correcta conciliación contable. Revisar la justificación antes de presentarla permite detectar y corregir desviaciones a tiempo. Nuestro trabajo identifica los riesgos de elegibilidad para que la justificación sea sólida y evite reintegros.',
      },
    ],
  },

  'otros-trabajos-y-servicios': {
    slug: 'otros-trabajos-y-servicios',
    metaTitle: 'Otros trabajos de auditoría e informes especiales | ROAC Burgos | Ruiz & Marín',
    metaDescription:
      'Informes especiales mercantiles, periciales económicas, due diligence, valoraciones y otros trabajos de aseguramiento firmados por auditor inscrito en el ROAC en Burgos.',
    h1: 'Otros trabajos y servicios',
    forWhom: 'Para empresas con necesidades específicas de aseguramiento',
    lead:
      'Más allá de la auditoría de cuentas, realizamos los trabajos e informes especiales que exige la normativa mercantil o que necesita su empresa en operaciones concretas: informes societarios, periciales económicas, due diligence y valoraciones, siempre con el respaldo de un auditor inscrito en el ROAC.',
    definition: {
      term: 'Informes especiales del auditor',
      text: 'Los informes especiales son trabajos del auditor distintos de la auditoría de cuentas anuales que la legislación mercantil exige en operaciones societarias concretas —como aumentos de capital por compensación de créditos o aportaciones no dinerarias, o la exclusión del derecho de suscripción preferente— y que requieren la intervención de un experto o auditor independiente.',
    },
    blocks: [
      {
        heading: 'Qué incluye',
        html: `<p>Atendemos encargos específicos de aseguramiento y de soporte económico-financiero:</p>
        <ul>
          <li><strong>Informes especiales mercantiles:</strong> aumentos de capital por compensación de créditos o con aportaciones no dinerarias, exclusión del derecho de suscripción preferente y otros supuestos previstos en la Ley de Sociedades de Capital.</li>
          <li><strong>Due diligence financiera:</strong> revisión de la información económico-financiera en procesos de compraventa, inversión o integración.</li>
          <li><strong>Valoraciones de empresas y de participaciones</strong> con metodología contrastada.</li>
          <li><strong>Periciales económicas</strong> y apoyo en procedimientos judiciales o arbitrales.</li>
          <li><strong>Revisiones limitadas</strong> y otros trabajos de aseguramiento a medida.</li>
        </ul>`,
      },
      {
        heading: 'Cuándo lo necesita',
        html: `<p>Cuando una operación societaria exige la <strong>intervención de un auditor o experto independiente</strong>, cuando va a <strong>comprar, vender o invertir</strong> y necesita verificar la información financiera, o cuando un conflicto requiere una <strong>valoración o pericial</strong> rigurosa y defendible. Estudiamos cada caso y le proponemos el alcance adecuado.</p>`,
      },
      {
        heading: 'Qué entregable recibe',
        html: `<p>Recibe el <strong>informe o dictamen</strong> que corresponda a cada encargo, con el alcance, el formato y los requisitos que exige su finalidad —registral, negociadora o judicial— y la firma de un profesional inscrito en el ROAC.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Qué informes especiales exige la Ley de Sociedades de Capital?',
        a: 'La normativa mercantil exige la intervención de un experto o auditor independiente en operaciones como los aumentos de capital por compensación de créditos o con aportaciones no dinerarias y la exclusión del derecho de suscripción preferente. En cada caso, el informe verifica aspectos concretos para proteger a socios y terceros y permitir la inscripción registral.',
      },
      {
        q: '¿Necesito ser cliente de auditoría para encargar estos trabajos?',
        a: 'No. Estos trabajos se contratan de forma independiente según la necesidad concreta, sea o no su empresa cliente de auditoría recurrente. Analizamos el encargo, confirmamos los requisitos legales o de la operación y le proponemos un alcance y un presupuesto cerrados antes de comenzar.',
      },
      {
        q: '¿Qué es una due diligence financiera?',
        a: 'Una due diligence financiera es la revisión de la información económico-financiera de una empresa antes de una operación de compraventa, inversión o integración. Su objetivo es identificar riesgos, ajustes y contingencias que afecten al valor o a las condiciones de la operación, aportando a las partes una base sólida para decidir y negociar.',
      },
    ],
  },
};
