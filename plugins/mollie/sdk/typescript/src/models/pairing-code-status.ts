import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the pairing code. */
export const PairingCodeStatus = {
  Active: "active",
  Expired: "expired",
  Revoked: "revoked",
} as const;
export type PairingCodeStatus = (typeof PairingCodeStatus)[keyof typeof PairingCodeStatus] | (string & {});

export const pairingCodeStatusSchema: EnumSchema<PairingCodeStatus> =
  s.enumOf<PairingCodeStatus>(PairingCodeStatus);
