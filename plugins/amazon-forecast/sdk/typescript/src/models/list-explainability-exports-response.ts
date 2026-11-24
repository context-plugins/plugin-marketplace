import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  explainabilityExportSummarySchema,
  type ExplainabilityExportSummary,
} from "./explainability-export-summary.js";

export type ListExplainabilityExportsResponse = {
  /** An array of objects that summarize the properties of each Explainability export. */
  explainabilityExports?: ExplainabilityExportSummary[];
  /**
   * Returns this token if the response is truncated. To retrieve the next set of results, use the
   * token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listExplainabilityExportsResponseSchema: Schema<ListExplainabilityExportsResponse> =
  s.object<ListExplainabilityExportsResponse>(
    {
      explainabilityExports: s.optional(s.array(s.lazy(() => explainabilityExportSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        explainabilityExports: "ExplainabilityExports",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
