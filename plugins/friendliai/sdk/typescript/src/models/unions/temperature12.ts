import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
 * random, while lower values like 0.2 will make it more focused and deterministic.
 */
export type Temperature12 = number;

export const temperature12Schema: Schema<Temperature12> = s.of<Temperature12>(s.union([s.float64()]));
