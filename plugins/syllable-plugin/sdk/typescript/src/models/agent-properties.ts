import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of agent fields supported for filtering/sorting on list endpoint. */
export const AgentProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Description: "description",
  Label: "label",
  Labels: "labels",
  NameDescription: "name_description",
  Type: "type",
  Timezone: "timezone",
  PromptId: "prompt_id",
  PromptIdList: "prompt_id_list",
  CustomMessageId: "custom_message_id",
  Languages: "languages",
  Variables: "variables",
  PromptToolDefaults: "prompt_tool_defaults",
  ToolHeaders: "tool_headers",
  UpdatedAt: "updated_at",
  LastUpdatedBy: "last_updated_by",
  LifecycleStatus: "lifecycle_status",
} as const;
export type AgentProperties = (typeof AgentProperties)[keyof typeof AgentProperties] | (string & {});

export const agentPropertiesSchema: EnumSchema<AgentProperties> = s.enumOf<AgentProperties>(AgentProperties);
