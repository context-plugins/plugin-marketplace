import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  releasedStalenessSettingsSchema,
  type ReleasedStalenessSettings,
} from "./released-staleness-settings.js";
import { stalenessEmailSettingsSchema, type StalenessEmailSettings } from "./staleness-email-settings.js";
import {
  unmodifiedLongStalenessSettingsSchema,
  type UnmodifiedLongStalenessSettings,
} from "./unmodified-long-staleness-settings.js";
import {
  unmodifiedShortStalenessSettingsSchema,
  type UnmodifiedShortStalenessSettings,
} from "./unmodified-short-staleness-settings.js";
import { unusedStalenessSettingsSchema, type UnusedStalenessSettings } from "./unused-staleness-settings.js";

export type StalenessSettings = {
  enabled: boolean;
  released: ReleasedStalenessSettings;
  unmodifiedLong: UnmodifiedLongStalenessSettings;
  unmodifiedShort: UnmodifiedShortStalenessSettings;
  unused: UnusedStalenessSettings;
  email: StalenessEmailSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stalenessSettingsSchema: Schema<StalenessSettings> = s.object<StalenessSettings>(
  {
    enabled: s.boolean(),
    released: releasedStalenessSettingsSchema,
    unmodifiedLong: unmodifiedLongStalenessSettingsSchema,
    unmodifiedShort: unmodifiedShortStalenessSettingsSchema,
    unused: unusedStalenessSettingsSchema,
    email: stalenessEmailSettingsSchema,
  },
  { additionalProperties: s.json() },
);
