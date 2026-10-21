import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Privacy protocol used to encrypt SNMPv3 messages. */
export const PrivProtocol = {
  None: "none",
} as const;
export type PrivProtocol = (typeof PrivProtocol)[keyof typeof PrivProtocol] | (string & {});

export const privProtocolSchema: EnumSchema<PrivProtocol> = s.enumOf<PrivProtocol>(PrivProtocol);
