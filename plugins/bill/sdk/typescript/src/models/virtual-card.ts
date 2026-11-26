import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Vendor virtual card enrollment information. */
export type VirtualCard = {
  status?: string;
  remitEmail?: string;
  enrollDate?: Date;
  declineDate?: Date;
  alternatePayByType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualCardSchema: Schema<VirtualCard> = s.object<VirtualCard>(
  {
    status: s.optional(s.string()),
    remitEmail: s.optional(s.string()),
    enrollDate: s.optional(s.dateTime()),
    declineDate: s.optional(s.dateTime()),
    alternatePayByType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
