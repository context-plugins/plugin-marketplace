import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Current weather — present for geographic entities (cities, regions) */
export type Weather = {
  /** Temperature as displayed */
  temperature?: string;
  /** Weather condition */
  condition?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const weatherSchema: Schema<Weather> = s.object<Weather>(
  {
    temperature: s.optional(s.string()),
    condition: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
