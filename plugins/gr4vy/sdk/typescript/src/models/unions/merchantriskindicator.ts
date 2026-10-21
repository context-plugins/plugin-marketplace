import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `merchantRiskIndicator` data to Adyen. */
export type Merchantriskindicator = Record<string, unknown>;

export const merchantriskindicatorSchema: Schema<Merchantriskindicator> = s.of<Merchantriskindicator>(
  s.union([s.record(s.string(), s.unknown())]),
);
