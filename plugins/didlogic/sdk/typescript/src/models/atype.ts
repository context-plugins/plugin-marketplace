import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of the agent leg. `sip_account` rings one of your SIP accounts; `stream` connects your own
 * WebSocket endpoint first, where the account allows it.
 */
export const AType = {
  SipAccount: "sip_account",
  Stream: "stream",
} as const;
export type AType = (typeof AType)[keyof typeof AType] | (string & {});

export const aTypeSchema: EnumSchema<AType> = s.enumOf<AType>(AType);
