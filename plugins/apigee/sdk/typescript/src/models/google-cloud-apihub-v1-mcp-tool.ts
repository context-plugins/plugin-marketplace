import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1OperationSchema1Schema,
  type GoogleCloudApihubV1OperationSchema1,
} from "./google-cloud-apihub-v1-operation-schema1.js";
import {
  googleCloudApihubV1OperationSchema3Schema,
  type GoogleCloudApihubV1OperationSchema3,
} from "./google-cloud-apihub-v1-operation-schema3.js";
import {
  googleCloudApihubV1ToolAnnotations2Schema,
  type GoogleCloudApihubV1ToolAnnotations2,
} from "./google-cloud-apihub-v1-tool-annotations2.js";

/** Details describing an MCP Tool. */
export type GoogleCloudApihubV1McpTool = {
  /** Optional. Description of what the tool does. */
  description?: string;
  /** Required. The name of the tool, unique within its parent scope (version). */
  name?: string;
  /** Optional. Input schema for the operation. This can be parsed only from MCP schema type. */
  inputSchema?: GoogleCloudApihubV1OperationSchema3;
  /** Optional. Optional title for the tool. */
  title?: string;
  /** Optional. Optional annotations for the tool. */
  annotations?: GoogleCloudApihubV1ToolAnnotations2;
  /** Optional. Output schema for the operation. This can be parsed only from MCP schema type. */
  outputSchema?: GoogleCloudApihubV1OperationSchema1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1McpToolSchema: Schema<GoogleCloudApihubV1McpTool> =
  s.object<GoogleCloudApihubV1McpTool>(
    {
      description: s.optional(s.string()),
      name: s.optional(s.string()),
      inputSchema: s.optional(s.lazy(() => googleCloudApihubV1OperationSchema3Schema)),
      title: s.optional(s.string()),
      annotations: s.optional(s.lazy(() => googleCloudApihubV1ToolAnnotations2Schema)),
      outputSchema: s.optional(s.lazy(() => googleCloudApihubV1OperationSchema1Schema)),
    },
    { additionalProperties: s.json() },
  );
