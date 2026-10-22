import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Earliest time to collect data for the selected timezone */
export type Earliest = number | string;

export const earliestSchema: Schema<Earliest> = s.of<Earliest>(s.union([s.float64(), s.string()]));
