import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { contentdispositionSchema, type Contentdisposition } from "../contentdisposition.js";

export type Contentdisposition1 = Contentdisposition;

export const contentdisposition1Schema: Schema<Contentdisposition1> = s.of<Contentdisposition1>(
  s.union([s.lazy(() => contentdispositionSchema)]),
);
