import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";

export type StatementPost = {
  /** Resource specifier strings */
  resources?: string[];
  /**
   * Targeted resources are the resources NOT in this list. The <code>resources</code> field must be
   * empty to use this field.
   */
  notResources?: string[];
  /** Actions to perform on a resource */
  actions?: string[];
  /**
   * Targeted actions are the actions NOT in this list. The <code>actions</code> field must be empty
   * to use this field.
   */
  notActions?: string[];
  /** Whether this statement should allow or deny actions on the resources. */
  effect: Effect;
};

export const statementPostSchema: Schema<StatementPost> = s.object<StatementPost>({
  resources: s.optional(s.array(s.string())),
  notResources: s.optional(s.array(s.string())),
  actions: s.optional(s.array(s.string())),
  notActions: s.optional(s.array(s.string())),
  effect: effectSchema,
});
