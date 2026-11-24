import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesforceObjectSchema, type SalesforceObject } from "./salesforce-object.js";

/** The Salesforce objects to retrieve from the source. */
export type SalesforceOrg4 = {
  /** Salesforce objects in the database server. */
  objects?: SalesforceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceOrg4Schema: Schema<SalesforceOrg4> = s.object<SalesforceOrg4>(
  {
    objects: s.optional(s.array(s.lazy(() => salesforceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
