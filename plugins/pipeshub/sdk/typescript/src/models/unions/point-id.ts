import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Qdrant point identifier attached during vector lookup (shape varies by deployment). */
export type PointId = string | number;

export const pointIdSchema: Schema<PointId> = s.of<PointId>(s.union([s.string(), s.int(), s.float64()]));
