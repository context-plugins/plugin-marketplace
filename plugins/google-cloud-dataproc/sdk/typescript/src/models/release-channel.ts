import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Immutable. The release channel of the service. If unspecified, defaults to STABLE. */
export const ReleaseChannel = {
  ReleaseChannelUnspecified: "RELEASE_CHANNEL_UNSPECIFIED",
  Canary: "CANARY",
  Stable: "STABLE",
} as const;
export type ReleaseChannel = (typeof ReleaseChannel)[keyof typeof ReleaseChannel] | (string & {});

export const releaseChannelSchema: EnumSchema<ReleaseChannel> = s.enumOf<ReleaseChannel>(ReleaseChannel);
