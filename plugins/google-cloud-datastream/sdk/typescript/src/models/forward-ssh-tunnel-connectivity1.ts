import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Forward SSH tunnel connectivity. */
export type ForwardSshTunnelConnectivity1 = {
  /** Required. Hostname for the SSH tunnel. */
  hostname?: string;
  /** Required. Username for the SSH tunnel. */
  username?: string;
  /** Input only. SSH password. */
  password?: string;
  /** Port for the SSH tunnel, default value is 22. */
  port?: number;
  /** Input only. SSH private key. */
  privateKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forwardSshTunnelConnectivity1Schema: Schema<ForwardSshTunnelConnectivity1> =
  s.object<ForwardSshTunnelConnectivity1>(
    {
      hostname: s.optional(s.string()),
      username: s.optional(s.string()),
      password: s.optional(s.string()),
      port: s.optional(s.int()),
      privateKey: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
