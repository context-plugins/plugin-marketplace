import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LifeCycleSettingsDto = {
  disableCodeRefChecks: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lifeCycleSettingsDtoSchema: Schema<LifeCycleSettingsDto> = s.object<LifeCycleSettingsDto>(
  {
    disableCodeRefChecks: s.boolean(),
  },
  { additionalProperties: s.json() },
);
