import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HostOsTypeHeartbeatMetadata = {
  /** Network addresses reported by the host operating system. */
  addresses: string[];
  /**
   * If <code>true</code>, the host operating system metadata collector is enabled on the node.
   * Otherwise, <code>false</code>.
   */
  enabled: boolean;
  /** Host operating system distribution name. */
  id: string;
  /** Host operating system version. */
  version: string;
};

export const hostOsTypeHeartbeatMetadataSchema: Schema<HostOsTypeHeartbeatMetadata> =
  s.object<HostOsTypeHeartbeatMetadata>({
    addresses: s.array(s.string()),
    enabled: s.boolean(),
    id: s.string(),
    version: s.string(),
  });
