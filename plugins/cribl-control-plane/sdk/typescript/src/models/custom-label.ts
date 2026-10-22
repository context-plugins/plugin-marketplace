import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomLabel = {
  /** Key */
  key: string;
  /** Value */
  value: string;
  /** Designate this label for role-based access control and filtering */
  rbacEnabled?: boolean;
};

export const customLabelSchema: Schema<CustomLabel> = s.object<CustomLabel>({
  key: s.string(),
  value: s.string(),
  rbacEnabled: s.optional(s.boolean()),
});
