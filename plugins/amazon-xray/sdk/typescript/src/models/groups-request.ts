import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GroupsRequest = {
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupsRequestSchema: Schema<GroupsRequest> = s.object<GroupsRequest>(
  {
    nextToken: s.optional(s.string()),
    _keysMap: {
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
