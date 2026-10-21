import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Leader connection details when the node is a Worker or Edge reporting upstream. */
export type HbLeaderInfo2 = {
  /** Leader hostname or IP address. */
  host: string;
  /** Leader TCP port. */
  port: number;
  /** TLS server name (SNI) for the Leader connection. */
  servername?: string;
  /** If <code>true</code>, TLS is enabled for the Leader connection. */
  tls?: boolean;
};

export const hbLeaderInfo2Schema: Schema<HbLeaderInfo2> = s.object<HbLeaderInfo2>({
  host: s.string(),
  port: s.int(),
  servername: s.optional(s.string()),
  tls: s.optional(s.boolean()),
});
