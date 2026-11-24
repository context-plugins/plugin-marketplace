import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `unsigned`: the pack carries no signature. `no_key`: it is signed but this deployment has no key
 * to check it with. `invalid`: the signature or key id does not match.
 */
export const Signature = {
  Valid: "valid",
  Invalid: "invalid",
  Unsigned: "unsigned",
  NoKey: "no_key",
} as const;
export type Signature = (typeof Signature)[keyof typeof Signature] | (string & {});

export const signatureSchema: EnumSchema<Signature> = s.enumOf<Signature>(Signature);
