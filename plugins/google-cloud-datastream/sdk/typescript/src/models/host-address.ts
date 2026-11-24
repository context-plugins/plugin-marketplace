import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A HostAddress represents a transport end point, which is the combination of an IP address or
 * hostname and a port number.
 */
export type HostAddress = {
  /** Required. Hostname for the connection. */
  hostname?: string;
  /** Optional. Port for the connection. */
  port?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hostAddressSchema: Schema<HostAddress> = s.object<HostAddress>(
  {
    hostname: s.optional(s.string()),
    port: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
