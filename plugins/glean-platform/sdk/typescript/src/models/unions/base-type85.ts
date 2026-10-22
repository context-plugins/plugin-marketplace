import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseType8Schema, type BaseType8 } from "../base-type8.js";
import { baseType81Schema, type BaseType81 } from "../base-type81.js";
import { baseType82Schema, type BaseType82 } from "../base-type82.js";
import { baseType83Schema, type BaseType83 } from "../base-type83.js";
import { baseType842Schema, type BaseType842 } from "./base-type842.js";

export type BaseType85 = BaseType8 | BaseType81 | BaseType82 | BaseType83 | BaseType842;

export const baseType85Schema: Schema<BaseType85> = s.of<BaseType85>(
  s.union([
    s.lazy(() => baseType8Schema),
    s.lazy(() => baseType81Schema),
    s.lazy(() => baseType82Schema),
    s.lazy(() => baseType83Schema),
    s.lazy(() => baseType842Schema),
  ]),
);
