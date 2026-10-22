import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseTypeSchema, type BaseType } from "../base-type.js";

export type BaseType1 = BaseType;

export const baseType1Schema: Schema<BaseType1> = s.of<BaseType1>(s.union([s.lazy(() => baseTypeSchema)]));
