import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode5Schema, type Mode5 } from "./mode5.js";

/** Select the level of detail for network metrics */
export type Network = {
  /** Select the level of detail for network metrics */
  mode?: Mode5;
  /** Generate full network metrics */
  detail?: boolean;
  /** Generate protocol metrics for ICMP, ICMPMsg, IP, TCP, UDP and UDPLite */
  protocols?: boolean;
  /**
   * Network interfaces to include/exclude. Examples: eth0, !lo. All interfaces are included if this
   * list is empty.
   */
  devices?: string[];
  /** Generate separate metrics for each interface */
  perInterface?: boolean;
};

export const networkSchema: Schema<Network> = s.object<Network>({
  mode: s.optional(s.lazy(() => mode5Schema)),
  detail: s.optional(s.boolean()),
  protocols: s.optional(s.boolean()),
  devices: s.optional(s.array(s.string())),
  perInterface: s.optional(s.boolean()),
});
