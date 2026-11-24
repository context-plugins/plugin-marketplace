import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { weightInternalSchema, weightSchema, type Weight } from "../weight.js";
import { weight1InternalSchema, weight1Schema, type Weight1 } from "../weight1.js";

export type Weight2 = Weight | Weight1;

export const weight2InternalSchema: Schema<Weight2> = s.of<Weight2>(
  s.union([s.lazy(() => weightInternalSchema), s.lazy(() => weight1InternalSchema)]),
);

export const weight2Schema: Schema<Weight2> = s.lazySchema(() =>
  s.of<Weight2>(s.union([s.lazy(() => weightSchema), s.lazy(() => weight1Schema)])),
);
