import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Set to `true` to enable Auto Rescue for a transaction. Use the `maxDaysToRescue` to specify a
 * rescue window.
 */
export type Autorescue = boolean;

export const autorescueSchema: Schema<Autorescue> = s.of<Autorescue>(s.union([s.boolean()]));
