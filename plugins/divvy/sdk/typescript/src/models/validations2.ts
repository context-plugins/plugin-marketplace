import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldBillV3VendorsApiSchema, type FieldBillV3VendorsApi } from "./field-bill-v3-vendors-api.js";

export type Validations2 = {
  fields?: FieldBillV3VendorsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validations2Schema: Schema<Validations2> = s.object<Validations2>(
  {
    fields: s.optional(s.array(s.lazy(() => fieldBillV3VendorsApiSchema))),
  },
  { additionalProperties: s.json() },
);
