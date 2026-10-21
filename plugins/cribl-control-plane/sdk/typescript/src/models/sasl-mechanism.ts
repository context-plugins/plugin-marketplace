import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** SASL mechanism */
export const SaslMechanism = {
  Plain: "plain",
  ScramSha256: "scram-sha-256",
  ScramSha512: "scram-sha-512",
  Kerberos: "kerberos",
} as const;
export type SaslMechanism = (typeof SaslMechanism)[keyof typeof SaslMechanism] | (string & {});

export const saslMechanismSchema: EnumSchema<SaslMechanism> = s.enumOf<SaslMechanism>(SaslMechanism);
