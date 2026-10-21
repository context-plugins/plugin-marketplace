import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The name of the channel target associated with the agent at the time of the session (see
 * ChannelTargetResponse.target)
 */
export type Target1 = string;

export const target1Schema: Schema<Target1> = s.of<Target1>(s.union([s.string()]));
