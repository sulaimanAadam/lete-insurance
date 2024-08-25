import React from 'react';



const insurancePlans = [
    {
        id: 1,
        title: 'Basic Auto Insurance',
        description: 'Affordable coverage for essential auto insurance needs. Includes liability and collision coverage.',
        price: '₦25,000/month',
        features: [
            'Liability Coverage',
            'Collision Coverage',
            '24/7 Roadside Assistance',
        ],
        buttonLabel: 'Get Started',
        buttonLink: '#contact-us',
    },
    {
        id: 2,
        title: 'Premium Home Insurance',
        description: 'Comprehensive coverage for your home including protection against natural disasters and theft.',
        price: '₦40,000/month',
        features: [
            'Full Property Coverage',
            'Natural Disaster Protection',
            'Theft Protection',
        ],
        buttonLabel: 'Get Quote',
        buttonLink: '#contact-us',
    },
    {
        id: 3,
        title: 'Family Life Insurance',
        description: 'Secure your family’s future with our life insurance plan that offers financial protection and peace of mind.',
        price: '₦50,000/month',
        features: [
            'Term Life Coverage',
            'Accidental Death Benefit',
            'Critical Illness Cover',
        ],
        buttonLabel: 'Learn More',
        buttonLink: '#contact-us',
    },
];

const InsurancePlans = () => {
    return (
        <section id="insurance-plans" className="container my-5">
            <h2 className="text-center mb-4">Our Insurance Plans</h2>
            <div className="row">
                {insurancePlans.map(plan => (
                    <div key={plan.id} className="col-md-4 mb-4">
                        <div sm={12} className="card">
                            <div className="card-body text-center">
                                <h3 className="card-title">{plan.title}</h3>
                                <p className="card-text">{plan.description}</p>
                                <p className="price h4">{plan.price}</p>
                                <ul className="list-unstyled">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="mb-2">{feature}</li>
                                    ))}
                                </ul>
                                <a href={plan.buttonLink} className="btn btn-primary">{plan.buttonLabel}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InsurancePlans;
