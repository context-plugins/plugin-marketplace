import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceProfile = {
  Fapi: "FAPI",
  OpenBanking: "OPEN_BANKING",
} as const;
export type ServiceProfile = (typeof ServiceProfile)[keyof typeof ServiceProfile] | (string & {});

export const serviceProfileSchema: EnumSchema<ServiceProfile> = s.enumOf<ServiceProfile>(ServiceProfile);
