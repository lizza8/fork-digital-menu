import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { MapPin, Clock, Phone, Award, Sparkles, Heart } from 'lucide-react';

export function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      title: t('about.quality'),
      description: 'We source only the finest local ingredients',
    },
    {
      icon: Sparkles,
      title: t('about.innovation'),
      description: 'Blending tradition with modern techniques',
    },
    {
      icon: Heart,
      title: t('about.service'),
      description: 'Creating memorable dining experiences',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[56px] font-serif text-foreground text-center mb-4">
            {t('about.title')}
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-[28px] text-primary text-center mb-16">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_4.png"
              alt="Restaurant table setting at night"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[20px] leading-[1.7] text-muted-foreground mb-8">
              {t('about.description')}
            </p>
            <p className="text-[18px] leading-[1.7] text-muted-foreground">
              Located in the vibrant heart of Tbilisi, Fork has become a destination for food lovers seeking an elevated dining experience that honors Georgian culinary heritage while embracing contemporary innovation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[48px] font-serif text-foreground text-center mb-12">
            {t('about.values')}
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-10 text-center hover:shadow-xl transition-all duration-normal hover:-translate-y-2 bg-card text-card-foreground border-border"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[26px] font-serif text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-serif text-foreground text-center mb-8">
            {t('about.location')}
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <Card className="p-8 bg-card text-card-foreground border-border">
              <h3 className="text-[28px] font-serif text-foreground mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                {t('about.contact')}
              </h3>
              <div className="space-y-4 text-[18px] text-muted-foreground">
                <p>{t('about.address')}</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span>{t('about.hoursText')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span>+995 555 123 456</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card text-card-foreground border-border">
              <h3 className="text-[28px] font-serif text-foreground mb-6">
                {t('about.scanQR')}
              </h3>
              <div className="flex items-center gap-8">
                <div className="w-40 h-40 bg-background rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_5.png"
                    alt="QR code phone mockup"
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  Scan this QR code from your table to view our digital menu and place orders directly from your phone.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 rounded-lg overflow-hidden shadow-xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.2!2d44.8!3d41.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzAwLjAiTiA0NMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sge!4v1234567890!5m2!1sen!2sge&key=YOUR_API_KEY"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fork Restaurant Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
