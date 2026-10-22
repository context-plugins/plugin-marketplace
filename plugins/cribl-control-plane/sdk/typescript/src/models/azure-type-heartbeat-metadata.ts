import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AzureTypeHeartbeatMetadata = {
  /**
   * If <code>true</code>, the Azure metadata collector is enabled on the node. Otherwise,
   * <code>false</code>.
   */
  enabled: boolean;
  /** Azure VM hostname. */
  hostname?: string;
  /** Azure instance ID. */
  instanceId?: string;
  /** Azure VM name. */
  name?: string;
  /** Azure location or region. */
  region?: string;
  /** Azure resource group name. */
  resourceGroup?: string;
  /** Azure subscription ID. */
  subscriptionId?: string;
  /** Azure tags, if available. */
  tags?: Record<string, string>;
  /** Azure VM size or instance type. */
  type?: string;
  /** Azure VM ID. */
  vmId?: string;
  /** Azure availability zone. */
  zone?: string;
};

export const azureTypeHeartbeatMetadataSchema: Schema<AzureTypeHeartbeatMetadata> =
  s.object<AzureTypeHeartbeatMetadata>({
    enabled: s.boolean(),
    hostname: s.optional(s.string()),
    instanceId: s.optional(s.string()),
    name: s.optional(s.string()),
    region: s.optional(s.string()),
    resourceGroup: s.optional(s.string()),
    subscriptionId: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
    type: s.optional(s.string()),
    vmId: s.optional(s.string()),
    zone: s.optional(s.string()),
  });
