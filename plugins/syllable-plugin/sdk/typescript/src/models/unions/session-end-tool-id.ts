import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the optional session end tool associated with the prompt */
export type SessionEndToolId = number;

export const sessionEndToolIdSchema: Schema<SessionEndToolId> = s.of<SessionEndToolId>(s.union([s.int()]));
