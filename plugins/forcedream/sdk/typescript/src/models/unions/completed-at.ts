import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Coerced to a string exactly as JS's String(x) would, not left as a raw number. */
export type CompletedAt = number | string;

export const completedAtSchema: Schema<CompletedAt> = s.of<CompletedAt>(s.union([s.float64(), s.string()]));
