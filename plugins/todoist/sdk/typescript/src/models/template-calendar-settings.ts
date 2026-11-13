import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { calendarColorSchema, type CalendarColor } from "./calendar-color.js";
import { CalendarLayout, calendarLayoutSchema } from "./calendar-layout.js";
import { visibleDayCountSchema, type VisibleDayCount } from "./visible-day-count.js";

/** Calendar settings representable by a persisted project template. */
export type TemplateCalendarSettings = {
  /** @default CalendarLayout.Week */
  layout?: CalendarLayout;
  /** Number of consecutive days shown in the week calendar layout. */
  visibleDayCount?: VisibleDayCount | null;
  /** Attribute used to color tasks in calendar layouts. Defaults to priority when omitted. */
  color?: CalendarColor | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templateCalendarSettingsSchema: Schema<TemplateCalendarSettings> =
  s.object<TemplateCalendarSettings>(
    {
      layout: s.defaulted(calendarLayoutSchema, CalendarLayout.Week),
      visibleDayCount: s.optionalNullable(s.lazy(() => visibleDayCountSchema)),
      color: s.optionalNullable(s.lazy(() => calendarColorSchema)),
      _keysMap: {
        visibleDayCount: "visible_day_count",
      },
    },
    { additionalProperties: s.json() },
  );
