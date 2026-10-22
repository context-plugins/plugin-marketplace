import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolDefinition2Schema, type ToolDefinition2 } from "./tool-definition2.js";
import { comments5Schema, type Comments5 } from "./unions/comments5.js";
import { deletedReason2Schema, type DeletedReason2 } from "./unions/deleted-reason2.js";
import { serviceName2Schema, type ServiceName2 } from "./unions/service-name2.js";

/** API response for one row in GET /tools/{tool_id}/history. */
export type ToolHistoryResponse = {
  /** ID of the tool */
  toolId: number;
  /** Monotonic version for this tool (1 = oldest) */
  versionNumber: number;
  /** When this version took effect. */
  createdAt: Date;
  /** User who made the change that produced this row */
  updatedBy: string;
  /** Optional comment stored on the tool for this version */
  comments?: Comments5;
  /** What produced this row: create, update, or delete */
  operation: string;
  /** When operation is delete, reason copied from the tool at delete time */
  deletedReason?: DeletedReason2;
  /** Internal ID of the service this tool belonged to at this version */
  serviceId: number;
  /** Service display name. */
  serviceName?: ServiceName2;
  /** Tool name at this version */
  name: string;
  /** Human-readable description of the tool at this version */
  description: string;
  /** Tool type at this version: 'action', 'endpoint', 'context', or 'log' */
  type: string;
  /** Full tool definition for this version (same shape as ToolResponse.definition). */
  definition: ToolDefinition2;
};

export const toolHistoryResponseSchema: Schema<ToolHistoryResponse> = s.object<ToolHistoryResponse>({
  toolId: s.int(),
  versionNumber: s.int(),
  createdAt: s.dateTime(),
  updatedBy: s.string(),
  comments: s.optional(s.lazy(() => comments5Schema)),
  operation: s.string(),
  deletedReason: s.optional(s.lazy(() => deletedReason2Schema)),
  serviceId: s.int(),
  serviceName: s.optional(s.lazy(() => serviceName2Schema)),
  name: s.string(),
  description: s.string(),
  type: s.string(),
  definition: toolDefinition2Schema,
  _keysMap: {
    toolId: "tool_id",
    versionNumber: "version_number",
    createdAt: "created_at",
    updatedBy: "updated_by",
    deletedReason: "deleted_reason",
    serviceId: "service_id",
    serviceName: "service_name",
  },
});
