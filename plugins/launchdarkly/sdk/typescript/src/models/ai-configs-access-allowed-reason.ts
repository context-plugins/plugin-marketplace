import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";

export type AiConfigsAccessAllowedReason = {
  /** Resource specifier strings */
  resources?: string[];
  /**
   * Targeted resources are the resources NOT in this list. The <code>resources</code> and
   * <code>notActions</code> fields must be empty to use this field.
   */
  notResources?: string[];
  /** Actions to perform on a resource */
  actions?: string[];
  /**
   * Targeted actions are the actions NOT in this list. The <code>actions</code> and
   * <code>notResources</code> fields must be empty to use this field.
   */
  notActions?: string[];
  /** Whether this statement should allow or deny actions on the resources. */
  effect: Effect;
  roleName?: string;
};

export const aiConfigsAccessAllowedReasonSchema: Schema<AiConfigsAccessAllowedReason> =
  s.object<AiConfigsAccessAllowedReason>({
    resources: s.optional(s.array(s.string())),
    notResources: s.optional(s.array(s.string())),
    actions: s.optional(s.array(s.string())),
    notActions: s.optional(s.array(s.string())),
    effect: effectSchema,
    roleName: s.optional(s.string()),
    _keysMap: {
      roleName: "role_name",
    },
  });
