import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Input tokens per minute capacity. */
export type CapacityTpm = number;

export const capacityTpmSchema: Schema<CapacityTpm> = s.of<CapacityTpm>(s.union([s.int()]));
