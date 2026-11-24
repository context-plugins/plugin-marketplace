import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salesforceOrg3Schema, type SalesforceOrg3 } from "./salesforce-org3.js";
import { salesforceOrg4Schema, type SalesforceOrg4 } from "./salesforce-org4.js";

/** Salesforce data source configuration. */
export type SalesforceSourceConfig1 = {
  /** The Salesforce objects to exclude from the stream. */
  excludeObjects?: SalesforceOrg3;
  /**
   * Required. Salesforce objects polling interval. The interval at which new changes will be polled
   * for each object. The duration must be from `5 minutes` to `24 hours`, inclusive.
   */
  pollingInterval?: string;
  /** The Salesforce objects to retrieve from the source. */
  includeObjects?: SalesforceOrg4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceSourceConfig1Schema: Schema<SalesforceSourceConfig1> =
  s.object<SalesforceSourceConfig1>(
    {
      excludeObjects: s.optional(s.lazy(() => salesforceOrg3Schema)),
      pollingInterval: s.optional(s.string()),
      includeObjects: s.optional(s.lazy(() => salesforceOrg4Schema)),
    },
    { additionalProperties: s.json() },
  );
