import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { calendarSettingsSchema, type CalendarSettings } from "./calendar-settings.js";
import { viewModeSchema, type ViewMode } from "./view-mode.js";

/** Calendar-related subset of the defaults persisted for an imported project. */
export type ImportedProjectViewOptionsDefault = {
  /** ID of the project whose defaults were applied. */
  projectId: string;
  /** Default view mode applied to the project. */
  viewMode: ViewMode;
  /** Calendar settings applied to the project, or null when absent. */
  calendarSettings: CalendarSettings | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importedProjectViewOptionsDefaultSchema: Schema<ImportedProjectViewOptionsDefault> =
  s.object<ImportedProjectViewOptionsDefault>(
    {
      projectId: s.string(),
      viewMode: viewModeSchema,
      calendarSettings: s.nullable(s.lazy(() => calendarSettingsSchema)),
      _keysMap: {
        projectId: "project_id",
        viewMode: "view_mode",
        calendarSettings: "calendar_settings",
      },
    },
    { additionalProperties: s.json() },
  );
