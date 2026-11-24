import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AWS Organizations Handshake `State` value, lowercased. */
export const HandshakeState = {
  Requested: "requested",
  Open: "open",
  Canceled: "canceled",
  Accepted: "accepted",
  Declined: "declined",
  Expired: "expired",
} as const;
export type HandshakeState = (typeof HandshakeState)[keyof typeof HandshakeState] | (string & {});

export const handshakeStateSchema: EnumSchema<HandshakeState> = s.enumOf<HandshakeState>(HandshakeState);
