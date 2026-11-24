import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { frequencySchema, type Frequency } from "./frequency.js";

export type EmailSettingsDto = {
  enabled: boolean;
  users: string[];
  frequency: Frequency;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailSettingsDtoSchema: Schema<EmailSettingsDto> = s.object<EmailSettingsDto>(
  {
    enabled: s.boolean(),
    users: s.array(s.string()),
    frequency: frequencySchema,
  },
  { additionalProperties: s.json() },
);
