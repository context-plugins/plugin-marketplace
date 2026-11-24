import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  externalConfigInternalSchema,
  externalConfigSchema,
  type ExternalConfig,
} from "./external-config.js";

export type AnalyticsV1ReportsRequest = {
  /** Report name. */
  name?: string;
  /** Report description. */
  description?: string;
  /** Report configuration. */
  config?: ExternalConfig;
  /** Array of label IDs assigned to the report */
  labels?: string[];
  /**
   * Identifier of the folder that contains the report. Set to "root" if the report is at the top
   * level (not in a folder).
   *
   * @default "root"
   */
  folderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const analyticsV1ReportsRequestProperties: s.Shape<AnalyticsV1ReportsRequest> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  config: s.optional(s.lazy(() => externalConfigInternalSchema)),
  labels: s.optional(s.array(s.string())),
  folderId: s.defaulted(s.string(), "root"),
};

export const analyticsV1ReportsRequestInternalSchema: Schema<AnalyticsV1ReportsRequest> =
  s.object<AnalyticsV1ReportsRequest>(analyticsV1ReportsRequestProperties, {
    additionalProperties: s.json(),
  });

export const analyticsV1ReportsRequestSchema: Schema<AnalyticsV1ReportsRequest> = s.lazySchema(() =>
  s.object<AnalyticsV1ReportsRequest>(
    {
      ...analyticsV1ReportsRequestProperties,
      config: s.optional(s.lazy(() => externalConfigSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
