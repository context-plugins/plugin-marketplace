import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode2Schema, type Mode2 } from "./mode2.js";

/** Select the level of detail for system metrics */
export type System = {
  /** Select the level of detail for system metrics */
  mode?: Mode2;
  /** Generate metrics for the numbers of processes in various states */
  processes?: boolean;
};

export const systemSchema: Schema<System> = s.object<System>({
  mode: s.optional(s.lazy(() => mode2Schema)),
  processes: s.optional(s.boolean()),
});
