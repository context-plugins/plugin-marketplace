import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Command ID for tracking installation progress */
export type CommandId = string;

export const commandIdSchema: Schema<CommandId> = s.of<CommandId>(s.union([s.string()]));
