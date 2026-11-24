import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for fetching git refs */
export type FetchGitRefsResponse = {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Name of the refs fetched. */
  refNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fetchGitRefsResponseSchema: Schema<FetchGitRefsResponse> = s.object<FetchGitRefsResponse>(
  {
    nextPageToken: s.optional(s.string()),
    refNames: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
