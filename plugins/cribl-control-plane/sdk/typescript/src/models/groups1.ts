import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Groups1 = {
  /** Name of the group. */
  name: string;
  /** Brief description of the group. */
  description?: string;
  /** Disable all items in the group. */
  disabled?: boolean;
};

export const groups1Schema: Schema<Groups1> = s.object<Groups1>({
  name: s.string(),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
});
