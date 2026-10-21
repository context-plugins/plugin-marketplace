import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { labelFieldsSchema, type LabelFields } from "../label-fields.js";
import { labelFields1Schema, type LabelFields1 } from "../label-fields1.js";

/**
 * Field references to attach as labels to each exported metric. Specify one field or a list of
 * fields.
 */
export type LabelFields2 = LabelFields | LabelFields1;

export const labelFields2Schema: Schema<LabelFields2> = s.of<LabelFields2>(
  s.union([s.lazy(() => labelFieldsSchema), s.lazy(() => labelFields1Schema)]),
);
