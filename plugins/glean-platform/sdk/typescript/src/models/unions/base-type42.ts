import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseType4Schema, type BaseType4 } from "../base-type4.js";
import { baseType41Schema, type BaseType41 } from "../base-type41.js";

export type BaseType42 = BaseType4 | BaseType41;

export const baseType42Schema: Schema<BaseType42> = s.of<BaseType42>(
  s.union([s.lazy(() => baseType4Schema), s.lazy(() => baseType41Schema)]),
);
