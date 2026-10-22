import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type BaseType82 = {
  /** Agent-specific policy. */
  type?: Type8;
};

export const baseType82Schema: Schema<BaseType82> = s.object<BaseType82>({
  type: s.optional(s.lazy(() => type8Schema)),
});
