import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the BGP peer. The following are the possible values: up: The BGP peer is
 * established. This state does not indicate the state of the routing function. Ensure that you are
 * receiving routes over the BGP session. down: The BGP peer is down. unknown: The BGP peer status
 * is not available.
 */
export const BgpStatus = {
  Up: "up",
  Down: "down",
  Unknown: "unknown",
} as const;
export type BgpStatus = (typeof BgpStatus)[keyof typeof BgpStatus] | (string & {});

export const bgpStatusSchema: EnumSchema<BgpStatus> = s.enumOf<BgpStatus>(BgpStatus);
