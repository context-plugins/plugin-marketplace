import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Channel = {
  Ach: "ach",
  RealTimePayments: "real-time-payments",
  Wire: "wire",
  External: "external",
} as const;
export type Channel = (typeof Channel)[keyof typeof Channel] | (string & {});

export const channelSchema: EnumSchema<Channel> = s.enumOf<Channel>(Channel);
