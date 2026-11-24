import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type IntentCompanyInput = {
  /** Name of the company (required) */
  name: string;
  website?: string;
  phone?: string;
  address?: Address;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentCompanyInputSchema: Schema<IntentCompanyInput> = s.object<IntentCompanyInput>(
  {
    name: s.string(),
    website: s.optional(s.string()),
    phone: s.optional(s.string()),
    address: s.optional(s.lazy(() => addressSchema)),
  },
  { additionalProperties: s.json() },
);
