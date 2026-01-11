import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Card } from '../components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Users } from 'lucide-react';

export function ReservationPage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('reservation.success'),
        description: `${formData.name}, ${formData.date} at ${formData.time}`,
        action: (
          <Button variant="outline" size="sm" className="bg-transparent text-foreground border-border hover:bg-muted hover:text-primary">
            {t('reservation.undo')}
          </Button>
        ),
      });
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[56px] font-serif text-foreground text-center mb-4">
            {t('reservation.title')}
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-16" />
        </motion.div>

        <Card className="p-12 bg-card text-card-foreground border-border">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-[18px] text-foreground">
                {t('reservation.name')}
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('reservation.name')}
                className="bg-muted text-foreground border-border focus:border-primary placeholder:text-muted-foreground h-12 text-[16px]"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-[18px] text-foreground">
                {t('reservation.phone')}
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+995 XXX XXX XXX"
                className="bg-muted text-foreground border-border focus:border-primary placeholder:text-muted-foreground"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="date" className="text-[18px] text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5" strokeWidth={1.5} />
                  {t('reservation.date')}
                </Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-muted text-foreground border-border focus:border-primary"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="time" className="text-[18px] text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5" strokeWidth={1.5} />
                  {t('reservation.time')}
                </Label>
                <Input
                  id="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="bg-muted text-foreground border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="guests" className="text-[18px] text-foreground flex items-center gap-2">
                <Users className="w-5 h-5" strokeWidth={1.5} />
                {t('reservation.guests')}
              </Label>
              <Select
                value={formData.guests}
                onValueChange={(value) => setFormData({ ...formData, guests: value })}
                required
              >
                <SelectTrigger className="bg-muted text-foreground border-border focus:border-primary">
                  <SelectValue placeholder={t('reservation.guests')} />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground border-border">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()} className="text-foreground">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary-button h-14 text-[18px] font-normal"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-pulse">●</span>
                  Processing...
                </span>
              ) : (
                t('reservation.submit')
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
