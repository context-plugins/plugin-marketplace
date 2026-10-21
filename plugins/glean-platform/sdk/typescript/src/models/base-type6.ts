import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { target2Schema, type Target2 } from "./target2.js";

export type BaseType6 = {
  /** Explicit spend-client context for evaluation. */
  usageSelector?: Record<string, unknown>;
  /** Concrete target being evaluated. */
  target?: Target2;
};

export const baseType6Schema: Schema<BaseType6> = s.object<BaseType6>({
  usageSelector: s.optional(s.record(s.string(), s.unknown())),
  target: s.optional(s.lazy(() => target2Schema)),
  _keysMap: {
    usageSelector: "usage_selector",
  },
});
