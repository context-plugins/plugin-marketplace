import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of the webhook */
export const Version = {
  V10: "V1_0",
  V20: "V2_0",
} as const;
export type Version = (typeof Version)[keyof typeof Version] | (string & {});

export const versionSchema: EnumSchema<Version> = s.enumOf<Version>(Version);
