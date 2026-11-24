import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Comma-separated status whitelist applied to ``Trace.status`` — e.g. `completed` to exclude
 * live/cancelled rows.
 */
export type Status21 = string;

export const status21Schema: Schema<Status21> = s.of<Status21>(s.union([s.string()]));
