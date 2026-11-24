import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SharedFlowSchema,
  type GoogleCloudApigeeV1SharedFlow,
} from "./google-cloud-apigee-v1-shared-flow.js";

export type GoogleCloudApigeeV1ListSharedFlowsResponse = {
  sharedFlows?: GoogleCloudApigeeV1SharedFlow[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSharedFlowsResponseSchema: Schema<GoogleCloudApigeeV1ListSharedFlowsResponse> =
  s.object<GoogleCloudApigeeV1ListSharedFlowsResponse>(
    {
      sharedFlows: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SharedFlowSchema))),
    },
    { additionalProperties: s.json() },
  );
