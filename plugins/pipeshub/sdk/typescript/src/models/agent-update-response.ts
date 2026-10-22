import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentUpdateResponse = {
  /** @default "success" */
  status?: "success";
  message: string;
};

export const agentUpdateResponseSchema: Schema<AgentUpdateResponse> = s.object<AgentUpdateResponse>({
  status: s.defaulted(s.literal("success"), "success"),
  message: s.string(),
});
