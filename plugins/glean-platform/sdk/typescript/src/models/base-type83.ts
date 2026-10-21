import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type9Schema, type Type9 } from "./type9.js";

export type BaseType83 = {
  /** Inherited department policy. */
  type?: Type9;
};

export const baseType83Schema: Schema<BaseType83> = s.object<BaseType83>({
  type: s.optional(s.lazy(() => type9Schema)),
});
