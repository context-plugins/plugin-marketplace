import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reasoning mode. `enabled` forces reasoning, `disabled` suppresses it, and `adaptive` lets the
 * system decide.
 */
export const Type3 = {
  Enabled: "enabled",
  Disabled: "disabled",
  Adaptive: "adaptive",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
