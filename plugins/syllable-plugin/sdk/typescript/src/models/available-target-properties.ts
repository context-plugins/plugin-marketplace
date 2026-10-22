import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of target fields supported for filtering/sorting on available targets list endpoint. */
export const AvailableTargetProperties = {
  ChannelId: "channel_id",
  ChannelName: "channel_name",
  Target: "target",
} as const;
export type AvailableTargetProperties =
  | (typeof AvailableTargetProperties)[keyof typeof AvailableTargetProperties]
  | (string & {});

export const availableTargetPropertiesSchema: EnumSchema<AvailableTargetProperties> =
  s.enumOf<AvailableTargetProperties>(AvailableTargetProperties);
