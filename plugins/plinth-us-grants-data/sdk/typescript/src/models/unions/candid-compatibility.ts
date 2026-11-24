import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CandidCompatibility = Record<string, unknown>;

export const candidCompatibilitySchema: Schema<CandidCompatibility> = s.of<CandidCompatibility>(
  s.union([s.record(s.string(), s.unknown())]),
);
