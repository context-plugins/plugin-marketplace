import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";
import {
  entityRazorpayTransfersApiSchema,
  type EntityRazorpayTransfersApi,
} from "./entity-razorpay-transfers-api.js";

/**
 * A reversal of a transfer — moves funds back from the Linked Account to the merchant. Partial
 * reversals are supported and multiple reversals per transfer are allowed. Prefix: rvrsl_
 */
export type Reversal = {
  /** Reversal ID. Prefix: rvrsl_ */
  id?: string;
  entity?: EntityRazorpayTransfersApi;
  /** Transfer ID being reversed (trf_*). */
  transferId?: string;
  /** Reversed amount in paise. */
  amount?: number;
  currency?: Currency;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** ID of the entity that initiated the reversal. */
  initiatorId?: string;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reversalProperties: s.Shape<Reversal> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayTransfersApiSchema)),
  transferId: s.optional(s.string()),
  amount: s.optional(s.int()),
  currency: s.optional(s.lazy(() => currencySchema)),
  notes: s.optional(s.record(s.string(), s.string())),
  initiatorId: s.optional(s.string()),
  createdAt: s.optional(s.int()),
  _keysMap: {
    transferId: "transfer_id",
    initiatorId: "initiator_id",
    createdAt: "created_at",
  },
};

export const reversalInternalSchema: Schema<Reversal> = s.object<Reversal>(reversalProperties, {
  additionalProperties: s.json(),
});

export const reversalSchema: Schema<Reversal> = s.lazySchema(() =>
  s.object<Reversal>(
    {
      ...reversalProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
