import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExtraConfiguration1 = Record<string, unknown>;

export const extraConfiguration1Schema: Schema<ExtraConfiguration1> = s.of<ExtraConfiguration1>(
  s.union([s.record(s.string(), s.unknown())]),
);
