import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single internal contextual-metadata operation. */
export type AdminContextOperation = {
  /** The context key to operate on. */
  name: string;
  /** The value(s) to apply for the context key. */
  value?: string[];
  /** The value type of the context entry. */
  type?: string;
  /** The operation to apply to the context key (for example, "+" to add or "-" to remove). */
  op?: string;
};

export const adminContextOperationSchema: Schema<AdminContextOperation> = s.object<AdminContextOperation>({
  name: s.string(),
  value: s.optional(s.array(s.string())),
  type: s.optional(s.string()),
  op: s.optional(s.string()),
});
