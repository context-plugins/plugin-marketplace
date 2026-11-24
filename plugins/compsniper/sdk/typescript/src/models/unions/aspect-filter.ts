import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AspectFilter = string | string[];

export const aspectFilterSchema: Schema<AspectFilter> = s.of<AspectFilter>(
  s.union([s.string(), s.array(s.string())]),
);
