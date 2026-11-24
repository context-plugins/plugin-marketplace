import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * JSON object response format.
 *
 * An older method of generating JSON responses. Using `json_schema` is recommended for models that
 * support it. Note that the model will not generate JSON without a system or user message
 * instructing it to do so.
 */
export type ResponseFormatJsonObject = {
  /** @default "json_object" */
  type?: "json_object";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseFormatJsonObjectSchema: Schema<ResponseFormatJsonObject> =
  s.object<ResponseFormatJsonObject>(
    {
      type: s.defaulted(s.literal("json_object"), "json_object"),
    },
    { additionalProperties: s.json() },
  );
