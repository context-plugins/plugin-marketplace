import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DateMonth = number | string;

export const dateMonthSchema: Schema<DateMonth> = s.of<DateMonth>(s.union([s.int(), s.string()]));
