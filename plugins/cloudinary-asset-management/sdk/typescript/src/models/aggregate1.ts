import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rangeSchema, type Range } from "./range.js";
import { typeSchema, type Type } from "./type.js";

export type Aggregate1 = {
  type: Type;
  /**
   * One or more ranges for the numeric field. Each range must include a `key` label and at least
   * one of `from` / `to`.
   */
  ranges: Range[];
};

export const aggregate1Schema: Schema<Aggregate1> = s.object<Aggregate1>({
  type: typeSchema,
  ranges: s.array(s.lazy(() => rangeSchema)),
});
