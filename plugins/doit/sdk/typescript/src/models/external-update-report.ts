import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  externalConfigInternalSchema,
  externalConfigSchema,
  type ExternalConfig,
} from "./external-config.js";

/** Partial report object used for updates. */
export type ExternalUpdateReport = {
  /** Report configuration. */
  config?: ExternalConfig;
  /** Report description */
  description?: string;
  /** Report name */
  name?: string;
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

const externalUpdateReportProperties: s.Shape<ExternalUpdateReport> = {
  config: s.optional(s.lazy(() => externalConfigInternalSchema)),
  description: s.optional(s.string()),
  name: s.optional(s.string()),
  labels: s.optional(s.array(s.string())),
  folderId: s.defaulted(s.string(), "root"),
};

export const externalUpdateReportInternalSchema: Schema<ExternalUpdateReport> =
  s.object<ExternalUpdateReport>(externalUpdateReportProperties, { additionalProperties: s.json() });

export const externalUpdateReportSchema: Schema<ExternalUpdateReport> = s.lazySchema(() =>
  s.object<ExternalUpdateReport>(
    {
      ...externalUpdateReportProperties,
      config: s.optional(s.lazy(() => externalConfigSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
