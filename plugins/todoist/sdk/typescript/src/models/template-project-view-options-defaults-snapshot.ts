import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  templateCalendarSettingsSchema,
  type TemplateCalendarSettings,
} from "./template-calendar-settings.js";

/** Project-view defaults stored with a project template, without a project id. */
export type TemplateProjectViewOptionsDefaultsSnapshot = {
  /** Calendar settings representable by a persisted project template. */
  calendarSettings: TemplateCalendarSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templateProjectViewOptionsDefaultsSnapshotSchema: Schema<TemplateProjectViewOptionsDefaultsSnapshot> =
  s.object<TemplateProjectViewOptionsDefaultsSnapshot>(
    {
      calendarSettings: templateCalendarSettingsSchema,
      _keysMap: {
        calendarSettings: "calendar_settings",
      },
    },
    { additionalProperties: s.json() },
  );
