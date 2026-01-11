import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ChefHat } from 'lucide-react';

export function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative h-[calc(100vh-72px)] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_1.png"
            alt="Restaurant interior in Tbilisi"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[72px] leading-[1.1] font-serif text-foreground mb-6">
              {t('home.welcome')}
            </h1>
            <p className="text-[42px] leading-[1.2] text-primary mb-8">
              {t('home.subtitle')}
            </p>
            <p className="text-[20px] leading-[1.6] text-muted-foreground max-w-3xl mx-auto mb-12">
              {t('home.description')}
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/reservations')}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary-button h-14 px-12 text-[18px] font-normal"
            >
              {t('home.makeReservation')}
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-normal hover:-translate-y-2 bg-card text-card-foreground border-border">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative h-[500px]">
                  <img
                    src="https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_2.png"
                    alt="Modern cuisine dish"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <ChefHat className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    <h2 className="text-[36px] font-serif text-foreground">{t('home.todaysSpecial')}</h2>
                  </div>
                  <p className="text-[18px] leading-[1.7] text-muted-foreground mb-8">
                    Experience our chef's signature dish, combining traditional Georgian flavors with modern presentation techniques.
                  </p>
                  <Button
                    onClick={() => navigate('/menu')}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary-hover w-fit font-normal h-12 px-8 text-[16px]"
                  >
                    View Full Menu
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
