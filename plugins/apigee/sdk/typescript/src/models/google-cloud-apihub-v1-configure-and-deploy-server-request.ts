import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1McpServerConfig1Schema,
  type GoogleCloudApihubV1McpServerConfig1,
} from "./google-cloud-apihub-v1-mcp-server-config1.js";

/** Request message for ApiHub.ConfigureAndDeployServer. */
export type GoogleCloudApihubV1ConfigureAndDeployServerRequest = {
  /** MCP (Model Context Protocol) server configuration. */
  mcpServerConfig?: GoogleCloudApihubV1McpServerConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ConfigureAndDeployServerRequestSchema: Schema<GoogleCloudApihubV1ConfigureAndDeployServerRequest> =
  s.object<GoogleCloudApihubV1ConfigureAndDeployServerRequest>(
    {
      mcpServerConfig: s.optional(s.lazy(() => googleCloudApihubV1McpServerConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
