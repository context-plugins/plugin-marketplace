import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SubagentEventId = string;

export const subagentEventIdSchema: Schema<SubagentEventId> = s.of<SubagentEventId>(s.union([s.string()]));
