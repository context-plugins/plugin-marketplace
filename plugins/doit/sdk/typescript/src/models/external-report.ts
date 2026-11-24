import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  externalConfigInternalSchema,
  externalConfigSchema,
  type ExternalConfig,
} from "./external-config.js";
import { type1DoiTReportsApiSchema, type Type1DoiTReportsApi } from "./type1-doi-treports-api.js";

/** Configuration and metadata of a stored report. */
export type ExternalReport = {
  /** Report ID. */
  id?: string;
  /** Report name. */
  name: string;
  /** Report description. */
  description?: string;
  /** Report type. */
  type?: Type1DoiTReportsApi;
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

const externalReportProperties: s.Shape<ExternalReport> = {
  id: s.optional(s.string()),
  name: s.string(),
  description: s.optional(s.string()),
  type: s.optional(s.lazy(() => type1DoiTReportsApiSchema)),
  config: s.optional(s.lazy(() => externalConfigInternalSchema)),
  labels: s.optional(s.array(s.string())),
  folderId: s.defaulted(s.string(), "root"),
};

export const externalReportInternalSchema: Schema<ExternalReport> = s.object<ExternalReport>(
  externalReportProperties,
  { additionalProperties: s.json() },
);

export const externalReportSchema: Schema<ExternalReport> = s.lazySchema(() =>
  s.object<ExternalReport>(
    {
      ...externalReportProperties,
      config: s.optional(s.lazy(() => externalConfigSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
