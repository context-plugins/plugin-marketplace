import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportExportConfigSchema, type ReportExportConfig } from "./report-export-config.js";
import { tagSchema, type Tag } from "./tag.js";
import { type11Schema, type Type11 } from "./type11.js";

export type CreateReportGroupInput = {
  /** The name of the report group. */
  name: string;
  /** The type of report group. */
  type: Type11;
  exportConfig: ReportExportConfig;
  /**
   * A list of tag key and value pairs associated with this report group. These tags are available
   * for use by Amazon Web Services services that support CodeBuild report group tags.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createReportGroupInputSchema: Schema<CreateReportGroupInput> = s.object<CreateReportGroupInput>(
  {
    name: s.string(),
    type: type11Schema,
    exportConfig: reportExportConfigSchema,
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
