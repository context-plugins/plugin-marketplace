import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type UsersResponse = {
  data?: UserCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersResponseSchema: Schema<UsersResponse> = s.object<UsersResponse>(
  {
    data: s.optional(s.array(s.lazy(() => userCompactSchema))),
  },
  { additionalProperties: s.json() },
);
