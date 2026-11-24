import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserFundMarginData = {
  /**
   * Positive values denote the amount blocked into an Open order or position. Negative value
   * denotes the amount being released.
   */
  usedMargin?: number;
  /** Instant payin will reflect here */
  payinAmount?: number;
  /** Amount blocked on futures and options towards SPAN */
  spanMargin?: number;
  /** Payin amount credited through a manual process */
  adhocMargin?: number;
  /** The amount maintained for withdrawal */
  notionalCash?: number;
  /** Total margin available for trading */
  availableMargin?: number;
  /** Amount blocked on futures and options towards Exposure */
  exposureMargin?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userFundMarginDataSchema: Schema<UserFundMarginData> = s.object<UserFundMarginData>(
  {
    usedMargin: s.optional(s.float64()),
    payinAmount: s.optional(s.float64()),
    spanMargin: s.optional(s.float64()),
    adhocMargin: s.optional(s.float64()),
    notionalCash: s.optional(s.float64()),
    availableMargin: s.optional(s.float64()),
    exposureMargin: s.optional(s.float64()),
    _keysMap: {
      usedMargin: "used_margin",
      payinAmount: "payin_amount",
      spanMargin: "span_margin",
      adhocMargin: "adhoc_margin",
      notionalCash: "notional_cash",
      availableMargin: "available_margin",
      exposureMargin: "exposure_margin",
    },
  },
  { additionalProperties: s.json() },
);
