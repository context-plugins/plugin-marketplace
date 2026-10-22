import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode2Schema, type Mode2 } from "./mode2.js";

export type BaseType7 = {
  /** Finite remaining headroom. */
  mode?: Mode2;
  /** Remaining configured budget in decimal units. */
  remaining: string;
};

export const baseType7Schema: Schema<BaseType7> = s.object<BaseType7>({
  mode: s.optional(s.lazy(() => mode2Schema)),
  remaining: s.string(),
});
