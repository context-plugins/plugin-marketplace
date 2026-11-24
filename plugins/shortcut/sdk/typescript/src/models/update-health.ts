import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type UpdateHealth = {
  /** The health status of the Epic. */
  status?: Status1;
  /** The description of the Health status. */
  text?: string;
};

export const updateHealthSchema: Schema<UpdateHealth> = s.object<UpdateHealth>({
  status: s.optional(s.lazy(() => status1Schema)),
  text: s.optional(s.string()),
});
