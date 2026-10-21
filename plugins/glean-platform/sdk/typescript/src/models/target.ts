import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

/** Population governed by this client-scoped limit. */
export type Target = {
  /** Kind of client-scoped population. */
  type?: Type3;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  type: s.optional(s.lazy(() => type3Schema)),
});
