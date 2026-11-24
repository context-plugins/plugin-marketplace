import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resiliencyGroupSummarySchema, type ResiliencyGroupSummary } from "./resiliency-group-summary.js";

export type ListResiliencyGroupsResult = {
  /** Summary information about the resiliency groups. */
  items?: ResiliencyGroupSummary[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResiliencyGroupsResultSchema: Schema<ListResiliencyGroupsResult> =
  s.object<ListResiliencyGroupsResult>(
    {
      items: s.optional(s.array(s.lazy(() => resiliencyGroupSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
