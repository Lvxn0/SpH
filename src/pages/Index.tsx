
import { Construction, Phone, Mail, MapPin, Wrench, Users, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <header className="bg-white shadow-lg border-b-4 border-amber-500">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Construction className="text-amber-600" size={48} />
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800">
                Under Construction
              </h1>
              <Construction className="text-amber-600" size={48} />
            </div>
            <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded-r-lg inline-block">
              <p className="text-lg md:text-xl text-slate-700 font-medium">
                Our new website is being built with the same care we put into your kitchens
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Company Info Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Premium Kitchen Fitting Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated team of skilled professionals specializing in kitchen design, 
              installation, and montage services across the UK. With years of experience and 
              attention to detail, we transform your kitchen dreams into reality.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 transition-colors">
              <Wrench className="mx-auto mb-4 text-amber-600" size={40} />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Installation</h3>
              <p className="text-slate-600">Professional kitchen fitting and montage services</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 transition-colors">
              <Users className="mx-auto mb-4 text-amber-600" size={40} />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Experienced Team</h3>
              <p className="text-slate-600">Skilled craftsmen with years of experience</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-amber-400 transition-colors">
              <Clock className="mx-auto mb-4 text-amber-600" size={40} />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliable Service</h3>
              <p className="text-slate-600">On-time delivery and quality workmanship</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-800 text-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to start your kitchen project? Contact us today for a consultation and quote.
              We're here to help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-700 p-6 rounded-lg">
              <Phone className="mx-auto mb-4 text-amber-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-slate-300 mb-2">Available Mon-Fri 8AM-6PM</p>
              <a href="tel:+447123456789" className="text-amber-400 hover:text-amber-300 font-medium text-lg">
                +44 7123 456 789
              </a>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg">
              <Mail className="mx-auto mb-4 text-amber-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-slate-300 mb-2">Quick response guaranteed</p>
              <a href="mailto:info@kitchenfitting.co.uk" className="text-amber-400 hover:text-amber-300 font-medium">
                info@kitchenfitting.co.uk
              </a>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg">
              <MapPin className="mx-auto mb-4 text-amber-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Service Area</h3>
              <p className="text-slate-300 mb-2">Covering all of</p>
              <p className="text-amber-400 font-medium">United Kingdom</p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-md">
          <p className="text-slate-600">
            <strong>Coming Soon:</strong> Our full website with portfolio, detailed services, 
            customer testimonials, and online booking system.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            In the meantime, please don't hesitate to contact us directly for all your kitchen fitting needs.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
