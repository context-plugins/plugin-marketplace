import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskExternalId = string;

export const taskExternalIdSchema: Schema<TaskExternalId> = s.of<TaskExternalId>(s.union([s.string()]));
