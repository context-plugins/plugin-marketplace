import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListBuildsOutput = {
  /** A list of build IDs, with each build ID representing a single build. */
  ids?: string[];
  /**
   * If there are more than 100 items in the list, only the first 100 items are returned, along with
   * a unique string called a nextToken. To get the next batch of items in the list, call this
   * operation again, adding the next token to the call.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBuildsOutputSchema: Schema<ListBuildsOutput> = s.object<ListBuildsOutput>(
  {
    ids: s.optional(s.array(s.string())),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
