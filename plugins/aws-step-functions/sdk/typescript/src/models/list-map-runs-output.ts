import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mapRunListItemSchema, type MapRunListItem } from "./map-run-list-item.js";

export type ListMapRunsOutput = {
  /**
   * An array that lists information related to a Map Run, such as the Amazon Resource Name (ARN) of
   * the Map Run and the ARN of the state machine that started the Map Run.
   */
  mapRuns: MapRunListItem[];
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique
   * pagination token for each page. Make the call again using the returned token to retrieve the
   * next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * Using an expired pagination token will return an HTTP 400 InvalidToken error.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMapRunsOutputSchema: Schema<ListMapRunsOutput> = s.object<ListMapRunsOutput>(
  {
    mapRuns: s.array(s.lazy(() => mapRunListItemSchema)),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
