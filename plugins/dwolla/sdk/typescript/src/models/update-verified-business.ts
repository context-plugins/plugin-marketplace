import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Update Verified Business Customer Information (both Sole Proprietorship and Non-Sole
 * Proprietorship)
 */
export type UpdateVerifiedBusiness = {
  email?: string;
  ipAddress?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phone?: string;
  doingBusinessAs?: string;
  website?: string;
};

export const updateVerifiedBusinessSchema: Schema<UpdateVerifiedBusiness> = s.object<UpdateVerifiedBusiness>({
  email: s.optional(s.string()),
  ipAddress: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  phone: s.optional(s.string()),
  doingBusinessAs: s.optional(s.string()),
  website: s.optional(s.string()),
});
