import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseType7Schema, type BaseType7 } from "../base-type7.js";
import { baseType71Schema, type BaseType71 } from "../base-type71.js";

export type BaseType72 = BaseType7 | BaseType71;

export const baseType72Schema: Schema<BaseType72> = s.of<BaseType72>(
  s.union([s.lazy(() => baseType7Schema), s.lazy(() => baseType71Schema)]),
);
