import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrustPolicyStatement = {
  /** The effect of trust policy statement */
  effect?: string;
  /** The action of trust policy statement */
  action?: string[];
  /** The principal of trust policy statement */
  principal?: Record<string, unknown>;
  /** The condition of trust policy statement */
  condition?: Record<string, unknown>;
};

export const trustPolicyStatementSchema: Schema<TrustPolicyStatement> = s.object<TrustPolicyStatement>({
  effect: s.optional(s.string()),
  action: s.optional(s.array(s.string())),
  principal: s.optional(s.record(s.string(), s.unknown())),
  condition: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    effect: "Effect",
    action: "Action",
    principal: "Principal",
    condition: "Condition",
  },
});
