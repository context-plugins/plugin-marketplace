import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1TlsInfo1Schema,
  type GoogleCloudApigeeV1TlsInfo1,
} from "./google-cloud-apigee-v1-tls-info1.js";
import { protocolSchema, type Protocol } from "./protocol.js";

/**
 * TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint
 * HTTPTargetConnections from concrete URLs for backend services.
 */
export type GoogleCloudApigeeV1TargetServer = {
  /**
   * Required. The port number this target connects to on the given host. Value must be between 1
   * and 65535, inclusive.
   */
  port?: number;
  /** Required. The resource id of this target server. */
  name?: string;
  /**
   * Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load
   * balancing configurations, and one or more TargetServers need to taken out of rotation
   * periodically. Defaults to true.
   */
  isEnabled?: boolean;
  /**
   * Optional. Specifies TLS configuration info for this TargetServer. The JSON name is `sSLInfo`
   * for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is
   * still used for TLS configuration.
   */
  sSlInfo?: GoogleCloudApigeeV1TlsInfo1;
  /**
   * Required. The host name this target connects to. Value must be a valid hostname as described by
   * RFC-1123.
   */
  host?: string;
  /** Immutable. The protocol used by this TargetServer. */
  protocol?: Protocol;
  /** Optional. A human-readable description of this TargetServer. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TargetServerSchema: Schema<GoogleCloudApigeeV1TargetServer> =
  s.object<GoogleCloudApigeeV1TargetServer>(
    {
      port: s.optional(s.int()),
      name: s.optional(s.string()),
      isEnabled: s.optional(s.boolean()),
      sSlInfo: s.optional(s.lazy(() => googleCloudApigeeV1TlsInfo1Schema)),
      host: s.optional(s.string()),
      protocol: s.optional(s.lazy(() => protocolSchema)),
      description: s.optional(s.string()),
      _keysMap: {
        sSlInfo: "sSLInfo",
      },
    },
    { additionalProperties: s.json() },
  );
