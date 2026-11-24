import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExpireDateYear = number | string;

export const expireDateYearSchema: Schema<ExpireDateYear> = s.of<ExpireDateYear>(
  s.union([s.int(), s.string()]),
);
