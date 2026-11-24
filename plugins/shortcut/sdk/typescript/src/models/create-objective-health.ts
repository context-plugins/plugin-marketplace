import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  status1ShortcutObjectivesApiSchema,
  type Status1ShortcutObjectivesApi,
} from "./status1-shortcut-objectives-api.js";

export type CreateObjectiveHealth = {
  /** The health status of the Objective. */
  status: Status1ShortcutObjectivesApi;
  /** The description of the Health status. */
  text?: string;
};

export const createObjectiveHealthSchema: Schema<CreateObjectiveHealth> = s.object<CreateObjectiveHealth>({
  status: status1ShortcutObjectivesApiSchema,
  text: s.optional(s.string()),
});
