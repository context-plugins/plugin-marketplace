import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The fallback for the channel target (currently only supported for "voice" mode) */
export type FallbackTarget = string;

export const fallbackTargetSchema: Schema<FallbackTarget> = s.of<FallbackTarget>(s.union([s.string()]));
