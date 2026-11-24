import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MaxAgeSeconds = {
  _300: 300,
} as const;
export type MaxAgeSeconds = (typeof MaxAgeSeconds)[keyof typeof MaxAgeSeconds] | (number & {});

export const maxAgeSecondsSchema: EnumSchema<MaxAgeSeconds> = s.enumOf<MaxAgeSeconds>(MaxAgeSeconds);
