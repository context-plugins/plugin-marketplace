import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolDefinition1Schema, type ToolDefinition1 } from "./tool-definition1.js";
import { lastUpdatedCommentsSchema, type LastUpdatedComments } from "./unions/last-updated-comments.js";

/** Request model to update an existing tool. */
export type ToolUpdateRequest = {
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
};

export const toolUpdateRequestSchema: Schema<ToolUpdateRequest> = s.object<ToolUpdateRequest>({
  name: s.string(),
  definition: toolDefinition1Schema,
  serviceId: s.int(),
  id: s.int(),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedCommentsSchema)),
  _keysMap: {
    serviceId: "service_id",
    lastUpdatedComments: "last_updated_comments",
  },
});
