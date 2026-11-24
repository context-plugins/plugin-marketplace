import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceCatalog1Schema, type SourceCatalog1 } from "./source-catalog1.js";
import { sourceCatalog5Schema, type SourceCatalog5 } from "./source-catalog5.js";

/** Configuration for syncing data from a Salesforce Marketing Cloud source. */
export type SalesforceMarketingCloudSourceConfig = {
  /** Optional. The objects to exclude from the stream. */
  excludeObjects?: SourceCatalog1;
  /**
   * Required. Specifies the polling interval for a full refresh of objects that do not support
   * incremental sync. If not set, a default value of 24 hours is used. The duration must be between
   * 1 and 24 hours, inclusive.
   */
  fullRefreshPollingInterval?: string;
  /**
   * Required. Incremental sync polling interval for all objects. If not set, a default value of `5
   * minutes` is used. The duration must be from `5 minutes` to `24 hours`, inclusive.
   */
  pollingInterval?: string;
  /** Optional. The objects to retrieve from the source. */
  includeObjects?: SourceCatalog5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesforceMarketingCloudSourceConfigSchema: Schema<SalesforceMarketingCloudSourceConfig> =
  s.object<SalesforceMarketingCloudSourceConfig>(
    {
      excludeObjects: s.optional(s.lazy(() => sourceCatalog1Schema)),
      fullRefreshPollingInterval: s.optional(s.string()),
      pollingInterval: s.optional(s.string()),
      includeObjects: s.optional(s.lazy(() => sourceCatalog5Schema)),
    },
    { additionalProperties: s.json() },
  );
