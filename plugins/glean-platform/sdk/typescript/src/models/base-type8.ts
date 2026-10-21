import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type6Schema, type Type6 } from "./type6.js";

export type BaseType8 = {
  /** Organization or inherited default policy. */
  type?: Type6;
};

export const baseType8Schema: Schema<BaseType8> = s.object<BaseType8>({
  type: s.optional(s.lazy(() => type6Schema)),
});
