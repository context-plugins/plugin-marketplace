import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportExportConfigSchema, type ReportExportConfig } from "./report-export-config.js";
import { status3Schema, type Status3 } from "./status3.js";
import { tagSchema, type Tag } from "./tag.js";
import { type9Schema, type Type9 } from "./type9.js";

export type ReportGroup = {
  /** The ARN of the ReportGroup. */
  arn?: string;
  /** The name of the ReportGroup. */
  name?: string;
  /**
   * The type of the ReportGroup. This can be one of the following values: CODE_COVERAGE The report
   * group contains code coverage reports. TEST The report group contains test reports.
   */
  type?: Type9;
  exportConfig?: ReportExportConfig;
  /** The date and time this ReportGroup was created. */
  created?: Date;
  /** The date and time this ReportGroup was last modified. */
  lastModified?: Date;
  /**
   * A list of tag key and value pairs associated with this report group. These tags are available
   * for use by Amazon Web Services services that support CodeBuild report group tags.
   */
  tags?: Tag[];
  /**
   * The status of the report group. This property is read-only. This can be one of the following
   * values: ACTIVE The report group is active. DELETING The report group is in the process of being
   * deleted.
   */
  status?: Status3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportGroupSchema: Schema<ReportGroup> = s.object<ReportGroup>(
  {
    arn: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => type9Schema)),
    exportConfig: s.optional(s.lazy(() => reportExportConfigSchema)),
    created: s.optional(s.dateTime()),
    lastModified: s.optional(s.dateTime()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    status: s.optional(s.lazy(() => status3Schema)),
  },
  { additionalProperties: s.json() },
);
