import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportExportConfigSchema, type ReportExportConfig } from "./report-export-config.js";
import { tagSchema, type Tag } from "./tag.js";

export type UpdateReportGroupInput = {
  /** The ARN of the report group to update. */
  arn: string;
  exportConfig?: ReportExportConfig;
  /**
   * An updated list of tag key and value pairs associated with this report group. These tags are
   * available for use by Amazon Web Services services that support CodeBuild report group tags.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateReportGroupInputSchema: Schema<UpdateReportGroupInput> = s.object<UpdateReportGroupInput>(
  {
    arn: s.string(),
    exportConfig: s.optional(s.lazy(() => reportExportConfigSchema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
