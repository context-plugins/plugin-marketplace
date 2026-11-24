import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChannelDoiTSignupApi = {
  Agent: "agent",
  Console: "console",
  Web: "web",
} as const;
export type ChannelDoiTSignupApi =
  | (typeof ChannelDoiTSignupApi)[keyof typeof ChannelDoiTSignupApi]
  | (string & {});

export const channelDoiTSignupApiSchema: EnumSchema<ChannelDoiTSignupApi> =
  s.enumOf<ChannelDoiTSignupApi>(ChannelDoiTSignupApi);
