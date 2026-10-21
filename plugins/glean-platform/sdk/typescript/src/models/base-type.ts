import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type BaseType = {
  /** Kind of governed population. */
  type?: Type;
};

export const baseTypeSchema: Schema<BaseType> = s.object<BaseType>({
  type: s.optional(s.lazy(() => typeSchema)),
});
