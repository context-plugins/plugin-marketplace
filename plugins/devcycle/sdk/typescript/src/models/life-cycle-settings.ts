import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LifeCycleSettings = {
  disableCodeRefChecks: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lifeCycleSettingsSchema: Schema<LifeCycleSettings> = s.object<LifeCycleSettings>(
  {
    disableCodeRefChecks: s.boolean(),
  },
  { additionalProperties: s.json() },
);
