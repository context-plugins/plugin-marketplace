import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The optional ID of the instrument that was refunded. This may be `null` if the instrument was not
 * stored.
 */
export type TargetId = string;

export const targetIdSchema: Schema<TargetId> = s.of<TargetId>(s.union([s.string()]));
