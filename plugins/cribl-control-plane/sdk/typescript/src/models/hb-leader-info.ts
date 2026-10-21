import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Connection parameters for the Leader Node, as reported in a Worker heartbeat. */
export type HbLeaderInfo = {
  /** Leader hostname or IP address. */
  host: string;
  /** Leader TCP port. */
  port: number;
  /** TLS server name (SNI) for the Leader connection. */
  servername?: string;
  /** If <code>true</code>, TLS is enabled for the Leader connection. */
  tls?: boolean;
};

export const hbLeaderInfoSchema: Schema<HbLeaderInfo> = s.object<HbLeaderInfo>({
  host: s.string(),
  port: s.int(),
  servername: s.optional(s.string()),
  tls: s.optional(s.boolean()),
});
