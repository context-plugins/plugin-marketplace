import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a single operation identifier extracted from the request payload. */
export type GoogleCloudApigeeV1PayloadOperation = {
  /**
   * Required. The operation name extracted from the request payload at runtime by the ParsePayload
   * policy. For example, for MCP protocol requests, this could be `"tools/list"` or
   * `"tools/call/get_weather"`. Wildcards are not supported.
   */
  operation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PayloadOperationSchema: Schema<GoogleCloudApigeeV1PayloadOperation> =
  s.object<GoogleCloudApigeeV1PayloadOperation>(
    {
      operation: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
