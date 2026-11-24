import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Aes = {
  /** Effective quality when requesting AES with any legislation. */
  any?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aesSchema: Schema<Aes> = s.object<Aes>(
  {
    any: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
