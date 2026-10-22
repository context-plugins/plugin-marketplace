import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configGroupCloud1Schema, type ConfigGroupCloud1 } from "./config-group-cloud1.js";
import { configGroupLookupsSchema, type ConfigGroupLookups } from "./config-group-lookups.js";
import {
  estimatedIngestRateOptionsConfigGroupSchema,
  type EstimatedIngestRateOptionsConfigGroup,
} from "./estimated-ingest-rate-options-config-group.js";
import { gitSchema, type Git } from "./git.js";
import { typeOptionsConfigGroupSchema, type TypeOptionsConfigGroup } from "./type-options-config-group.js";

/** Configuration settings and dynamic status for a Worker Group, Outpost Group, or Edge Fleet. */
export type ConfigGroup = {
  /**
   * Fleet or group id this entity was inherited from when served by a Config Helper for a child
   * fleet. Present when inherited from parent, including when the child has a local overlay.
   * Omitted when the entity is local and not inherited. Display-only; never persisted.
   */
  srcGroup?: string;
  /**
   * If true, the child fleet has a local overlay on an inherited entity. Omitted when inherited and
   * unmodified, or when local and not inherited. Display-only; never persisted.
   */
  srcOverridden?: boolean;
  /** Cloud provider and region details for a Cribl.Cloud Worker Group. */
  cloud?: ConfigGroupCloud1;
  /**
   * Keeps Collector jobs running if the Leader Node fails. Applies only to Stream Worker Groups.
   * Always <code>true</code> for Cribl.Cloud groups; defaults to <code>false</code> for on-prem
   * groups. to Stream Worker Groups. Always <code>true</code> for Cribl.Cloud groups; defaults to
   * <code>false</code> for on-prem groups.
   */
  collectorsHaEnabled?: boolean;
  /**
   * Commit hash of the deployed configuration version for the Worker Group, Outpost Group, or Edge
   * Fleet. Automatically populated and returned in responses.<br/><br/> **Warning**: Do not change
   * the value of <code>configVersion</code> in the body of PATCH requests. The PATCH request body
   * must include the value as it appears in the <code>GET /products/{product}/groups/{id}</code>
   * response.
   */
  configVersion?: string;
  /**
   * Number of Workers or Nodes that are currently deploying the latest configuration
   * version.<br/><br/> **Warning**: Do not change the value of <code>deployingWorkerCount</code> in
   * the body of PATCH requests. The PATCH request body must include the value as it appears in the
   * <code>GET /products/{product}/groups/{id}</code> response.
   */
  deployingWorkerCount?: number;
  /** Brief description of the Worker Group, Outpost Group, or Edge Fleet. */
  description?: string;
  /** Estimated ingest rate for a Cribl.Cloud Worker Group, in GB/sec. */
  estimatedIngestRate?: EstimatedIngestRateOptionsConfigGroup;
  /**
   * Git status of the Worker Group, Outpost Group, or Edge Fleet configuration. Automatically
   * populated and returned in responses.
   */
  git?: Git;
  /** Unique identifier. */
  id: string;
  /**
   * Number of Workers or Nodes running a Cribl version that is incompatible with the current
   * upgrade target.<br/><br/> **Warning**: Do not change the value of
   * <code>incompatibleWorkerCount</code> in the body of PATCH requests. The PATCH request body must
   * include the value as it appears in the <code>GET /products/{product}/groups/{id}</code>
   * response.
   */
  incompatibleWorkerCount?: number;
  /**
   * The <code>id</code> of the parent Edge Fleet. If provided, this Fleet inherits configuration
   * from the specified parent Fleet. Applies only to Edge Fleets.
   */
  inherits?: string;
  /**
   * Indicates whether this is an Edge Fleet. Deprecated. Use to identify Edge Fleets.
   *
   * @deprecated
   */
  isFleet?: boolean;
  /**
   * Indicates whether this is an internal Search Group. Deprecated. Use to identify Search Groups.
   *
   * @deprecated
   */
  isSearch?: boolean;
  /**
   * Lookup deployment status per Worker or Node context.<br/><br/> **Warning**: Do not change the
   * value of <code>lookupDeployments</code> in the body of PATCH requests. The PATCH request body
   * must include the value as it appears in the <code>GET /products/{product}/groups/{id}</code>
   * response.
   */
  lookupDeployments?: ConfigGroupLookups[];
  /**
   * Maximum duration a Worker or Node can remain disconnected before the Leader removes it. The
   * value is a numeral with units, such as <code>8h</code>, <code>5d</code>, <code>1w</code>.
   */
  maxWorkerAge?: string;
  /** Name of the Worker Group, Outpost Group, or Edge Fleet. */
  name?: string;
  /**
   * If <code>true</code>, the Worker Group, Outpost Group, or Edge Fleet uses customer-hosted
   * (on-prem) workers. If <code>false</code>, the Worker Group, Outpost Group, or Edge Fleet is
   * managed in Cribl.Cloud.
   */
  onPrem?: boolean;
  /**
   * If <code>true</code>, the Cribl.Cloud Worker Group has active Workers provisioned. Applies only
   * to Cribl.Cloud Worker Groups.
   */
  provisioned?: boolean;
  /**
   * Metadata tags attached to the Worker Group, Outpost Group, or Edge Fleet for categorization,
   * filtering, and tag-based routing and policy application. Useful for organizing Groups and
   * Fleets and enabling tag-driven workflows in Cribl.
   */
  streamtags?: string[];
  /**
   * Legacy system-level tags associated with the Worker Group, Outpost Group, or Edge Fleet. Use
   * <code>streamtags</code> instead.
   *
   * @deprecated
   */
  tags?: string;
  /** Explicit type of the Worker Group, Outpost Group, or Edge Fleet. */
  type?: TypeOptionsConfigGroup;
  /** Target software upgrade version. Applies only to Outpost Groups and Edge Fleets. */
  upgradeVersion?: string;
  /**
   * Number of Workers or Nodes currently in the Worker Group, Outpost Group, or Edge Fleet. The
   * value is automatically populated and **does not scale Cribl.Cloud Worker Groups**. Use
   * <code>estimatedIngestRate</code> to scale Cribl.Cloud Worker Groups. <br/><br/> **Warning**: Do
   * not change the value of <code>workerCount</code> in the body of PATCH requests. The PATCH
   * request body must include the value as it appears in the <code>GET
   * /products/{product}/groups/{id}</code> response.
   */
  workerCount?: number;
  /**
   * If <code>true</code>, the Leader allows remote access (teleporting) into the Workers or Nodes
   * of the Worker Group, Outpost Group, or Edge Fleet.
   */
  workerRemoteAccess?: boolean;
};

