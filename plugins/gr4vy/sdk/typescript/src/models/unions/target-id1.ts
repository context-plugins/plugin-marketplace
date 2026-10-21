import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The optional ID of the instrument to refund for. This is only required when the `target_type` is
 * set to `gift-card-redemption`.
 */
export type TargetId1 = string;

export const targetId1Schema: Schema<TargetId1> = s.of<TargetId1>(s.union([s.string()]));
