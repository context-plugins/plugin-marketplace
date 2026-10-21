import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the session direction is outbound (true) or inbound (false). */
export type IsOutbound = boolean;

export const isOutboundSchema: Schema<IsOutbound> = s.of<IsOutbound>(s.union([s.boolean()]));
