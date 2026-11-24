import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JurisdictionEnum = {
  Us: "us",
  Ca: "ca",
} as const;
export type JurisdictionEnum = (typeof JurisdictionEnum)[keyof typeof JurisdictionEnum] | (string & {});

export const jurisdictionEnumSchema: EnumSchema<JurisdictionEnum> =
  s.enumOf<JurisdictionEnum>(JurisdictionEnum);
