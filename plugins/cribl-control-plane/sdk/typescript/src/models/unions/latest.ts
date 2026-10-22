import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Latest time to collect data for the selected timezone */
export type Latest = number | string;

export const latestSchema: Schema<Latest> = s.of<Latest>(s.union([s.float64(), s.string()]));
