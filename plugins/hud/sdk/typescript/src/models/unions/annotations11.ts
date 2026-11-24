import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolAnnotationsSchema, type ToolAnnotations } from "../tool-annotations.js";

export type Annotations11 = ToolAnnotations;

export const annotations11Schema: Schema<Annotations11> = s.of<Annotations11>(
  s.union([s.lazy(() => toolAnnotationsSchema)]),
);
