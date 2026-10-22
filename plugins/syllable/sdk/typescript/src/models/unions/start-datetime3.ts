import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The start datetime for filtering results */
export type StartDatetime3 = string;

export const startDatetime3Schema: Schema<StartDatetime3> = s.of<StartDatetime3>(s.union([s.string()]));
