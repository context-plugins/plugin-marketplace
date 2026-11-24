import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { builtInSlotTypeSummarySchema, type BuiltInSlotTypeSummary } from "./built-in-slot-type-summary.js";

export type ListBuiltInSlotTypesResponse = {
  /**
   * Summary information for the built-in slot types that meet the filter criteria specified in the
   * request. The length of the list is specified in the maxResults parameter of the request. If
   * there are more slot types available, the nextToken field contains a token to get the next page
   * of results.
   */
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListBuiltInSlotTypes operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a LIstBuiltInSlotTypes operation request to get the next page of
   * results.
   */
  nextToken?: string;
  /** The language and locale of the slot types in the list. */
  localeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBuiltInSlotTypesResponseSchema: Schema<ListBuiltInSlotTypesResponse> =
  s.object<ListBuiltInSlotTypesResponse>(
    {
      builtInSlotTypeSummaries: s.optional(s.array(s.lazy(() => builtInSlotTypeSummarySchema))),
      nextToken: s.optional(s.string()),
      localeId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
