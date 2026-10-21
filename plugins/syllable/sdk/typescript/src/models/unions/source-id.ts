import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the source of the event (either a tool ID or a prompt ID) */
export type SourceId = string;

export const sourceIdSchema: Schema<SourceId> = s.of<SourceId>(s.union([s.string()]));
