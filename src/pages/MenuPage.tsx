import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Leaf, Flame } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  nameKa: string;
  description: string;
  descriptionKa: string;
  price: string;
  image: string;
  vegan?: boolean;
  spicy?: boolean;
}

const menuData: Record<string, MenuItem[]> = {
  starters: [
    {
      id: 's1',
      name: 'Georgian Khachapuri',
      nameKa: 'ქართული ხაჭაპური',
      description: 'Traditional cheese-filled bread with farm-fresh eggs',
      descriptionKa: 'ტრადიციული ყველით სავსე პური ფერმის ახალი კვერცხით',
      price: '18 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_2.png',
    },
    {
      id: 's2',
      name: 'Pkhali Trio',
      nameKa: 'ფხალის ტრიო',
      description: 'Spinach, beetroot, and eggplant walnut spreads',
      descriptionKa: 'ისპანახის, ჭარხლისა და ბადრიჯნის ნიგვზიანი პასტები',
      price: '15 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_3.png',
      vegan: true,
    },
  ],
  mains: [
    {
      id: 'm1',
      name: 'Grilled Lamb Chops',
      nameKa: 'შემწვარი ცხვრის ხორცი',
      description: 'Tender lamb with herb marinade and seasonal vegetables',
      descriptionKa: 'ნაზი ცხვრის ხორცი მწვანილების მარინადით და სეზონური ბოსტნეულით',
      price: '42 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_2.png',
    },
    {
      id: 'm2',
      name: 'Chakhokhbili',
      nameKa: 'ჩახოხბილი',
      description: 'Traditional chicken stew with tomatoes and herbs',
      descriptionKa: 'ტრადიციული ქათმის ჩახოხბილი პომიდვრითა და მწვანილებით',
      price: '28 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_3.png',
      spicy: true,
    },
  ],
  desserts: [
    {
      id: 'd1',
      name: 'Churchkhela',
      nameKa: 'ჩურჩხელა',
      description: 'Traditional Georgian candy with walnuts and grape must',
      descriptionKa: 'ტრადიციული ქართული ტკბილეული ნიგვზითა და ყურძნის წვენით',
      price: '12 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_2.png',
    },
    {
      id: 'd2',
      name: 'Honey Cake',
      nameKa: 'თაფლის ტორტი',
      description: 'Layered honey cake with cream and caramelized nuts',
      descriptionKa: 'ფენოვანი თაფლის ტორტი კრემითა და კარამელიზებული თხილით',
      price: '16 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_3.png',
    },
  ],
  drinks: [
    {
      id: 'dr1',
      name: 'Georgian Wine Selection',
      nameKa: 'ქართული ღვინის არჩევანი',
      description: 'Curated selection of local wines from Kakheti region',
      descriptionKa: 'ადგილობრივი ღვინოების შერჩეული კოლექცია კახეთის რეგიონიდან',
      price: '25-80 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_4.png',
    },
    {
      id: 'dr2',
      name: 'Tarragon Lemonade',
      nameKa: 'ტარხუნა',
      description: 'Refreshing Georgian tarragon soda',
      descriptionKa: 'გამაგრილებელი ქართული ტარხუნის ლიმონათი',
      price: '8 ₾',
      image: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_3.png',
      vegan: true,
    },
  ],
};

export function MenuPage() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('starters');
  const isGeorgian = i18n.language === 'ka';

  const categories = [
    { id: 'starters', label: t('menu.starters') },
    { id: 'mains', label: t('menu.mains') },
    { id: 'desserts', label: t('menu.desserts') },
    { id: 'drinks', label: t('menu.drinks') },
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
            {t('menu.title')}
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-16" />
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-center mb-12 bg-muted border-border h-14">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-[18px] data-[state=active]:text-primary data-[state=active]:bg-background whitespace-nowrap px-8 text-foreground h-12"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-3 gap-8">
                {menuData[category.id].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-normal hover:-translate-y-2 bg-card text-card-foreground border-border">
                      <div className="relative h-64">
                        <img
                          src={item.image}
                          alt={isGeorgian ? item.nameKa : item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                          {item.vegan && (
                            <Badge className="bg-success text-success-foreground">
                              <Leaf className="w-4 h-4" strokeWidth={1.5} />
                            </Badge>
                          )}
                          {item.spicy && (
                            <Badge className="bg-error text-error-foreground">
                              <Flame className="w-4 h-4" strokeWidth={1.5} />
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-[24px] font-serif text-foreground">
                            {isGeorgian ? item.nameKa : item.name}
                          </h3>
                          <span className="text-[18px] font-medium text-primary">
                            {item.price}
                          </span>
                        </div>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="details" className="border-none">
                            <AccordionTrigger className="text-body-sm text-muted-foreground hover:text-foreground py-2">
                              {isGeorgian ? item.descriptionKa.slice(0, 50) : item.description.slice(0, 50)}...
                            </AccordionTrigger>
                            <AccordionContent className="text-body-sm text-muted-foreground">
                              {isGeorgian ? item.descriptionKa : item.description}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <Button
                          className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary-hover font-normal"
                          size="sm"
                        >
                          {t('menu.addToOrder')}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
