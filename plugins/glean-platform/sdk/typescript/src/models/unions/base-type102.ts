import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseType10Schema, type BaseType10 } from "../base-type10.js";
import { baseType101Schema, type BaseType101 } from "../base-type101.js";

/** Continuation availability must agree with the cursor. */
export type BaseType102 = BaseType10 | BaseType101;

export const baseType102Schema: Schema<BaseType102> = s.of<BaseType102>(
  s.union([s.lazy(() => baseType10Schema), s.lazy(() => baseType101Schema)]),
);
