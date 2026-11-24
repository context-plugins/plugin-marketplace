import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  externalConfigInternalSchema,
  externalConfigSchema,
  type ExternalConfig,
} from "./external-config.js";

export type AnalyticsV1ReportsActionsRunRequest = {
  /** Report configuration. */
  config?: ExternalConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const analyticsV1ReportsActionsRunRequestProperties: s.Shape<AnalyticsV1ReportsActionsRunRequest> = {
  config: s.optional(s.lazy(() => externalConfigInternalSchema)),
};

export const analyticsV1ReportsActionsRunRequestInternalSchema: Schema<AnalyticsV1ReportsActionsRunRequest> =
  s.object<AnalyticsV1ReportsActionsRunRequest>(analyticsV1ReportsActionsRunRequestProperties, {
    additionalProperties: s.json(),
  });

export const analyticsV1ReportsActionsRunRequestSchema: Schema<AnalyticsV1ReportsActionsRunRequest> =
  s.lazySchema(() =>
    s.object<AnalyticsV1ReportsActionsRunRequest>(
      {
        ...analyticsV1ReportsActionsRunRequestProperties,
        config: s.optional(s.lazy(() => externalConfigSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
