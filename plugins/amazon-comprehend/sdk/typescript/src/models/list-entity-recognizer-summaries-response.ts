import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityRecognizerSummarySchema, type EntityRecognizerSummary } from "./entity-recognizer-summary.js";

export type ListEntityRecognizerSummariesResponse = {
  /** The list entity recognizer summaries. */
  entityRecognizerSummariesList?: EntityRecognizerSummary[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEntityRecognizerSummariesResponseSchema: Schema<ListEntityRecognizerSummariesResponse> =
  s.object<ListEntityRecognizerSummariesResponse>(
    {
      entityRecognizerSummariesList: s.optional(s.array(s.lazy(() => entityRecognizerSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        entityRecognizerSummariesList: "EntityRecognizerSummariesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
