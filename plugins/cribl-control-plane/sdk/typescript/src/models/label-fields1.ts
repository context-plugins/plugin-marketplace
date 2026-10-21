import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameFieldTypeSchema, type NameFieldType } from "./name-field-type.js";

/** Label configuration that reads values from a list of fields. */
export type LabelFields1 = {
  /** Type of label configuration. Always <code>list</code>. @default "list" */
  mode?: "list";
  /** Field references to attach as labels to each exported metric. */
  fields: NameFieldType[];
};

export const labelFields1Schema: Schema<LabelFields1> = s.object<LabelFields1>({
  mode: s.defaulted(s.literal("list"), "list"),
  fields: s.array(s.lazy(() => nameFieldTypeSchema)),
});
