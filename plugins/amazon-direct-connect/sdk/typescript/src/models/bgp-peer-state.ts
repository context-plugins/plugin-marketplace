import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the BGP peer. The following are the possible values: verifying: The BGP peering
 * addresses or ASN require validation before the BGP peer can be created. This state applies only
 * to public virtual interfaces. pending: The BGP peer is created, and remains in this state until
 * it is ready to be established. available: The BGP peer is ready to be established. deleting: The
 * BGP peer is being deleted. deleted: The BGP peer is deleted and cannot be established.
 */
export const BgpPeerState = {
  Verifying: "verifying",
  Pending: "pending",
  Available: "available",
  Deleting: "deleting",
  Deleted: "deleted",
} as const;
export type BgpPeerState = (typeof BgpPeerState)[keyof typeof BgpPeerState] | (string & {});

export const bgpPeerStateSchema: EnumSchema<BgpPeerState> = s.enumOf<BgpPeerState>(BgpPeerState);
