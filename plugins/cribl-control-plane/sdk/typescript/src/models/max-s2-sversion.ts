import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The highest S2S protocol version to advertise during handshake */
export const MaxS2SVersion = {
  V3: "v3",
  V4: "v4",
} as const;
export type MaxS2SVersion = (typeof MaxS2SVersion)[keyof typeof MaxS2SVersion] | (string & {});

export const maxS2SVersionSchema: EnumSchema<MaxS2SVersion> = s.enumOf<MaxS2SVersion>(MaxS2SVersion);
