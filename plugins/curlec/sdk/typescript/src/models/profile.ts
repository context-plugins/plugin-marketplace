import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressesSchema, type Addresses } from "./addresses.js";

export type Profile = {
  /** Business category (e.g., healthcare, education, ecommerce). */
  category?: string;
  /** Business subcategory. */
  subcategory?: string;
  addresses?: Addresses;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileSchema: Schema<Profile> = s.object<Profile>(
  {
    category: s.optional(s.string()),
    subcategory: s.optional(s.string()),
    addresses: s.optional(s.lazy(() => addressesSchema)),
  },
  { additionalProperties: s.json() },
);
