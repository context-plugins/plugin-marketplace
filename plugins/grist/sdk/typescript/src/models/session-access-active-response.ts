import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orgErrorSchema, type OrgError } from "./org-error.js";
import { orgSchema, type Org } from "./org.js";
import { userSchema, type User } from "./user.js";

export type SessionAccessActiveResponse = {
  user?: User;
  org?: Org;
  /** Error information if org access failed */
  orgError?: OrgError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionAccessActiveResponseSchema: Schema<SessionAccessActiveResponse> =
  s.object<SessionAccessActiveResponse>(
    {
      user: s.optional(s.lazy(() => userSchema)),
      org: s.optional(s.lazy(() => orgSchema)),
      orgError: s.optional(s.lazy(() => orgErrorSchema)),
    },
    { additionalProperties: s.json() },
  );
