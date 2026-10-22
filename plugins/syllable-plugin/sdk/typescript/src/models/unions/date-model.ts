import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date for the rule in YYYY-MM-DD format */
export type DateModel = string;

export const dateModelSchema: Schema<DateModel> = s.of<DateModel>(s.union([s.string()]));
