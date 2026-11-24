import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CodeCoverage = {
  /** The identifier of the code coverage report. */
  id?: string;
  /** The ARN of the report. */
  reportArn?: string;
  /** The path of the test report file. */
  filePath?: string;
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
  /** The date and time that the tests were run. */
  expired?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeCoverageSchema: Schema<CodeCoverage> = s.object<CodeCoverage>(
  {
    id: s.optional(s.string()),
    reportArn: s.optional(s.string()),
    filePath: s.optional(s.string()),
    lineCoveragePercentage: s.optional(s.float64()),
    linesCovered: s.optional(s.int()),
    linesMissed: s.optional(s.int()),
    branchCoveragePercentage: s.optional(s.float64()),
    branchesCovered: s.optional(s.int()),
    branchesMissed: s.optional(s.int()),
    expired: s.optional(s.dateTime()),
    _keysMap: {
      reportArn: "reportARN",
    },
  },
  { additionalProperties: s.json() },
);
