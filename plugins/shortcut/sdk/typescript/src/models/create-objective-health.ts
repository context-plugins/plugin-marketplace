import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type CreateObjectiveHealth = {
  /** The health status of the Objective. */
  status: Status1;
  /** The description of the Health status. */
  text?: string;
};

export const createObjectiveHealthSchema: Schema<CreateObjectiveHealth> = s.object<CreateObjectiveHealth>({
  status: status1Schema,
  text: s.optional(s.string()),
});
