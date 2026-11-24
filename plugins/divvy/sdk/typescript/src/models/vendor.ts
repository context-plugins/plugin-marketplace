import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Vendor information. */
export type Vendor = {
  id?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vendorSchema: Schema<Vendor> = s.object<Vendor>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
