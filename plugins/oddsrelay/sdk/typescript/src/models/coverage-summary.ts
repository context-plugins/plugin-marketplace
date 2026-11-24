import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The keyless view. */
export type CoverageSummary = {
  region: string;
  generatedAt: string;
  products: Record<string, unknown>;
  /**
   * Per product the region serves, the market keys it carries, sorted: each one a value that
   * product's `markets` filter takes while this document is current (2up, each-way, extra-place and
   * bog carry one each). A key under one product and not another is 400 `unknown_market` on the
   * other's route when that route does not know it, naming the products that carry it in
   * `products`.
   */
  markets: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverageSummarySchema: Schema<CoverageSummary> = s.object<CoverageSummary>(
  {
    region: s.string(),
    generatedAt: s.string(),
    products: s.record(s.string(), s.unknown()),
    markets: s.record(s.string(), s.unknown()),
    _keysMap: {
      generatedAt: "generated_at",
    },
  },
  { additionalProperties: s.json() },
);
