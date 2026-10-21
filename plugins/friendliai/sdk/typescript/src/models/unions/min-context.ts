import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Minimum input tokens for this tier to apply. */
export type MinContext = number;

export const minContextSchema: Schema<MinContext> = s.of<MinContext>(s.union([s.int()]));
