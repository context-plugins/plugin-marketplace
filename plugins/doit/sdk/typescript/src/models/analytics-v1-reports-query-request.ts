import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  externalConfigInternalSchema,
  externalConfigSchema,
  type ExternalConfig,
} from "./external-config.js";

export type AnalyticsV1ReportsQueryRequest = {
  /** Report configuration. */
  config?: ExternalConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const analyticsV1ReportsQueryRequestProperties: s.Shape<AnalyticsV1ReportsQueryRequest> = {
  config: s.optional(s.lazy(() => externalConfigInternalSchema)),
};

export const analyticsV1ReportsQueryRequestInternalSchema: Schema<AnalyticsV1ReportsQueryRequest> =
  s.object<AnalyticsV1ReportsQueryRequest>(analyticsV1ReportsQueryRequestProperties, {
    additionalProperties: s.json(),
  });

export const analyticsV1ReportsQueryRequestSchema: Schema<AnalyticsV1ReportsQueryRequest> = s.lazySchema(() =>
  s.object<AnalyticsV1ReportsQueryRequest>(
    {
      ...analyticsV1ReportsQueryRequestProperties,
      config: s.optional(s.lazy(() => externalConfigSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
