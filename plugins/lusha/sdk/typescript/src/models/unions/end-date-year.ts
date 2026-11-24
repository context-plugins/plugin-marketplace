import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EndDateYear = number | string | null;

export const endDateYearSchema: Schema<EndDateYear> = s.of<EndDateYear>(
  s.nullable(s.union([s.int(), s.string()])),
);
