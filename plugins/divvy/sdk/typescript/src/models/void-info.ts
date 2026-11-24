import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { voidStatusSchema, type VoidStatus } from "./void-status.js";
import { voidTypeSchema, type VoidType } from "./void-type.js";

/** Void information for the Payments DTO. */
export type VoidInfo = {
  /** BILL-generated ID of the void payment request. The value begins with `vrq`. */
  id?: string;
  /** BILL-generated ID of the user that requested a void payment. The value begins with `006`. */
  requestedBy?: string;
  type?: VoidType;
  status?: VoidStatus;
  /** Void payment request reason */
  reason?: string;
  /** Void payment request created date and time */
  createdTime?: Date;
  /** Void payment request updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const voidInfoSchema: Schema<VoidInfo> = s.object<VoidInfo>(
  {
    id: s.optional(s.string()),
    requestedBy: s.optional(s.string()),
    type: s.optional(s.lazy(() => voidTypeSchema)),
    status: s.optional(s.lazy(() => voidStatusSchema)),
    reason: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
