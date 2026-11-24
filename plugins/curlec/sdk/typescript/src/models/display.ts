import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { preferencesSchema, type Preferences } from "./preferences.js";

export type Display = {
  /** Custom payment method groupings with names and instruments. */
  blocks?: Record<string, unknown>;
  /** Display order of payment method blocks. */
  sequence?: string[];
  preferences?: Preferences;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const displaySchema: Schema<Display> = s.object<Display>(
  {
    blocks: s.optional(s.record(s.string(), s.unknown())),
    sequence: s.optional(s.array(s.string())),
    preferences: s.optional(s.lazy(() => preferencesSchema)),
  },
  { additionalProperties: s.json() },
);
