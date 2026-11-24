import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Salesforce field. */
export type SalesforceField = {
  /** The data type. */
  dataType?: string;
  /** The field name. */
  name?: string;
  /** Indicates whether the field can accept nil values. */
  nillable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceFieldSchema: Schema<SalesforceField> = s.object<SalesforceField>(
  {
    dataType: s.optional(s.string()),
    name: s.optional(s.string()),
    nillable: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
