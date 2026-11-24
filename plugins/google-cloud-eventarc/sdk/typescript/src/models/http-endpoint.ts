import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a HTTP endpoint destination. */
export type HttpEndpoint = {
  /**
   * Required. The URI of the HTTP endpoint. The value must be a RFC2396 URI string. Examples:
   * `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS
   * protocols are supported. The host can be either a static IP addressable from the VPC specified
   * by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.
   */
  uri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpEndpointSchema: Schema<HttpEndpoint> = s.object<HttpEndpoint>(
  {
    uri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
