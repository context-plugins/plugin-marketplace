import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { annotationsInternalSchema, annotationsSchema, type Annotations } from "../annotations.js";

export type Annotations1 = Annotations;

export const annotations1InternalSchema: Schema<Annotations1> = s.of<Annotations1>(
  s.union([s.lazy(() => annotationsInternalSchema)]),
);

export const annotations1Schema: Schema<Annotations1> = s.lazySchema(() =>
  s.of<Annotations1>(s.union([s.lazy(() => annotationsSchema)])),
);
