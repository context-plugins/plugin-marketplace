import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Worker or Edge Node counts and health statistics in the deployment summary. */
export type Workers = {
  /** Total number of Worker or Edge Nodes that are connected with <code>healthy</code> status. */
  alive: number;
  /** Total number of unique configuration versions across all Worker or Edge Nodes. */
  confVersions: number;
  /** Total number of Worker or Edge Nodes. */
  count: number;
  /** Total number of Worker or Edge Nodes in a disconnected state. */
  disconnectedCount: number;
  /**
   * Total number of distinct Worker Groups or Edge Fleets that the Workers or Edge Nodes belong to.
   */
  groups: number;
  /** Total number of unique Cribl software versions across all Worker or Edge Nodes. */
  softwareVersions: number;
  /**
   * Total number of Worker or Edge Nodes that are connected with a status other than
   * <code>healthy</code>.
   */
  unhealthy: number;
};

export const workersSchema: Schema<Workers> = s.object<Workers>({
  alive: s.int(),
  confVersions: s.int(),
  count: s.int(),
  disconnectedCount: s.int(),
  groups: s.int(),
  softwareVersions: s.int(),
  unhealthy: s.int(),
});
