import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1HttpOperationConfig1Schema,
  type GoogleCloudApihubV1HttpOperationConfig1,
} from "./google-cloud-apihub-v1-http-operation-config1.js";

/**
 * Required. The API Hub operation this tool exposes. Each tool wraps exactly one operation; callers
 * that want to expose multiple operations should declare multiple tools.
 */
export type GoogleCloudApihubV1OperationConfig2 = {
  /**
   * Full API Hub operation resource name:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`
   */
  operation?: string;
  /** The HTTP operation config. */
  httpOperation?: GoogleCloudApihubV1HttpOperationConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1OperationConfig2Schema: Schema<GoogleCloudApihubV1OperationConfig2> =
  s.object<GoogleCloudApihubV1OperationConfig2>(
    {
      operation: s.optional(s.string()),
      httpOperation: s.optional(s.lazy(() => googleCloudApihubV1HttpOperationConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
