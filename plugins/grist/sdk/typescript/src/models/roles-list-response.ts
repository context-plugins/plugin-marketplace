import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleInGetResponseSchema, type RoleInGetResponse } from "./role-in-get-response.js";
import { schema1Schema, type Schema1 } from "./schema1.js";

export type RolesListResponse = {
  schemas?: Schema1[];
  /** Total number of roles. */
  totalResults?: number;
  /** Number of roles returned per page. */
  itemsPerPage?: number;
  /** Starting index. */
  startIndex?: number;
  resources?: RoleInGetResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rolesListResponseSchema: Schema<RolesListResponse> = s.object<RolesListResponse>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema1Schema))),
    totalResults: s.optional(s.int()),
    itemsPerPage: s.optional(s.int()),
    startIndex: s.optional(s.int()),
    resources: s.optional(s.array(s.lazy(() => roleInGetResponseSchema))),
    _keysMap: {
      resources: "Resources",
    },
  },
  { additionalProperties: s.json() },
);
