import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The updated authorization behavior. */
export const AuthorizationBehavior2 = {
  PreApproved: "PRE_APPROVED",
} as const;
export type AuthorizationBehavior2 =
  | (typeof AuthorizationBehavior2)[keyof typeof AuthorizationBehavior2]
  | (string & {});

export const authorizationBehavior2Schema: EnumSchema<AuthorizationBehavior2> =
  s.enumOf<AuthorizationBehavior2>(AuthorizationBehavior2);
