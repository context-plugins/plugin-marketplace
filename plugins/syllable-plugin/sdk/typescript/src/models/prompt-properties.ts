import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of prompt fields supported for filtering/sorting on list endpoint. */
export const PromptProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Description: "description",
  NameDescription: "name_description",
  Context: "context",
  Tools: "tools",
  LlmConfig: "llm_config",
  LastUpdated: "last_updated",
  LastUpdatedBy: "last_updated_by",
  AgentCount: "agent_count",
  SessionEndEnabled: "session_end_enabled",
  LifecycleStatus: "lifecycle_status",
} as const;
export type PromptProperties = (typeof PromptProperties)[keyof typeof PromptProperties] | (string & {});

export const promptPropertiesSchema: EnumSchema<PromptProperties> =
  s.enumOf<PromptProperties>(PromptProperties);
