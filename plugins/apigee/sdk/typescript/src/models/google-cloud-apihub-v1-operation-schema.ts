import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The operation schema needed for an operation. */
export type GoogleCloudApihubV1OperationSchema = {
  /**
   * The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported
   * right now.
   */
  jsonSchema?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1OperationSchemaSchema: Schema<GoogleCloudApihubV1OperationSchema> =
  s.object<GoogleCloudApihubV1OperationSchema>(
    {
      jsonSchema: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
