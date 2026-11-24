import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Port/endpoint configuration for this cluster */
export type EndpointConfig2 = {
  /**
   * Output only. The map of port descriptions to URLs. Will only be populated if
   * enable_http_port_access is true.
   */
  httpPorts?: Record<string, string>;
  /**
   * Optional. If true, enable http access to specific ports on the cluster from external sources.
   * Defaults to false.
   */
  enableHttpPortAccess?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const endpointConfig2Schema: Schema<EndpointConfig2> = s.object<EndpointConfig2>(
  {
    httpPorts: s.optional(s.record(s.string(), s.string())),
    enableHttpPortAccess: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
