import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameFieldTypeSchema, type NameFieldType } from "./name-field-type.js";

/** Label configuration that reads key-value pairs from one object field. */
export type LabelFields = {
  /** Type of label configuration. Always <code>object</code>. @default "object" */
  mode?: "object";
  /** Reference to a field by its original text and parsed path segments. */
  field: NameFieldType;
};

export const labelFieldsSchema: Schema<LabelFields> = s.object<LabelFields>({
  mode: s.defaulted(s.literal("object"), "object"),
  field: nameFieldTypeSchema,
});
