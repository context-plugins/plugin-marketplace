import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason of the failure of the token request. */
export const Reason1 = {
  Unknown: "UNKNOWN",
  InvalidResourceOwnerCredentials: "INVALID_RESOURCE_OWNER_CREDENTIALS",
  InvalidTarget: "INVALID_TARGET",
  InvalidClient: "INVALID_CLIENT",
  UnauthorizedClient: "UNAUTHORIZED_CLIENT",
  InvalidScope: "INVALID_SCOPE",
} as const;
export type Reason1 = (typeof Reason1)[keyof typeof Reason1] | (string & {});

export const reason1Schema: EnumSchema<Reason1> = s.enumOf<Reason1>(Reason1);
