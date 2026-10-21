import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { target1Schema, type Target1 } from "./target1.js";

export type BaseType51 = {
  /** Population governed by this aggregate agent limit. */
  target?: Target1;
  /** Aggregate period without a client partition. */
  usageSelector?: Record<string, unknown>;
};

export const baseType51Schema: Schema<BaseType51> = s.object<BaseType51>({
  target: s.optional(s.lazy(() => target1Schema)),
  usageSelector: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    usageSelector: "usage_selector",
  },
});
