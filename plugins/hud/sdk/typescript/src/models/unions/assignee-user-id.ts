import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AssigneeUserId = string;

export const assigneeUserIdSchema: Schema<AssigneeUserId> = s.of<AssigneeUserId>(s.union([s.string()]));
