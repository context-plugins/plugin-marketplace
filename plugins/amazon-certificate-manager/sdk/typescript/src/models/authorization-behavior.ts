import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The authorization behavior of the ACME endpoint. */
export const AuthorizationBehavior = {
  PreApproved: "PRE_APPROVED",
} as const;
export type AuthorizationBehavior =
  | (typeof AuthorizationBehavior)[keyof typeof AuthorizationBehavior]
  | (string & {});

export const authorizationBehaviorSchema: EnumSchema<AuthorizationBehavior> =
  s.enumOf<AuthorizationBehavior>(AuthorizationBehavior);
