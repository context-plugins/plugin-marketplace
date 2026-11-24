import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeCoverageSchema, type CodeCoverage } from "./code-coverage.js";

export type DescribeCodeCoveragesOutput = {
  /**
   * If there are more items to return, this contains a token that is passed to a subsequent call to
   * DescribeCodeCoverages to retrieve the next set of items.
   */
  nextToken?: string;
  /** An array of CodeCoverage objects that contain the results. */
  codeCoverages?: CodeCoverage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCodeCoveragesOutputSchema: Schema<DescribeCodeCoveragesOutput> =
  s.object<DescribeCodeCoveragesOutput>(
    {
      nextToken: s.optional(s.string()),
      codeCoverages: s.optional(s.array(s.lazy(() => codeCoverageSchema))),
    },
    { additionalProperties: s.json() },
  );
