import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Path2Schema,
  type GoogleCloudApihubV1Path2,
} from "./google-cloud-apihub-v1-path2.js";
import { methodSchema, type Method } from "./method.js";

/** The HTTP Operation. */
export type GoogleCloudApihubV1HttpOperation = {
  /**
   * Optional. The path details for the Operation. Note: Even though this field is optional, it is
   * required for CreateApiOperation API and we will fail the request if not provided.
   */
  path?: GoogleCloudApihubV1Path2;
  /**
   * Optional. Operation method Note: Even though this field is optional, it is required for
   * CreateApiOperation API and we will fail the request if not provided.
   */
  method?: Method;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HttpOperationSchema: Schema<GoogleCloudApihubV1HttpOperation> =
  s.object<GoogleCloudApihubV1HttpOperation>(
    {
      path: s.optional(s.lazy(() => googleCloudApihubV1Path2Schema)),
      method: s.optional(s.lazy(() => methodSchema)),
    },
    { additionalProperties: s.json() },
  );
