
import React from 'react';
import { ScreenType, LoopItem, Zman, TorahLesson } from './types';
import { 
  Sun, Moon, Star, Clock, Heart, Users, Baby, Flower2, Image as ImageIcon
} from 'lucide-react';

export const INITIAL_LOOP_ITEMS: LoopItem[] = [
  {
    id: 'main-board',
    type: ScreenType.MAIN,
    isActive: true,
    duration: 30,
  },
  {
    id: 'wedding-1',
    type: ScreenType.WEDDING,
    isActive: false,
    duration: 15,
    familyTitle: 'כהן',
    names: 'דוד ורחל',
  },
  {
    id: 'girl-1',
    type: ScreenType.GIRL,
    isActive: false,
    duration: 15,
    familyTitle: 'ישראלי',
    subText: 'להולדת הבת היקרה והאהובה',
  },
  {
    id: 'dedication-1',
    type: ScreenType.DEDICATION,
    isActive: false,
    duration: 15,
    familyTitle: 'פלוני בן פלוני',
    names: 'ומשפחתו',
    subText: 'וכל יוצאי חלציו',
  }
];

export const MOCK_ZMANIM: Zman[] = [
  { label: 'עלות השחר', time: '05:47', subLabel: 'משיכיר', icon: 'Sun' },
  { label: 'זריחה', time: '06:40', subLabel: 'הנץ החמה', icon: 'Sun' },
  { label: 'שקיעה', time: '17:03', subLabel: 'שקיעת החמה', icon: 'Moon' },
  { label: 'כניסת שבת', time: '16:48', subLabel: 'הדלקת נרות', icon: 'Star' },
  { label: 'מנחה', time: '16:43', subLabel: 'שקיעה - 20 ד\'', icon: 'Sun' },
  { label: 'יציאת שבת', time: '17:57', subLabel: 'מוצאי שבת', icon: 'Moon' },
  { label: 'מנחה גדולה', time: '13:00', subLabel: 'שבת', icon: 'Sun' },
  { label: 'מנחה קטנה', time: '16:30', subLabel: 'שבת', icon: 'Sun' },
  { label: 'זמני בית הכנסת', time: '--:--', icon: 'Sun' },
];

export const MOCK_LESSONS: TorahLesson[] = [
  { id: '1', time: '21:00', title: 'הדף היומי', speaker: 'הרב לוי', frequency: 'כל יום' },
  { id: '2', time: '08:30', title: 'הלכה ומוסר', speaker: 'רב הקהילה', frequency: 'יום ו\'' },
];

export const SCREEN_ICONS = {
  [ScreenType.WEDDING]: <Heart className="w-6 h-6" />,
  [ScreenType.BOY]: <Baby className="w-6 h-6" />,
  [ScreenType.GIRL]: <Flower2 className="w-6 h-6" />,
  [ScreenType.DEDICATION]: <Users className="w-6 h-6" />,
  [ScreenType.IMAGE]: <ImageIcon className="w-6 h-6" />,
};

export const SCREEN_LABELS = {
  [ScreenType.WEDDING]: 'חתונה',
  [ScreenType.BOY]: 'בן',
  [ScreenType.GIRL]: 'בת',
  [ScreenType.DEDICATION]: 'הקדשה',
  [ScreenType.IMAGE]: 'תמונה',
};
