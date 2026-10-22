import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VoidableField = {
  key: string;
  /** The value of the field. Send an empty string to clear it. */
  value: string;
};

export const voidableFieldSchema: Schema<VoidableField> = s.object<VoidableField>({
  key: s.string(),
  value: s.string(),
});
