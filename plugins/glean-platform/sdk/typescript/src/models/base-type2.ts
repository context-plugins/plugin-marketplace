import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type BaseType2 = {
  /** Kind of governed population. */
  type?: Type1;
};

export const baseType2Schema: Schema<BaseType2> = s.object<BaseType2>({
  type: s.optional(s.lazy(() => type1Schema)),
});
