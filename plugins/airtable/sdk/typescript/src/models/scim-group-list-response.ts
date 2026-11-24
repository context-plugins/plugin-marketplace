import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scimGroupSchema, type ScimGroup } from "./scim-group.js";

/** A SCIM 2.0 ListResponse containing group resources. */
export type ScimGroupListResponse = {
  schemas: string[];
  /** The total number of results matching the query. */
  totalResults: number;
  /** The number of results returned in this page. */
  itemsPerPage?: number;
  /** The 1-based index of the first result in this page. */
  startIndex?: number;
  /** The list of SCIM group resources. */
  resources: ScimGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimGroupListResponseSchema: Schema<ScimGroupListResponse> = s.object<ScimGroupListResponse>(
  {
    schemas: s.array(s.string()),
    totalResults: s.int(),
    itemsPerPage: s.optional(s.int()),
    startIndex: s.optional(s.int()),
    resources: s.array(s.lazy(() => scimGroupSchema)),
    _keysMap: {
      resources: "Resources",
    },
  },
  { additionalProperties: s.json() },
);
