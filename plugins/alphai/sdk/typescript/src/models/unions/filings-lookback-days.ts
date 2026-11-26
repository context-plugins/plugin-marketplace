import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FilingsLookbackDays = number;

export const filingsLookbackDaysSchema: Schema<FilingsLookbackDays> = s.of<FilingsLookbackDays>(
  s.union([s.int()]),
);
