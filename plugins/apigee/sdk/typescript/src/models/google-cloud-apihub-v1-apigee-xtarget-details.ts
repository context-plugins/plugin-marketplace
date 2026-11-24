import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1MetaData2Schema,
  type GoogleCloudApihubV1MetaData2,
} from "./google-cloud-apihub-v1-meta-data2.js";

/**
 * The target configuration for Apigee X. Note: If this API is called while an earlier deployment is
 * still in progress, the earlier deployment will be aborted and a new deployment will be triggered.
 */
export type GoogleCloudApihubV1ApigeeXTargetDetails = {
  /**
   * Required. The runtime project that hosts the Apigee X organization. This must be one of the
   * runtime projects attached to the API Hub host project.
   */
  targetProject?: string;
  /**
   * Required. This name identifies the proxy resource in Apigee. It typically follows a standard
   * alphanumeric format (e.g., "mcp-discovery-server").
   */
  proxy?: string;
  /** Required. The specific Apigee environment where the server will be deployed. */
  environment?: string;
  /** Output only. The revision number of the Apigee proxy that was deployed. */
  deployedRevision?: string;
  /** Optional. Metadata for the proxy configuration in Apigee X. */
  metadata?: GoogleCloudApihubV1MetaData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApigeeXTargetDetailsSchema: Schema<GoogleCloudApihubV1ApigeeXTargetDetails> =
  s.object<GoogleCloudApihubV1ApigeeXTargetDetails>(
    {
      targetProject: s.optional(s.string()),
      proxy: s.optional(s.string()),
      environment: s.optional(s.string()),
      deployedRevision: s.optional(s.string()),
      metadata: s.optional(s.lazy(() => googleCloudApihubV1MetaData2Schema)),
    },
    { additionalProperties: s.json() },
  );
