import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseType9 = {
  /** Explicit spend-client context; never inferred from the caller. */
  usageSelector?: Record<string, unknown>;
};

export const baseType9Schema: Schema<BaseType9> = s.object<BaseType9>({
  usageSelector: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    usageSelector: "usage_selector",
  },
});
