import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanySic = {
  sicCodes?: number;
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySicSchema: Schema<CompanySic> = s.object<CompanySic>(
  {
    sicCodes: s.optional(s.float64()),
    description: s.string(),
  },
  { additionalProperties: s.json() },
);
