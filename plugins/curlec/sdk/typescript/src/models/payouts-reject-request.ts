import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PayoutsRejectRequest = {
  remarks?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutsRejectRequestSchema: Schema<PayoutsRejectRequest> = s.object<PayoutsRejectRequest>(
  {
    remarks: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
