import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deletedSchema, type Deleted } from "./deleted.js";

export type AgentDeleteResponse = {
  /** @default "success" */
  status?: "success";
  message: string;
  deleted: Deleted;
};

export const agentDeleteResponseSchema: Schema<AgentDeleteResponse> = s.object<AgentDeleteResponse>({
  status: s.defaulted(s.literal("success"), "success"),
  message: s.string(),
  deleted: deletedSchema,
});
