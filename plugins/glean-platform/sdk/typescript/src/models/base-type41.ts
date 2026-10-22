import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode1Schema, type Mode1 } from "./mode1.js";

export type BaseType41 = {
  /** Whether the limit has a finite cap or is unlimited. */
  mode?: Mode1;
};

export const baseType41Schema: Schema<BaseType41> = s.object<BaseType41>({
  mode: s.optional(s.lazy(() => mode1Schema)),
});
