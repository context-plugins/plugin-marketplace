import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode3Schema, type Mode3 } from "./mode3.js";

export type BaseType71 = {
  /** Unlimited remaining headroom. */
  mode?: Mode3;
};

export const baseType71Schema: Schema<BaseType71> = s.object<BaseType71>({
  mode: s.optional(s.lazy(() => mode3Schema)),
});
