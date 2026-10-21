import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";

export type BaseType4 = {
  /** Whether the limit has a finite cap or is unlimited. */
  mode?: Mode;
};

export const baseType4Schema: Schema<BaseType4> = s.object<BaseType4>({
  mode: s.optional(s.lazy(() => modeSchema)),
});
