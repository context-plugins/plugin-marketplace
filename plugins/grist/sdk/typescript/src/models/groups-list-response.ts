import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupInResponseSchema, type GroupInResponse } from "./group-in-response.js";
import { schema1Schema, type Schema1 } from "./schema1.js";

export type GroupsListResponse = {
  schemas?: Schema1[];
  /** Total number of groups. */
  totalResults?: number;
  /** Number of groups returned per page. */
  itemsPerPage?: number;
  /** Starting index. */
  startIndex?: number;
  resources?: GroupInResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupsListResponseSchema: Schema<GroupsListResponse> = s.object<GroupsListResponse>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema1Schema))),
    totalResults: s.optional(s.int()),
    itemsPerPage: s.optional(s.int()),
    startIndex: s.optional(s.int()),
    resources: s.optional(s.array(s.lazy(() => groupInResponseSchema))),
    _keysMap: {
      resources: "Resources",
    },
  },
  { additionalProperties: s.json() },
);
