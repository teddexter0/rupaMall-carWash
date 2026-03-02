/* eslint-disable react/no-unescaped-entities */
// app/page.js
'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Car, Droplets, Shield, CheckCircle } from 'lucide-react'
import { carwashConfig } from '../config/carwash'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  // Hero slideshow images (replace with actual image paths)
  const heroImages = [
    '/images/hero-1.jpg', // You'll add these images
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
    '/images/hero-4.jpg',
    '/images/hero-5.jpg',
  ]

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setFormError('') // Clear error when user types
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    setFormError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          })
        }, 5000)
      } else {
        setFormError(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setFormError('Network error. Please check your connection and try again.')
    } finally {
      setFormLoading(false)
    }
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Basic Wash",
      price: "KES 500",
      features: ["Exterior wash", "Interior vacuum", "Dashboard wipe", "Window cleaning"],
      icon: Car
    },
    {
      title: "Premium Wash",
      price: "KES 800",
      features: ["Everything in Basic", "Wheel cleaning", "Tire shine", "Interior detailing", "Air freshener"],
      icon: Droplets
    },
    {
      title: "Deluxe Package",
      price: "KES 1,200",
      features: ["Everything in Premium", "Wax protection", "Engine bay cleaning", "Leather conditioning", "30-day guarantee"],
      icon: Shield
    }
  ]

  const testimonials = [
    {
      name: "John Kimani",
      text: "Excellent service! My car looks brand new every time.",
      rating: 5
    },
    {
      name: "Grace Wanjiku",
      text: "Professional team and affordable prices. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Ochieng",
      text: "Quick service without compromising on quality. Will definitely come back.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "How long does a car wash take?",
      answer: "Basic wash takes 30 minutes, Premium takes 45 minutes, and Deluxe takes 60 minutes."
    },
    {
      question: "Do you offer mobile car wash services?",
      answer: "Yes, we offer mobile services within Nairobi for an additional KES 200 transport fee."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, M-Pesa, and card payments for your convenience."
    },
    {
      question: "Do you provide any guarantees?",
      answer: "Our Deluxe package comes with a 30-day satisfaction guarantee."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Rupa's Mall Car Wash</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
            </nav>

            <a href="tel:+254712345678" className="hidden md:flex items-center space-x-4 hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-gray-700">+254 712 345 678</span>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-primary">Home</a>
                <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
                <a href="#about" className="text-gray-700 hover:text-primary">About</a>
                <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
                <a href="#faq" className="text-gray-700 hover:text-primary">FAQ</a>
                <a href="tel:+254712345678" className="flex items-center space-x-2 pt-4 border-t hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-700">+254 712 345 678</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Slideshow */}
      <section id="home" className="pt-20 relative min-h-screen flex items-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Placeholder gradient - replace with actual images */}
              <div
                className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-400"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
                Professional Car Wash <span className="text-blue-200">Services</span>
              </h2>
              <p className="text-xl mb-8 drop-shadow-md">
                Keep your car spotless with our premium car washing services in Nairobi.
                Quality service, competitive prices, and customer satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary text-center shadow-lg">Book Now</a>
                <a href="#services" className="bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center shadow-lg">View Services</a>
              </div>
            </div>

            {/* Slideshow indicators */}
            <div className="hidden md:flex justify-center items-center gap-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-12 bg-white' : 'w-3 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your car</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow p-8 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-6">{service.price}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-primary w-full inline-block text-center">Choose Package</a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Rupa's Mall Car Wash</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 5 years of experience serving the Nairobi community, Rupa's Mall Car Wash 
                has built a reputation for excellence in automotive care. We use premium products 
                and proven techniques to ensure your vehicle receives the best treatment possible.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Eco-friendly cleaning products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Professional trained staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Mobile service available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from Google</p>
          </div>

          {/* Google Reviews will be loaded here dynamically */}
          {/* For now, showing placeholder testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic line-clamp-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Google Review</p>
              </div>
            ))}
          </div>

          {/* Google Rating Summary */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-5xl font-bold text-primary">4.8</div>
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">Based on 150+ Google Reviews</p>
              </div>
            </div>
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <span className={`transform transition-transform duration-200 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch for bookings and inquiries</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6 mb-8">
                <a href="tel:+254712345678" className="flex items-center hover:opacity-80 transition-opacity">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+254 712 345 678</p>
                  </div>
                </a>
                <a href="mailto:info@rupamallcarwash.co.ke" className="flex items-center hover:opacity-80 transition-opacity">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@rupamallcarwash.co.ke</p>
                  </div>
                </a>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon-Sat: 8AM-6PM, Sun: 9AM-4PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193!2d36.8042!3d-1.2681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMDUuMiJTIDM2wrA0OCcxNS4xIkU!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rupa's Mall Car Wash Location"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                📍 Westlands, Nairobi - <a href="https://goo.gl/maps/your-location" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Get Directions</a>
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center animate-fade-in">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-4">We've received your message and will contact you soon.</p>
                  <p className="text-sm text-gray-500">Check your email for confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-center">
                      <p className="text-red-700">{formError}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      disabled={formLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      disabled={formLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      disabled={formLoading}
                      placeholder="+254 712 345 678"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      required
                      disabled={formLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service...</option>
                      <option value="Basic Wash - KES 500">Basic Wash - KES 500</option>
                      <option value="Premium Wash - KES 800">Premium Wash - KES 800</option>
                      <option value="Deluxe Package - KES 1,200">Deluxe Package - KES 1,200</option>
                      <option value="Mobile Service">Mobile Service</option>
                      <option value="Just Inquiring">Just Inquiring</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      disabled={formLoading}
                      placeholder="Tell us about your car and any specific requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="btn-primary w-full disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {formLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Rupa's Mall Car Wash</h3>
              <p className="text-gray-400 mb-4">
                Professional car washing services in Nairobi. Quality service, competitive prices.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+254712345678" className="block hover:text-white transition-colors">+254 712 345 678</a>
                <a href="mailto:info@rupamallcarwash.co.ke" className="block hover:text-white transition-colors">info@rupamallcarwash.co.ke</a>
                <p>Westlands, Nairobi</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Rupa's Mall Car Wash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}