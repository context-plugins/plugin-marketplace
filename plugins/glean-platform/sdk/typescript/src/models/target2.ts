import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";

/** Concrete target being evaluated. */
export type Target2 = {
  /** Kind of target being evaluated. */
  type?: Type5;
};

export const target2Schema: Schema<Target2> = s.object<Target2>({
  type: s.optional(s.lazy(() => type5Schema)),
});
