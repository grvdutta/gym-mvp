// Central constants and configuration for easy content updates

export const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
  trainers: [
    "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&h=800&q=80",
    "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&h=800&q=80",
    "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&w=600&h=800&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&h=800&q=80"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&h=600&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&h=600&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&h=600&q=80",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&h=600&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&h=600&q=80",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=600&h=600&q=80"
  ]
};

export const STATS = [
  { value: "5,000+", label: "Happy Members" },
  { value: "20+", label: "Certified Trainers" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Unique Programs" }
];

export const FEATURES = [
  {
    iconName: "Dumbbell",
    title: "Modern Equipment",
    description: "Train with premium high-tech gear designed for maximum performance, efficiency, and safety."
  },
  {
    iconName: "Award",
    title: "Certified Trainers",
    description: "Get personalized guidance from elite, experienced fitness coaches dedicated to your success."
  },
  {
    iconName: "Calendar",
    title: "Flexible Schedule",
    description: "Access our state-of-the-art facilities 24/7. Workout whenever it fits your daily routine."
  }
];

export const SERVICES = [
  {
    iconName: "Flame",
    title: "Strength Training",
    description: "Build raw muscle, increase bone density, and enhance your functional power with specialized lifting programs."
  },
  {
    iconName: "Activity",
    title: "Cardio Fitness",
    description: "Boost your stamina, cardiovascular endurance, and dynamic energy levels with high-intensity interval training."
  },
  {
    iconName: "TrendingDown",
    title: "Weight Loss",
    description: "Burn calories efficiently and shred fat through dynamic workout programs combined with diet tracking support."
  },
  {
    iconName: "UserCheck",
    title: "Personal Training",
    description: "Achieve targeted results with custom-tailored nutrition and 1-on-1 coaching plans designed just for you."
  }
];

export const TRAINERS = [
  {
    name: "Alex Rivera",
    specialization: "Strength & Conditioning Coach",
    experience: "8+ Years Experience",
    image: IMAGES.trainers[0]
  },
  {
    name: "Marcus Vance",
    specialization: "Cardio & HIIT specialist",
    experience: "6+ Years Experience",
    image: IMAGES.trainers[1]
  },
  {
    name: "Sarah Jenkins",
    specialization: "Weight Loss & Nutritionist",
    experience: "5+ Years Experience",
    image: IMAGES.trainers[2]
  },
  {
    name: "Elena Rostova",
    specialization: "Flexibility & Mobility Expert",
    experience: "7+ Years Experience",
    image: IMAGES.trainers[3]
  }
];

export const PRICING_PLANS = [
  {
    name: "Basic",
    price: "$29",
    period: "month",
    features: [
      "Access to Gym Facilities",
      "Locker Room & Shower Access",
      "1 Complimentary Fitness Assessment",
      "Standard Support"
    ],
    highlight: false,
    ctaText: "Get Started"
  },
  {
    name: "Pro",
    price: "$59",
    period: "month",
    features: [
      "24/7 Access to Gym Facilities",
      "Locker Room & Shower Access",
      "1-on-1 Personal Trainer Session / month",
      "Custom Nutrition & Meal Guide",
      "Access to All Group Classes",
      "Priority Support"
    ],
    highlight: true,
    ctaText: "Join Pro Plan"
  },
  {
    name: "Elite",
    price: "$99",
    period: "month",
    features: [
      "All Features Included",
      "Unlimited 1-on-1 Personal Training",
      "Daily Custom Nutrition Coaching",
      "Free Gym Merchandise & Shaker",
      "Private Locker Room Access",
      "24/7 VIP Concierge Support"
    ],
    highlight: false,
    ctaText: "Go Elite"
  }
];

export const TESTIMONIALS = [
  {
    name: "John Doe",
    review: "Apex Fitness completely transformed my lifestyle. The trainers are highly supportive and the modern equipment is top-tier!",
    rating: 5
  },
  {
    name: "Sarah Miller",
    review: "I love the flexible hours and clean facilities. Joining the Pro plan was the best decision for my weight loss journey.",
    rating: 5
  },
  {
    name: "Mike Johnson",
    review: "The strength training programs are incredible. I've gained more muscle in 6 months here than 2 years at my previous gym.",
    rating: 5
  },
  {
    name: "Emily Davis",
    review: "A truly premium gym experience. The trainers are certified, helpful, and keep me motivated every single day.",
    rating: 5
  },
  {
    name: "David Smith",
    review: "Exceptional cardio classes and friendly community. The facilities are top-notch and always spotlessly clean.",
    rating: 4
  },
  {
    name: "Jessica Taylor",
    review: "Having a customized nutrition plan and personal trainer included in my Pro membership has made achieving my goals so easy!",
    rating: 5
  }
];
