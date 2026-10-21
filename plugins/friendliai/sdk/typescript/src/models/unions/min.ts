import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Minimum reasoning tokens. `-1` means the model reasons without a budget limit. */
export type Min = number;

export const minSchema: Schema<Min> = s.of<Min>(s.union([s.int()]));
