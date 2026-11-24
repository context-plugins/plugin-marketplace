import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesforceObjectSchema, type SalesforceObject } from "./salesforce-object.js";

/** Salesforce data source objects to avoid backfilling */
export type SalesforceOrg1 = {
  /** Salesforce objects in the database server. */
  objects?: SalesforceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceOrg1Schema: Schema<SalesforceOrg1> = s.object<SalesforceOrg1>(
  {
    objects: s.optional(s.array(s.lazy(() => salesforceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
