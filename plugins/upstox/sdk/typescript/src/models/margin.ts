import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Margin = {
  /** Upfront margin mandatory by exchange for derivatives trade applicable on only FNO trade */
  spanMargin?: number;
  /** Based on ELM percentage values provided by exchange, applicable on only FNO trade */
  exposureMargin?: number;
  /** Margin applicable for any equity trade */
  equityMargin?: number;
  /** Option premium required. */
  netBuyPremium?: number;
  /** Application margin applicable on MCX FNO trade for certain commodities */
  additionalMargin?: number;
  /** Total margin required for the basket */
  totalMargin?: number;
  /** Tender margin */
  tenderMargin?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marginSchema: Schema<Margin> = s.object<Margin>(
  {
    spanMargin: s.optional(s.float64()),
    exposureMargin: s.optional(s.float64()),
    equityMargin: s.optional(s.float64()),
    netBuyPremium: s.optional(s.float64()),
    additionalMargin: s.optional(s.float64()),
    totalMargin: s.optional(s.float64()),
    tenderMargin: s.optional(s.float64()),
    _keysMap: {
      spanMargin: "span_margin",
      exposureMargin: "exposure_margin",
      equityMargin: "equity_margin",
      netBuyPremium: "net_buy_premium",
      additionalMargin: "additional_margin",
      totalMargin: "total_margin",
      tenderMargin: "tender_margin",
    },
  },
  { additionalProperties: s.json() },
);
