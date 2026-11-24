import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { excludedClassSchema, type ExcludedClass } from "../excluded-class.js";

export type Excluded1 = ExcludedClass | boolean;

export const excluded1Schema: Schema<Excluded1> = s.of<Excluded1>(
  s.union([s.lazy(() => excludedClassSchema), s.boolean()]),
);
