import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Ses = {
  /** Effective quality when requesting SES with any legislation. */
  any?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sesSchema: Schema<Ses> = s.object<Ses>(
  {
    any: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
