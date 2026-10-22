import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OsTypeHeartbeatMetadata = {
  /** Network addresses reported by the operating system. */
  addresses: string[];
  /**
   * If <code>true</code>, the operating system metadata collector is enabled on the node.
   * Otherwise, <code>false</code>.
   */
  enabled: boolean;
  /** Operating system distribution name. */
  id: string;
  /** Operating system version. */
  version: string;
};

export const osTypeHeartbeatMetadataSchema: Schema<OsTypeHeartbeatMetadata> =
  s.object<OsTypeHeartbeatMetadata>({
    addresses: s.array(s.string()),
    enabled: s.boolean(),
    id: s.string(),
    version: s.string(),
  });
