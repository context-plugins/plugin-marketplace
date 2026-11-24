import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required if type=vpa. */
export type Vpa = {
  /** Full UPI VPA address (e.g., user@upi). */
  address?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vpaSchema: Schema<Vpa> = s.object<Vpa>(
  {
    address: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
