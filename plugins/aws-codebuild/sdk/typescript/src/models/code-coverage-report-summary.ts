import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CodeCoverageReportSummary = {
  /** The percentage of lines that are covered by your tests. */
  lineCoveragePercentage?: number;
  /** The number of lines that are covered by your tests. */
  linesCovered?: number;
  /** The number of lines that are not covered by your tests. */
  linesMissed?: number;
  /** The percentage of branches that are covered by your tests. */
  branchCoveragePercentage?: number;
  /** The number of conditional branches that are covered by your tests. */
  branchesCovered?: number;
  /** The number of conditional branches that are not covered by your tests. */
  branchesMissed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeCoverageReportSummarySchema: Schema<CodeCoverageReportSummary> =
  s.object<CodeCoverageReportSummary>(
    {
      lineCoveragePercentage: s.optional(s.float64()),
      linesCovered: s.optional(s.int()),
      linesMissed: s.optional(s.int()),
      branchCoveragePercentage: s.optional(s.float64()),
      branchesCovered: s.optional(s.int()),
      branchesMissed: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
