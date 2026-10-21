import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Delta time in minutes to expire existing secret if any. If not set or set to zero it will expire
 * immediately.
 */
export type Delta1 = number;

export const delta1Schema: Schema<Delta1> = s.of<Delta1>(s.union([s.int()]));
