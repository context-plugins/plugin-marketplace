import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Update Unverified Customer or Receive Only User Information */
export type UpdateUnverifiedAndReceiveOnly = {
  firstName?: string;
  lastName?: string;
  email?: string;
  businessName?: string;
};

export const updateUnverifiedAndReceiveOnlySchema: Schema<UpdateUnverifiedAndReceiveOnly> =
  s.object<UpdateUnverifiedAndReceiveOnly>({
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    email: s.optional(s.string()),
    businessName: s.optional(s.string()),
  });
