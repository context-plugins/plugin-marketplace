import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldBillV3VendorsApiSchema, type FieldBillV3VendorsApi } from "./field-bill-v3-vendors-api.js";

/** Vendor configuration validation information. */
export type Validations = {
  fields?: FieldBillV3VendorsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationsSchema: Schema<Validations> = s.object<Validations>(
  {
    fields: s.optional(s.array(s.lazy(() => fieldBillV3VendorsApiSchema))),
  },
  { additionalProperties: s.json() },
);
