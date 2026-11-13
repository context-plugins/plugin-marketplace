import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type UpdateHealth = {
  /** The health status of the Epic. */
  status?: Status;
  /** The description of the Health status. */
  text?: string;
};

export const updateHealthSchema: Schema<UpdateHealth> = s.object<UpdateHealth>({
  status: s.optional(s.lazy(() => statusSchema)),
  text: s.optional(s.string()),
});
