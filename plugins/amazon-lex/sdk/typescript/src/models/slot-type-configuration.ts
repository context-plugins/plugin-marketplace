import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  slotTypeRegexConfigurationSchema,
  type SlotTypeRegexConfiguration,
} from "./slot-type-regex-configuration.js";

export type SlotTypeConfiguration = {
  regexConfiguration?: SlotTypeRegexConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotTypeConfigurationSchema: Schema<SlotTypeConfiguration> = s.object<SlotTypeConfiguration>(
  {
    regexConfiguration: s.optional(s.lazy(() => slotTypeRegexConfigurationSchema)),
  },
  { additionalProperties: s.json() },
);
