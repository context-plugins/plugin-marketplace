import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExpireDateMonth = number | string;

export const expireDateMonthSchema: Schema<ExpireDateMonth> = s.of<ExpireDateMonth>(
  s.union([s.int(), s.string()]),
);
