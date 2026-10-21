import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode8Schema, type Mode8 } from "./mode8.js";

/** Select the level of details for system metrics */
export type System1 = {
  /** Select the level of details for system metrics */
  mode?: Mode8;
  /** Generate metrics for all system information */
  detail?: boolean;
};

export const system1Schema: Schema<System1> = s.object<System1>({
  mode: s.optional(s.lazy(() => mode8Schema)),
  detail: s.optional(s.boolean()),
});
