import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode11Schema, type Mode11 } from "./mode11.js";

/** Select the level of details for network metrics */
export type Network1 = {
  /** Select the level of details for network metrics */
  mode?: Mode11;
  /** Generate full network metrics */
  detail?: boolean;
  /** Generate protocol metrics for ICMP, ICMPMsg, IP, TCP, UDP and UDPLite */
  protocols?: boolean;
  /** Network interfaces to include/exclude. All interfaces are included if this list is empty. */
  devices?: string[];
  /** Generate separate metrics for each interface */
  perInterface?: boolean;
};

export const network1Schema: Schema<Network1> = s.object<Network1>({
  mode: s.optional(s.lazy(() => mode11Schema)),
  detail: s.optional(s.boolean()),
  protocols: s.optional(s.boolean()),
  devices: s.optional(s.array(s.string())),
  perInterface: s.optional(s.boolean()),
});
