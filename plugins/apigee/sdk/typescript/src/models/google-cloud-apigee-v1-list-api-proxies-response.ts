import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiProxySchema,
  type GoogleCloudApigeeV1ApiProxy,
} from "./google-cloud-apigee-v1-api-proxy.js";

export type GoogleCloudApigeeV1ListApiProxiesResponse = {
  proxies?: GoogleCloudApigeeV1ApiProxy[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListApiProxiesResponseSchema: Schema<GoogleCloudApigeeV1ListApiProxiesResponse> =
  s.object<GoogleCloudApigeeV1ListApiProxiesResponse>(
    {
      proxies: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiProxySchema))),
    },
    { additionalProperties: s.json() },
  );
