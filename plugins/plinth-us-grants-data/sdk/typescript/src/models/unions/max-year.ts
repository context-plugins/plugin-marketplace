import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxYear = string;

export const maxYearSchema: Schema<MaxYear> = s.of<MaxYear>(s.union([s.string()]));
