import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { targetSchema, type Target } from "./target.js";

export type BaseType5 = {
  /** Population governed by this client-scoped limit. */
  target?: Target;
  /** Spend client and period for this limit. */
  usageSelector?: Record<string, unknown>;
};

export const baseType5Schema: Schema<BaseType5> = s.object<BaseType5>({
  target: s.optional(s.lazy(() => targetSchema)),
  usageSelector: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    usageSelector: "usage_selector",
  },
});
