import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Documentation8Schema,
  type GoogleCloudApihubV1Documentation8,
} from "./google-cloud-apihub-v1-documentation8.js";
import {
  googleCloudApihubV1HttpOperationSchema,
  type GoogleCloudApihubV1HttpOperation,
} from "./google-cloud-apihub-v1-http-operation.js";
import {
  googleCloudApihubV1McpTool2Schema,
  type GoogleCloudApihubV1McpTool2,
} from "./google-cloud-apihub-v1-mcp-tool2.js";

/** The operation details parsed from the spec. */
export type GoogleCloudApihubV1OperationDetails = {
  /**
   * Optional. Description of the operation behavior. For OpenAPI spec, this will map to
   * `operation.description` in the spec, in case description is empty, `operation.summary` will be
   * used.
   */
  description?: string;
  /** The HTTP Operation. */
  httpOperation?: GoogleCloudApihubV1HttpOperation;
  /**
   * Optional. For OpenAPI spec, this will be set if `operation.deprecated`is marked as `true` in
   * the spec.
   */
  deprecated?: boolean;
  /**
   * Optional. Additional external documentation for this operation. For OpenAPI spec, this will map
   * to `operation.documentation` in the spec.
   */
  documentation?: GoogleCloudApihubV1Documentation8;
  /** The MCP Tool Operation. */
  mcpTool?: GoogleCloudApihubV1McpTool2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1OperationDetailsSchema: Schema<GoogleCloudApihubV1OperationDetails> =
  s.object<GoogleCloudApihubV1OperationDetails>(
    {
      description: s.optional(s.string()),
      httpOperation: s.optional(s.lazy(() => googleCloudApihubV1HttpOperationSchema)),
      deprecated: s.optional(s.boolean()),
      documentation: s.optional(s.lazy(() => googleCloudApihubV1Documentation8Schema)),
      mcpTool: s.optional(s.lazy(() => googleCloudApihubV1McpTool2Schema)),
    },
    { additionalProperties: s.json() },
  );
