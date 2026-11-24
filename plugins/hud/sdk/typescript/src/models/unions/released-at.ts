import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Vendor-published release time. Null until an admin sets it; not catalog insert time. */
export type ReleasedAt = Date;

export const releasedAtSchema: Schema<ReleasedAt> = s.of<ReleasedAt>(s.union([s.dateTime()]));
