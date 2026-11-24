import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EndDateMonth = number | string | null;

export const endDateMonthSchema: Schema<EndDateMonth> = s.of<EndDateMonth>(
  s.nullable(s.union([s.int(), s.string()])),
);
