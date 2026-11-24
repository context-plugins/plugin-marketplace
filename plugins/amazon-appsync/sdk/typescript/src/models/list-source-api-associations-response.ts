import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceApiAssociationSummarySchema,
  type SourceApiAssociationSummary,
} from "./source-api-association-summary.js";

export type ListSourceApiAssociationsResponse = {
  /** The SourceApiAssociationSummary object data. */
  sourceApiAssociationSummaries?: SourceApiAssociationSummary[];
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to
   * return the next set of items in the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSourceApiAssociationsResponseSchema: Schema<ListSourceApiAssociationsResponse> =
  s.object<ListSourceApiAssociationsResponse>(
    {
      sourceApiAssociationSummaries: s.optional(s.array(s.lazy(() => sourceApiAssociationSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
