enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean =>
  day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;

export {};
