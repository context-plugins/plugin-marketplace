import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of the generated archive. */
export const TargetFormat = {
  Zip: "zip",
  Tgz: "tgz",
} as const;
export type TargetFormat = (typeof TargetFormat)[keyof typeof TargetFormat] | (string & {});

export const targetFormatSchema: EnumSchema<TargetFormat> = s.enumOf<TargetFormat>(TargetFormat);
