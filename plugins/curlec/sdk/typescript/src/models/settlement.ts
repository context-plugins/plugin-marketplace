import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpaySettlementsApiSchema,
  type EntityRazorpaySettlementsApi,
} from "./entity-razorpay-settlements-api.js";
import {
  statusRazorpaySettlementsApiSchema,
  type StatusRazorpaySettlementsApi,
} from "./status-razorpay-settlements-api.js";

export type Settlement = {
  /** Unique settlement identifier. Prefix: setl_ */
  id?: string;
  entity?: EntityRazorpaySettlementsApi;
  /** Settlement amount in paise. */
  amount?: number;
  status?: StatusRazorpaySettlementsApi;
  /** Processing fees charged (typically 0 for normal settlements). */
  fees?: number;
  /** Tax on fees (paise). */
  tax?: number;
  /** Unique Transaction Reference (UTR) number for bank tracking. */
  utr?: string;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settlementSchema: Schema<Settlement> = s.object<Settlement>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpaySettlementsApiSchema)),
    amount: s.optional(s.int()),
    status: s.optional(s.lazy(() => statusRazorpaySettlementsApiSchema)),
    fees: s.optional(s.int()),
    tax: s.optional(s.int()),
    utr: s.optional(s.string()),
    createdAt: s.optional(s.int()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
