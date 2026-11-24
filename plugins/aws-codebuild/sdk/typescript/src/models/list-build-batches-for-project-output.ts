import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListBuildBatchesForProjectOutput = {
  /** An array of strings that contains the batch build identifiers. */
  ids?: string[];
  /**
   * If there are more items to return, this contains a token that is passed to a subsequent call to
   * ListBuildBatchesForProject to retrieve the next set of items.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBuildBatchesForProjectOutputSchema: Schema<ListBuildBatchesForProjectOutput> =
  s.object<ListBuildBatchesForProjectOutput>(
    {
      ids: s.optional(s.array(s.string())),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
