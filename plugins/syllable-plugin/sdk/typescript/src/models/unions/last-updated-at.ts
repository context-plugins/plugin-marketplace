import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp of last change to batch */
export type LastUpdatedAt = Date;

export const lastUpdatedAtSchema: Schema<LastUpdatedAt> = s.of<LastUpdatedAt>(s.union([s.dateTime()]));
