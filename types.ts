
export enum ScreenType {
  MAIN = 'MAIN',
  WEDDING = 'WEDDING',
  BOY = 'BOY',
  GIRL = 'GIRL',
  DEDICATION = 'DEDICATION',
  IMAGE = 'IMAGE'
}

export interface LoopItem {
  id: string;
  type: ScreenType;
  isActive: boolean;
  duration: number; // in seconds
  familyTitle?: string;
  names?: string;
  subText?: string;
  imageUrl?: string;
}

export interface Zman {
  label: string;
  time: string;
  subLabel?: string;
  icon?: string;
}

export interface TorahLesson {
  id: string;
  time: string;
  title: string;
  speaker: string;
  frequency: string;
}
