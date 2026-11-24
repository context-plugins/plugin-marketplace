import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Null while the import is live */
export type CompletedAt = Date;

export const completedAtSchema: Schema<CompletedAt> = s.of<CompletedAt>(s.union([s.dateTime()]));
