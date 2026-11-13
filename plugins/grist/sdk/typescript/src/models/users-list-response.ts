import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schema1Schema, type Schema1 } from "./schema1.js";
import { userInResponseSchema, type UserInResponse } from "./user-in-response.js";

export type UsersListResponse = {
  schemas?: Schema1[];
  /** Total number of users. */
  totalResults?: number;
  /** Number of users returned per page. */
  itemsPerPage?: number;
  /** Starting index. */
  startIndex?: number;
  resources?: UserInResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersListResponseSchema: Schema<UsersListResponse> = s.object<UsersListResponse>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema1Schema))),
    totalResults: s.optional(s.int()),
    itemsPerPage: s.optional(s.int()),
    startIndex: s.optional(s.int()),
    resources: s.optional(s.array(s.lazy(() => userInResponseSchema))),
    _keysMap: {
      resources: "Resources",
    },
  },
  { additionalProperties: s.json() },
);
