import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { virtualCardSchema, type VirtualCard } from "./virtual-card.js";

/** Vendor payment information. */
export type PaymentInformationConnectEventsSubscriptionsApi = {
  payByType?: string;
  /** Vendor virtual card enrollment information. */
  virtualCard?: VirtualCard;
  email?: string;
  payeeName?: string;
  lastPaymentDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentInformationConnectEventsSubscriptionsApiSchema: Schema<PaymentInformationConnectEventsSubscriptionsApi> =
  s.object<PaymentInformationConnectEventsSubscriptionsApi>(
    {
      payByType: s.optional(s.string()),
      virtualCard: s.optional(s.lazy(() => virtualCardSchema)),
      email: s.optional(s.string()),
      payeeName: s.optional(s.string()),
      lastPaymentDate: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
