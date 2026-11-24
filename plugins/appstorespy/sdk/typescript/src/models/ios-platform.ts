import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const IosPlatform = {
  IPad: "iPad",
  IPhone: "iPhone",
} as const;
export type IosPlatform = (typeof IosPlatform)[keyof typeof IosPlatform] | (string & {});

export const iosPlatformSchema: EnumSchema<IosPlatform> = s.enumOf<IosPlatform>(IosPlatform);
