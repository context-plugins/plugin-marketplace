import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MinYear = string;

export const minYearSchema: Schema<MinYear> = s.of<MinYear>(s.union([s.string()]));
