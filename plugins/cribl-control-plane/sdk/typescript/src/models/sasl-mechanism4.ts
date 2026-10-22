import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** SASL mechanism */
export const SaslMechanism4 = {
  Plain: "plain",
  Oauthbearer: "oauthbearer",
} as const;
export type SaslMechanism4 = (typeof SaslMechanism4)[keyof typeof SaslMechanism4] | (string & {});

export const saslMechanism4Schema: EnumSchema<SaslMechanism4> = s.enumOf<SaslMechanism4>(SaslMechanism4);
