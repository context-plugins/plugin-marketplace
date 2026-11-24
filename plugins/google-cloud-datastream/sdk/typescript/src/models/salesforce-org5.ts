import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesforceObjectSchema, type SalesforceObject } from "./salesforce-object.js";

/** Optional. Salesforce organization to enrich with child data objects and metadata. */
export type SalesforceOrg5 = {
  /** Salesforce objects in the database server. */
  objects?: SalesforceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceOrg5Schema: Schema<SalesforceOrg5> = s.object<SalesforceOrg5>(
  {
    objects: s.optional(s.array(s.lazy(() => salesforceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
