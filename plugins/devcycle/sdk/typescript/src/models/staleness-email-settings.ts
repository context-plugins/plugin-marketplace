import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { frequencySchema, type Frequency } from "./frequency.js";

export type StalenessEmailSettings = {
  enabled: boolean;
  frequency: Frequency;
  users: string[];
  lastNotification: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stalenessEmailSettingsSchema: Schema<StalenessEmailSettings> = s.object<StalenessEmailSettings>(
  {
    enabled: s.boolean(),
    frequency: frequencySchema,
    users: s.array(s.string()),
    lastNotification: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
