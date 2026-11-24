import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1OperationConfig2Schema,
  type GoogleCloudApihubV1OperationConfig2,
} from "./google-cloud-apihub-v1-operation-config2.js";

/**
 * A tool exposed by the MCP server. Each tool wraps exactly one API Hub operation under a
 * caller-supplied identifier.
 */
export type GoogleCloudApihubV1McpToolConfig = {
  /**
   * Required. Caller-supplied identifier for the tool; each tool must have a unique identifier.
   * This will be by used by agents to invoke the tool. Tool ID must be unique across all tools in
   * the given MCP server configuration.
   */
  toolId?: string;
  /**
   * Required. Description of what the tool does and how it is used. Description serves as key
   * reference for the agent to know about the tool capabilities.
   */
  description?: string;
  /**
   * Required. The API Hub operation this tool exposes. Each tool wraps exactly one operation;
   * callers that want to expose multiple operations should declare multiple tools.
   */
  operation?: GoogleCloudApihubV1OperationConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1McpToolConfigSchema: Schema<GoogleCloudApihubV1McpToolConfig> =
  s.object<GoogleCloudApihubV1McpToolConfig>(
    {
      toolId: s.optional(s.string()),
      description: s.optional(s.string()),
      operation: s.optional(s.lazy(() => googleCloudApihubV1OperationConfig2Schema)),
    },
    { additionalProperties: s.json() },
  );
