import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThingsToKnow = {
  /** Topic cluster label */
  label?: string;
  /** Subtitle or supporting text for the topic */
  subtitle?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const thingsToKnowSchema: Schema<ThingsToKnow> = s.object<ThingsToKnow>(
  {
    label: s.optional(s.string()),
    subtitle: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
