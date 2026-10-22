import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A field used in a payment service */
export type Field = {
  /** The ID of the configured field. */
  key: string;
  /** The value of the configured field. */
  value: string;
};

export const fieldSchema: Schema<Field> = s.object<Field>({
  key: s.string(),
  value: s.string(),
});
