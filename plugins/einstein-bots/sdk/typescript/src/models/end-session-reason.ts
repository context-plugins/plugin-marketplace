import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EndSessionReason = {
  UserRequest: "UserRequest",
  Transfer: "Transfer",
  Expiration: "Expiration",
  Error: "Error",
  Other: "Other",
} as const;
export type EndSessionReason = (typeof EndSessionReason)[keyof typeof EndSessionReason] | (string & {});

export const endSessionReasonSchema: EnumSchema<EndSessionReason> =
  s.enumOf<EndSessionReason>(EndSessionReason);
