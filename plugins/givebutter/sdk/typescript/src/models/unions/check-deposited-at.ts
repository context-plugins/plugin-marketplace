import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CheckDepositedAt = string | Record<string, unknown>;

export const checkDepositedAtSchema: Schema<CheckDepositedAt> = s.of<CheckDepositedAt>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
