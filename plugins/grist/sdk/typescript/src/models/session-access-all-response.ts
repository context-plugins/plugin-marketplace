import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orgSchema, type Org } from "./org.js";
import { userSchema, type User } from "./user.js";

export type SessionAccessAllResponse = {
  users?: User[];
  orgs?: Org[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionAccessAllResponseSchema: Schema<SessionAccessAllResponse> =
  s.object<SessionAccessAllResponse>(
    {
      users: s.optional(s.array(s.lazy(() => userSchema))),
      orgs: s.optional(s.array(s.lazy(() => orgSchema))),
    },
    { additionalProperties: s.json() },
  );
