import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditInfo = {
  /** SKU of the API endpoint */
  sku?: string;
  /** API endpoint */
  endpoint?: string;
  /** Credit usage per successful API endpoint call */
  credits?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditInfoSchema: Schema<CreditInfo> = s.object<CreditInfo>(
  {
    sku: s.optional(s.string()),
    endpoint: s.optional(s.string()),
    credits: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
