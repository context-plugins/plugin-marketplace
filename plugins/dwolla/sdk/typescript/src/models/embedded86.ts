import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelSchema, type Label } from "./label.js";

export type Embedded86 = {
  labels?: Label[];
};

export const embedded86Schema: Schema<Embedded86> = s.object<Embedded86>({
  labels: s.optional(s.array(s.lazy(() => labelSchema))),
});
