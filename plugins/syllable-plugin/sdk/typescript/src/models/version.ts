import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Version = {
  V1Alpha: "v1alpha",
} as const;
export type Version = (typeof Version)[keyof typeof Version] | (string & {});

export const versionSchema: EnumSchema<Version> = s.enumOf<Version>(Version);
