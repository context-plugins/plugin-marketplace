import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSettingsSchema, type ProjectSettings } from "./project-settings.js";

export type UpdateProjectSettingsDto = {
  settings: ProjectSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateProjectSettingsDtoSchema: Schema<UpdateProjectSettingsDto> =
  s.object<UpdateProjectSettingsDto>(
    {
      settings: projectSettingsSchema,
    },
    { additionalProperties: s.json() },
  );
