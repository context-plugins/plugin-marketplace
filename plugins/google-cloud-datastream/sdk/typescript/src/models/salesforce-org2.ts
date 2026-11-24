import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesforceObjectSchema, type SalesforceObject } from "./salesforce-object.js";

/** Enriched Salesforce organization. */
export type SalesforceOrg2 = {
  /** Salesforce objects in the database server. */
  objects?: SalesforceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceOrg2Schema: Schema<SalesforceOrg2> = s.object<SalesforceOrg2>(
  {
    objects: s.optional(s.array(s.lazy(() => salesforceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
