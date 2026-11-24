import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1HttpOperationConfig1Schema,
  type GoogleCloudApihubV1HttpOperationConfig1,
} from "./google-cloud-apihub-v1-http-operation-config1.js";

/** API hub Operation config. */
export type GoogleCloudApihubV1OperationConfig = {
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

export const googleCloudApihubV1OperationConfigSchema: Schema<GoogleCloudApihubV1OperationConfig> =
  s.object<GoogleCloudApihubV1OperationConfig>(
    {
      operation: s.optional(s.string()),
      httpOperation: s.optional(s.lazy(() => googleCloudApihubV1HttpOperationConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
