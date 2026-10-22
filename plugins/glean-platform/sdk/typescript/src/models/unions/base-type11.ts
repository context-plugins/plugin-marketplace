import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseType2Schema, type BaseType2 } from "../base-type2.js";
import { baseType3Schema, type BaseType3 } from "../base-type3.js";
import { baseType1Schema, type BaseType1 } from "./base-type1.js";

export type BaseType11 = BaseType1 | BaseType2 | BaseType3;

export const baseType11Schema: Schema<BaseType11> = s.of<BaseType11>(
  s.union([s.lazy(() => baseType1Schema), s.lazy(() => baseType2Schema), s.lazy(() => baseType3Schema)]),
);
