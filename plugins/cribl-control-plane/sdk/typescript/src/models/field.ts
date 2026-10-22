import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldNameSchema, type FieldName } from "./field-name.js";

export type Field = {
  /** Name of the metadata field. */
  name: FieldName;
  /**
   * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate
   * to a constant.)
   */
  value: string;
};

export const fieldSchema: Schema<Field> = s.object<Field>({
  name: fieldNameSchema,
  value: s.string(),
});
