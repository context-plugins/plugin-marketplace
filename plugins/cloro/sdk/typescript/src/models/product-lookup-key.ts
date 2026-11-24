import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Key used to look up product updates */
export type ProductLookupKey = {
  /** JSON-encoded product lookup data */
  data?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productLookupKeySchema: Schema<ProductLookupKey> = s.object<ProductLookupKey>(
  {
    data: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
