import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of partner. Will be `null` if the currently authenticated organization is not
 * enrolled as a partner.
 */
export const PartnerType = {
  Oauth: "oauth",
  Signuplink: "signuplink",
  Useragent: "useragent",
} as const;
export type PartnerType = (typeof PartnerType)[keyof typeof PartnerType] | (string & {});

export const partnerTypeSchema: EnumSchema<PartnerType> = s.enumOf<PartnerType>(PartnerType);
