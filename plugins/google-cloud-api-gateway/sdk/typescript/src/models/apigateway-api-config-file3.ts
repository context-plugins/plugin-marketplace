import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The OpenAPI Specification document file. */
export type ApigatewayApiConfigFile3 = {
  /** The bytes that constitute the file. */
  contents?: string;
  /**
   * The file path (full or relative path). This is typically the path of the file when it is
   * uploaded.
   */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayApiConfigFile3Schema: Schema<ApigatewayApiConfigFile3> =
  s.object<ApigatewayApiConfigFile3>(
    {
      contents: s.optional(s.string()),
      path: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
