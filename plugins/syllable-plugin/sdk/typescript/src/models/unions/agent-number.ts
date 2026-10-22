import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Agent number associated with the uploaded file */
export type AgentNumber = string;

export const agentNumberSchema: Schema<AgentNumber> = s.of<AgentNumber>(s.union([s.string()]));
