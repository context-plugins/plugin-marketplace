import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DynamicScope = {
  /** The scope name. */
  name?: string;
  /** The scope value. */
  value?: string;
};

export const dynamicScopeSchema: Schema<DynamicScope> = s.object<DynamicScope>({
  name: s.optional(s.string()),
  value: s.optional(s.string()),
});
