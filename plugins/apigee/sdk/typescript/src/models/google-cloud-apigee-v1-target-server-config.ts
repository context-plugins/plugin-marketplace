import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1TlsInfoConfig1Schema,
  type GoogleCloudApigeeV1TlsInfoConfig1,
} from "./google-cloud-apigee-v1-tls-info-config1.js";
import { protocol1Schema, type Protocol1 } from "./protocol1.js";

export type GoogleCloudApigeeV1TargetServerConfig = {
  /** Port number for the target server. */
  port?: number;
  /**
   * Target server revision name in the following format:
   * `organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}`
   */
  name?: string;
  /** The protocol used by this target server. */
  protocol?: Protocol1;
  /** Host name of the target server. */
  host?: string;
  /** TLS settings for the target server. */
  tlsInfo?: GoogleCloudApigeeV1TlsInfoConfig1;
  /**
   * Whether the target server is enabled. An empty/omitted value for this field should be
   * interpreted as true.
   */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TargetServerConfigSchema: Schema<GoogleCloudApigeeV1TargetServerConfig> =
  s.object<GoogleCloudApigeeV1TargetServerConfig>(
    {
      port: s.optional(s.int()),
      name: s.optional(s.string()),
      protocol: s.optional(s.lazy(() => protocol1Schema)),
      host: s.optional(s.string()),
      tlsInfo: s.optional(s.lazy(() => googleCloudApigeeV1TlsInfoConfig1Schema)),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
