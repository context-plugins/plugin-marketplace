import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolDefinition1Schema, type ToolDefinition1 } from "./tool-definition1.js";

/** Request model to create a tool. */
export type ToolCreateRequest = {
  /** The name of the tool */
  name: string;
  /** The definition of the tool */
  definition: ToolDefinition1;
  /** Internal ID of the service to which the tool belongs */
  serviceId: number;
};

export const toolCreateRequestSchema: Schema<ToolCreateRequest> = s.object<ToolCreateRequest>({
  name: s.string(),
  definition: toolDefinition1Schema,
  serviceId: s.int(),
  _keysMap: {
    serviceId: "service_id",
  },
});
