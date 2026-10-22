import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sortSchema, type Sort } from "../sort.js";
import { sort1Schema, type Sort1 } from "../sort1.js";
import { sort2Schema, type Sort2 } from "../sort2.js";
import { sort3Schema, type Sort3 } from "../sort3.js";

export type Sort4 = Sort | Sort1 | Sort2 | Sort3;

export const sort4Schema: Schema<Sort4> = s.of<Sort4>(
  s.union([
    s.lazy(() => sortSchema),
    s.lazy(() => sort1Schema),
    s.lazy(() => sort2Schema),
    s.lazy(() => sort3Schema),
  ]),
);
