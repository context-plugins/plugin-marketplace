import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** minimum CVSS score (0-10) */
export type MinCvss = number;

export const minCvssSchema: Schema<MinCvss> = s.of<MinCvss>(s.union([s.float64()]));
