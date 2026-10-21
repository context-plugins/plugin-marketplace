import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseType84Schema, type BaseType84 } from "../base-type84.js";
import { baseType841Schema, type BaseType841 } from "../base-type841.js";

export type BaseType842 = BaseType84 | BaseType841;

export const baseType842Schema: Schema<BaseType842> = s.of<BaseType842>(
  s.union([s.lazy(() => baseType84Schema), s.lazy(() => baseType841Schema)]),
);
