import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentCalendarSettingsSchema, type ContentCalendarSettings } from "./content-calendar-settings.js";

/** Calendar defaults implicitly associated with the template's sole project. */
export type ContentProjectViewOptionsDefaults = {
  /** Calendar defaults for the sole calendar project. No project ID is needed. */
  calendarSettings: ContentCalendarSettings;
};

export const contentProjectViewOptionsDefaultsSchema: Schema<ContentProjectViewOptionsDefaults> =
  s.object<ContentProjectViewOptionsDefaults>({
    calendarSettings: contentCalendarSettingsSchema,
    _keysMap: {
      calendarSettings: "calendar_settings",
    },
  });
