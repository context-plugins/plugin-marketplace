import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scimUserInternalSchema, scimUserSchema, type ScimUser } from "./scim-user.js";

/** A SCIM 2.0 ListResponse containing user resources. */
export type ScimUserListResponse = {
  schemas: string[];
  /** The total number of results matching the query. */
  totalResults: number;
  /** The number of results returned in this page. */
  itemsPerPage?: number;
  /** The 1-based index of the first result in this page. */
  startIndex?: number;
  /** The list of SCIM user resources. */
  resources: ScimUser[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scimUserListResponseProperties: s.Shape<ScimUserListResponse> = {
  schemas: s.array(s.string()),
  totalResults: s.int(),
  itemsPerPage: s.optional(s.int()),
  startIndex: s.optional(s.int()),
  resources: s.array(s.lazy(() => scimUserInternalSchema)),
  _keysMap: {
    resources: "Resources",
  },
};

export const scimUserListResponseInternalSchema: Schema<ScimUserListResponse> =
  s.object<ScimUserListResponse>(scimUserListResponseProperties, { additionalProperties: s.json() });

export const scimUserListResponseSchema: Schema<ScimUserListResponse> = s.lazySchema(() =>
  s.object<ScimUserListResponse>(
    {
      ...scimUserListResponseProperties,
      resources: s.array(s.lazy(() => scimUserSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
