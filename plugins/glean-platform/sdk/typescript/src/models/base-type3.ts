import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type BaseType3 = {
  /** Kind of governed population. */
  type?: Type2;
};

export const baseType3Schema: Schema<BaseType3> = s.object<BaseType3>({
  type: s.optional(s.lazy(() => type2Schema)),
});
