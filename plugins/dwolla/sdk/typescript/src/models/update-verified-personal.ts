import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Update Verified Personal Customer Information */
export type UpdateVerifiedPersonal = {
  email?: string;
  ipAddress?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phone?: string;
};

export const updateVerifiedPersonalSchema: Schema<UpdateVerifiedPersonal> = s.object<UpdateVerifiedPersonal>({
  email: s.optional(s.string()),
  ipAddress: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  phone: s.optional(s.string()),
});
