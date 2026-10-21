import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { channelTargetResponseSchema, type ChannelTargetResponse } from "../channel-target-response.js";

/** Channel targets associated with the agent */
export type ChannelTargets = ChannelTargetResponse[];

export const channelTargetsSchema: Schema<ChannelTargets> = s.of<ChannelTargets>(
  s.union([s.array(s.lazy(() => channelTargetResponseSchema))]),
);
