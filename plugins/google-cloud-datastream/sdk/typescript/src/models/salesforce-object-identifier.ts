import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Salesforce data source object identifier. */
export type SalesforceObjectIdentifier = {
  /** Required. The object name. */
  objectName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceObjectIdentifierSchema: Schema<SalesforceObjectIdentifier> =
  s.object<SalesforceObjectIdentifier>(
    {
      objectName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
