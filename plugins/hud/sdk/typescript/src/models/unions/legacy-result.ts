import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LegacyResult = Record<string, unknown>;

export const legacyResultSchema: Schema<LegacyResult> = s.of<LegacyResult>(
  s.union([s.record(s.string(), s.unknown())]),
);
