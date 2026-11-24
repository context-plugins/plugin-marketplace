import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { truncationSchema, type Truncation } from "../truncation.js";

export type Truncation1 = Truncation;

export const truncation1Schema: Schema<Truncation1> = s.of<Truncation1>(
  s.union([s.lazy(() => truncationSchema)]),
);
