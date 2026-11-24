import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PayoutId = string | Record<string, unknown>;

export const payoutIdSchema: Schema<PayoutId> = s.of<PayoutId>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
