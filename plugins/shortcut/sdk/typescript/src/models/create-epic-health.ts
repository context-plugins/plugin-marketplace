import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type CreateEpicHealth = {
  /** The health status of the Epic. */
  status: Status;
  /** The description of the Health status. */
  text?: string;
};

export const createEpicHealthSchema: Schema<CreateEpicHealth> = s.object<CreateEpicHealth>({
  status: statusSchema,
  text: s.optional(s.string()),
});
