import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesforceFieldSchema, type SalesforceField } from "./salesforce-field.js";

/** Salesforce object. */
export type SalesforceObject = {
  /**
   * Salesforce fields. When unspecified as part of include objects, includes everything, when
   * unspecified as part of exclude objects, excludes nothing.
   */
  fields?: SalesforceField[];
  /** The object name. */
  objectName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceObjectSchema: Schema<SalesforceObject> = s.object<SalesforceObject>(
  {
    fields: s.optional(s.array(s.lazy(() => salesforceFieldSchema))),
    objectName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
