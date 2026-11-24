import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type PaymentListItemResponse = {
  /** The payment ID */
  paymentId?: string;
  /** The payment submissiondate */
  submissionDate?: Date;
  status?: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentListItemResponseSchema: Schema<PaymentListItemResponse> =
  s.object<PaymentListItemResponse>(
    {
      paymentId: s.optional(s.string()),
      submissionDate: s.optional(s.dateTime()),
      status: s.optional(s.lazy(() => statusSchema)),
    },
    { additionalProperties: s.json() },
  );
