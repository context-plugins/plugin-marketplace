import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Financials = Record<string, unknown>;

export const financialsSchema: Schema<Financials> = s.of<Financials>(
  s.union([s.record(s.string(), s.unknown())]),
);
