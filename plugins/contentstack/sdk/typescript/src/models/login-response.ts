import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

/** Authentication response containing the user's authtoken. */
export type LoginResponse = {
  /** A Contentstack user account. */
  user?: User;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const loginResponseProperties: s.Shape<LoginResponse> = {
  user: s.optional(s.lazy(() => userInternalSchema)),
};

export const loginResponseInternalSchema: Schema<LoginResponse> = s.object<LoginResponse>(
  loginResponseProperties,
  { additionalProperties: s.json() },
);

export const loginResponseSchema: Schema<LoginResponse> = s.lazySchema(() =>
  s.object<LoginResponse>(
    {
      ...loginResponseProperties,
      user: s.optional(s.lazy(() => userSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
