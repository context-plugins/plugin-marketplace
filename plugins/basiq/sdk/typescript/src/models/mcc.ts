import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Merchant category codes returned from Data holders. */
export type Mcc = {
  /** code */
  code?: string;
  /** title */
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mccSchema: Schema<Mcc> = s.object<Mcc>(
  {
    code: s.optional(s.string()),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
