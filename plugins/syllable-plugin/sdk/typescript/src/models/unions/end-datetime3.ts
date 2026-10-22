import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The end datetime for filtering results */
export type EndDatetime3 = string;

export const endDatetime3Schema: Schema<EndDatetime3> = s.of<EndDatetime3>(s.union([s.string()]));
