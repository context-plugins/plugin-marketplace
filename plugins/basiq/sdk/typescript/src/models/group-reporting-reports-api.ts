import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analysisSchema, type Analysis } from "./analysis.js";
import { subgroupSchema, type Subgroup } from "./subgroup.js";

export type GroupReportingReportsApi = {
  /** Identifier for the group */
  id?: string;
  /** Title of the group */
  title?: string;
  sections?: string[];
  analysis?: Analysis;
  subgroup?: Subgroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupReportingReportsApiSchema: Schema<GroupReportingReportsApi> =
  s.object<GroupReportingReportsApi>(
    {
      id: s.optional(s.string()),
      title: s.optional(s.string()),
      sections: s.optional(s.array(s.string())),
      analysis: s.optional(s.lazy(() => analysisSchema)),
      subgroup: s.optional(s.array(s.lazy(() => subgroupSchema))),
    },
    { additionalProperties: s.json() },
  );
