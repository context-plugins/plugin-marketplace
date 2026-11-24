import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1HttpOperation1Schema,
  type GoogleCloudApihubV1HttpOperation1,
} from "./google-cloud-apihub-v1-http-operation1.js";
import {
  googleCloudApihubV1HttpRequest2Schema,
  type GoogleCloudApihubV1HttpRequest2,
} from "./google-cloud-apihub-v1-http-request2.js";
import {
  googleCloudApihubV1HttpResponse2Schema,
  type GoogleCloudApihubV1HttpResponse2,
} from "./google-cloud-apihub-v1-http-response2.js";
import {
  googleCloudApihubV1PathParamSchema,
  type GoogleCloudApihubV1PathParam,
} from "./google-cloud-apihub-v1-path-param.js";
import {
  googleCloudApihubV1QueryParamSchema,
  type GoogleCloudApihubV1QueryParam,
} from "./google-cloud-apihub-v1-query-param.js";

/** An HTTP-based API Operation, sometimes called a "REST" Operation. */
export type GoogleCloudApihubV1HttpOperationDetails = {
  /** Optional. Query params of HttpOperation */
  queryParams?: Record<string, GoogleCloudApihubV1QueryParam>;
  /** Optional. Path params of HttpOperation */
  pathParams?: GoogleCloudApihubV1PathParam[];
  /** Optional. Response metadata. */
  response?: GoogleCloudApihubV1HttpResponse2;
  /** Optional. Request metadata. */
  request?: GoogleCloudApihubV1HttpRequest2;
  /** Required. An HTTP Operation. */
  httpOperation?: GoogleCloudApihubV1HttpOperation1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HttpOperationDetailsSchema: Schema<GoogleCloudApihubV1HttpOperationDetails> =
  s.object<GoogleCloudApihubV1HttpOperationDetails>(
    {
      queryParams: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1QueryParamSchema),
        ),
      ),
      pathParams: s.optional(s.array(s.lazy(() => googleCloudApihubV1PathParamSchema))),
      response: s.optional(s.lazy(() => googleCloudApihubV1HttpResponse2Schema)),
      request: s.optional(s.lazy(() => googleCloudApihubV1HttpRequest2Schema)),
      httpOperation: s.optional(s.lazy(() => googleCloudApihubV1HttpOperation1Schema)),
    },
    { additionalProperties: s.json() },
  );
