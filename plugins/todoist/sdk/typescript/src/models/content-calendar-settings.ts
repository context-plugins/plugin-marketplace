import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { calendarColorSchema, type CalendarColor } from "./calendar-color.js";
import { CalendarLayout, calendarLayoutSchema } from "./calendar-layout.js";
import { visibleDayCountSchema, type VisibleDayCount } from "./visible-day-count.js";

/** Calendar settings supplied as part of a template content graph. */
export type ContentCalendarSettings = {
  /**
   * Calendar layout. This existing field uses uppercase WEEK or MONTH wire values.
   *
   * @default CalendarLayout.Week
   */
  layout?: CalendarLayout;
  /** Number of consecutive days shown in the week calendar layout. */
  visibleDayCount?: VisibleDayCount | null;
  /** Attribute used to color tasks in calendar layouts. Defaults to priority when omitted. */
  color?: CalendarColor | null;
};

export const contentCalendarSettingsSchema: Schema<ContentCalendarSettings> =
  s.object<ContentCalendarSettings>({
    layout: s.defaulted(calendarLayoutSchema, CalendarLayout.Week),
    visibleDayCount: s.optionalNullable(s.lazy(() => visibleDayCountSchema)),
    color: s.optionalNullable(s.lazy(() => calendarColorSchema)),
    _keysMap: {
      visibleDayCount: "visible_day_count",
    },
  });
