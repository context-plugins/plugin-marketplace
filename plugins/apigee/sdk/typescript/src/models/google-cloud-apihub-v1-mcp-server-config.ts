import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApigeeXTargetDetails1Schema,
  type GoogleCloudApihubV1ApigeeXTargetDetails1,
} from "./google-cloud-apihub-v1-apigee-xtarget-details1.js";
import {
  googleCloudApihubV1McpToolConfigSchema,
  type GoogleCloudApihubV1McpToolConfig,
} from "./google-cloud-apihub-v1-mcp-tool-config.js";

/** MCP-specific server configuration. */
export type GoogleCloudApihubV1McpServerConfig = {
  /** Required. The tools to expose on the MCP server. */
  tools?: GoogleCloudApihubV1McpToolConfig[];
  /** Optional. The target Apigee X configuration. */
  apigeeXTargetDetails?: GoogleCloudApihubV1ApigeeXTargetDetails1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1McpServerConfigSchema: Schema<GoogleCloudApihubV1McpServerConfig> =
  s.object<GoogleCloudApihubV1McpServerConfig>(
    {
      tools: s.optional(s.array(s.lazy(() => googleCloudApihubV1McpToolConfigSchema))),
      apigeeXTargetDetails: s.optional(s.lazy(() => googleCloudApihubV1ApigeeXTargetDetails1Schema)),
    },
    { additionalProperties: s.json() },
  );
