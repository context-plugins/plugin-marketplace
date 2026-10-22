import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelSchema, type Label } from "./label.js";

export type LabelAnnotations = {
  labels?: Label[];
};

export const labelAnnotationsSchema: Schema<LabelAnnotations> = s.object<LabelAnnotations>({
  labels: s.optional(s.array(s.lazy(() => labelSchema))),
});
