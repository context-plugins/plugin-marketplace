import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolDefinition1Schema, type ToolDefinition1 } from "./tool-definition1.js";
import { agentsInfoSchema, type AgentsInfo } from "./unions/agents-info.js";
import { lastUpdatedCommentsSchema, type LastUpdatedComments } from "./unions/last-updated-comments.js";
import { promptsInfoSchema, type PromptsInfo } from "./unions/prompts-info.js";
import { serviceNameSchema, type ServiceName } from "./unions/service-name.js";

export type DaoToolResponse = {
  /** The name of the tool */
  name: string;
  /** The definition of the tool */
  definition: ToolDefinition1;
  /** Internal ID of the service to which the tool belongs */
  serviceId: number;
  /** The internal ID of the tool */
  id: number;
  /** Comments for the most recent edit to the tool. */
  lastUpdatedComments?: LastUpdatedComments;
  /** The name of the service to which the tool belongs */
  serviceName?: ServiceName;
  /** IDs and names of the prompts linked to the tool */
  promptsInfo?: PromptsInfo;
  /** IDs and names of the agents linked to the tool via a prompt */
  agentsInfo?: AgentsInfo;
  /** The timestamp of the most recent update to the tool */
  lastUpdated: Date;
  /** The email of the user who last updated the tool */
  lastUpdatedBy: string;
  /** Highest tools_history snapshot version for this tool; the tools row defaults to 1. */
  versionNumber: number;
};

export const daoToolResponseSchema: Schema<DaoToolResponse> = s.object<DaoToolResponse>({
  name: s.string(),
  definition: toolDefinition1Schema,
  serviceId: s.int(),
  id: s.int(),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedCommentsSchema)),
  serviceName: s.optional(s.lazy(() => serviceNameSchema)),
  promptsInfo: s.optional(s.lazy(() => promptsInfoSchema)),
  agentsInfo: s.optional(s.lazy(() => agentsInfoSchema)),
  lastUpdated: s.dateTime(),
  lastUpdatedBy: s.string(),
  versionNumber: s.int(),
  _keysMap: {
    serviceId: "service_id",
    lastUpdatedComments: "last_updated_comments",
    serviceName: "service_name",
    promptsInfo: "prompts_info",
    agentsInfo: "agents_info",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
    versionNumber: "version_number",
  },
});
