import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Properties of a validation field. */
export type FieldBillV3VendorsApi = {
  /** Regulatory field name */
  name?: string;
  /** Regulatory field value description */
  description?: string;
  /** Regular expression that BILL uses to validate the regulatory field */
  regularExpression?: string;
  /** Set as `true` if the regulatory field is required */
  required?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldBillV3VendorsApiSchema: Schema<FieldBillV3VendorsApi> = s.object<FieldBillV3VendorsApi>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    regularExpression: s.optional(s.string()),
    required: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
