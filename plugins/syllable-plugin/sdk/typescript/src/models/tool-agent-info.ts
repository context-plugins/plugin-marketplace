import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about an agent linked to a tool via a prompt. */
export type ToolAgentInfo = {
  /** The internal ID of the agent */
  id: number;
  /** The name of the agent */
  name: string;
};

export const toolAgentInfoSchema: Schema<ToolAgentInfo> = s.object<ToolAgentInfo>({
  id: s.int(),
  name: s.string(),
});
