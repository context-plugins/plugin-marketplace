import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type7Schema, type Type7 } from "./type7.js";

export type BaseType81 = {
  /** User-specific policy. */
  type?: Type7;
};

export const baseType81Schema: Schema<BaseType81> = s.object<BaseType81>({
  type: s.optional(s.lazy(() => type7Schema)),
});
