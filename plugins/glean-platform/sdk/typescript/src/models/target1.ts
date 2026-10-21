import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

/** Population governed by this aggregate agent limit. */
export type Target1 = {
  /** Kind of aggregate agent population. */
  type?: Type4;
};

export const target1Schema: Schema<Target1> = s.object<Target1>({
  type: s.optional(s.lazy(() => type4Schema)),
});
