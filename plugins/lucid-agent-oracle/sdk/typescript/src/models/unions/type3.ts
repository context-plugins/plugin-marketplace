import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { typeSchema, type Type } from "../type.js";
import { type1Schema, type Type1 } from "../type1.js";
import { type2Schema, type Type2 } from "../type2.js";

export type Type3 = Type | Type1 | Type2;

export const type3Schema: Schema<Type3> = s.of<Type3>(
  s.union([s.lazy(() => typeSchema), s.lazy(() => type1Schema), s.lazy(() => type2Schema)]),
);
