module.exports = {
  docs: [
    'architecture-at-99x',
    'how-we-work',
    'architecting-new-products',
    'managing-the-debt',
    {
      type: 'category',
      label: 'Architecture Health',
      collapsed: true,
      items: [
        'architecture-health/health-overview',
        'architecture-health/health-checklist'
      ]
    },
    {
      type: 'category',
      label: 'Architecture Evaluation',
      collapsed: true,
      items: [
        'architecture-evaluation/evaluation-overview',
        'architecture-evaluation/internal-due-diligence'
      ]
    },
    // {
    //     type: 'category',
    //     label : 'Our Process',
    //     collapsed:true,
    //     items : [ 
    //       'our-process/product-architecture',
    //       'our-process/continuous-architecture'
    //     ]
    // },
    // {
    //   type: 'category',
    //   label : 'Focus Areas',
    //   collapsed:true,
    //   items : [ 
    //     'focus-areas/web-application',
    //     'focus-areas/cloud-architecture',
    //     'focus-areas/devops',
    //     'focus-areas/secops'
    //   ]
    // },
    // {
    //   type: 'category',
    //   label : 'Case Studies',
    //   collapsed:true,
    //   items : [ 
    //     'case-studies/design-system',
    //     'case-studies/microservices',
    //     'case-studies/microfrontends',
    //     'case-studies/serverless',
    //     'case-studies/multi-tenancy',
    //   ]
    // }
  ]
};