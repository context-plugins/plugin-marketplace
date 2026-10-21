import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseType5Schema, type BaseType5 } from "../base-type5.js";
import { baseType51Schema, type BaseType51 } from "../base-type51.js";

export type BaseType52 = BaseType5 | BaseType51;

export const baseType52Schema: Schema<BaseType52> = s.of<BaseType52>(
  s.union([s.lazy(() => baseType5Schema), s.lazy(() => baseType51Schema)]),
);
