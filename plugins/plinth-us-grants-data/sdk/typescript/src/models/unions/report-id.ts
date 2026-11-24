import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Identifies this screen by its contents — a digest of the record, its sources and `report_date`.
 * Re-deriving it from a retained response reproduces the same value; an altered one does not. Not a
 * signature: anyone can recompute it, so it evidences drift rather than authenticity.
 */
export type ReportId = string;

export const reportIdSchema: Schema<ReportId> = s.of<ReportId>(s.union([s.string()]));
