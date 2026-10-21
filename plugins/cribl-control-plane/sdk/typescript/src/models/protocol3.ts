import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The network protocol to use for sending out syslog messages */
export const Protocol3 = {
  Tcp: "tcp",
  Udp: "udp",
} as const;
export type Protocol3 = (typeof Protocol3)[keyof typeof Protocol3] | (string & {});

export const protocol3Schema: EnumSchema<Protocol3> = s.enumOf<Protocol3>(Protocol3);
