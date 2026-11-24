import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Product identifier information */
export type Product1 = {
  /** Unique product ID */
  id?: string;
  /** Product group ID */
  groupId?: string;
  /** Brand group ID (optional) */
  brandGroupId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const product1Schema: Schema<Product1> = s.object<Product1>(
  {
    id: s.optional(s.string()),
    groupId: s.optional(s.string()),
    brandGroupId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
