import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { explainabilitySummarySchema, type ExplainabilitySummary } from "./explainability-summary.js";

export type ListExplainabilitiesResponse = {
  /** An array of objects that summarize the properties of each Explainability resource. */
  explainabilities?: ExplainabilitySummary[];
  /**
   * Returns this token if the response is truncated. To retrieve the next set of results, use the
   * token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listExplainabilitiesResponseSchema: Schema<ListExplainabilitiesResponse> =
  s.object<ListExplainabilitiesResponse>(
    {
      explainabilities: s.optional(s.array(s.lazy(() => explainabilitySummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        explainabilities: "Explainabilities",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
