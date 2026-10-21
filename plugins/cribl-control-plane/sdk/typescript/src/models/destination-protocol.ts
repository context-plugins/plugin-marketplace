import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Protocol to use when communicating with the destination. */
export const DestinationProtocol = {
  Udp: "udp",
  Tcp: "tcp",
} as const;
export type DestinationProtocol =
  | (typeof DestinationProtocol)[keyof typeof DestinationProtocol]
  | (string & {});

export const destinationProtocolSchema: EnumSchema<DestinationProtocol> =
  s.enumOf<DestinationProtocol>(DestinationProtocol);