export const configGroupSchema: Schema<ConfigGroup> = s.object<ConfigGroup>({
  srcGroup: s.optional(s.string()),
  srcOverridden: s.optional(s.boolean()),
  cloud: s.optional(s.lazy(() => configGroupCloud1Schema)),
  collectorsHaEnabled: s.optional(s.boolean()),
  configVersion: s.optional(s.string()),
  deployingWorkerCount: s.optional(s.int()),
  description: s.optional(s.string()),
  estimatedIngestRate: s.optional(s.lazy(() => estimatedIngestRateOptionsConfigGroupSchema)),
  git: s.optional(s.lazy(() => gitSchema)),
  id: s.string(),
  incompatibleWorkerCount: s.optional(s.int()),
  inherits: s.optional(s.string()),
  isFleet: s.optional(s.boolean()),
  isSearch: s.optional(s.boolean()),
  lookupDeployments: s.optional(s.array(s.lazy(() => configGroupLookupsSchema))),
  maxWorkerAge: s.optional(s.string()),
  name: s.optional(s.string()),
  onPrem: s.optional(s.boolean()),
  provisioned: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  tags: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeOptionsConfigGroupSchema)),
  upgradeVersion: s.optional(s.string()),
  workerCount: s.optional(s.int()),
  workerRemoteAccess: s.optional(s.boolean()),
  _keysMap: {
    srcGroup: "__srcGroup",
    srcOverridden: "__srcOverridden",
  },
});
