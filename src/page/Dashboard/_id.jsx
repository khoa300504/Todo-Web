import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';

export default function DateCalendarValue() {
  const currentdate = new Date(); 
  const date = `${currentdate.getFullYear()}-${currentdate.getMonth()}-${currentdate.getDate()}`

  const [value, setValue] = useState(dayjs(date));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
