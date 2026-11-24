import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Duration = {
  Forever: "forever",
  Once: "once",
  Repeating: "repeating",
} as const;
export type Duration = (typeof Duration)[keyof typeof Duration] | (string & {});

export const durationSchema: EnumSchema<Duration> = s.enumOf<Duration>(Duration);
