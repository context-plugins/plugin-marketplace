import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";

export type CompaniesApiUsersResponse = {
  value?: User[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiUsersResponseSchema: Schema<CompaniesApiUsersResponse> =
  s.object<CompaniesApiUsersResponse>(
    {
      value: s.optional(s.array(s.lazy(() => userSchema))),
    },
    { additionalProperties: s.json() },
  );
