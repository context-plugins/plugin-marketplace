import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Create a Receive Only User */
export type CreateReceiveOnlyUser = {
  firstName: string;
  lastName: string;
  email: string;
  /** @default "receive-only" */
  type?: "receive-only";
  ipAddress?: string;
  phone?: string;
  correlationId?: string;
  businessName?: string;
};

export const createReceiveOnlyUserSchema: Schema<CreateReceiveOnlyUser> = s.object<CreateReceiveOnlyUser>({
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  type: s.defaulted(s.literal("receive-only"), "receive-only"),
  ipAddress: s.optional(s.string()),
  phone: s.optional(s.string()),
  correlationId: s.optional(s.string()),
  businessName: s.optional(s.string()),
});
