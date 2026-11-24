import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Input schema for the operation. This can be parsed only from MCP schema type. */
export type GoogleCloudApihubV1OperationSchema3 = {
  /**
   * The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported
   * right now.
   */
  jsonSchema?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1OperationSchema3Schema: Schema<GoogleCloudApihubV1OperationSchema3> =
  s.object<GoogleCloudApihubV1OperationSchema3>(
    {
      jsonSchema: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
