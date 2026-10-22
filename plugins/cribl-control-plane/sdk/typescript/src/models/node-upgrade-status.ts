import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  nodeActiveUpgradeStatus2Schema,
  type NodeActiveUpgradeStatus2,
} from "./node-active-upgrade-status2.js";
import {
  nodeFailedUpgradeStatus2Schema,
  type NodeFailedUpgradeStatus2,
} from "./node-failed-upgrade-status2.js";
import {
  nodeSkippedUpgradeStatus2Schema,
  type NodeSkippedUpgradeStatus2,
} from "./node-skipped-upgrade-status2.js";
import { nodeUpgradeState2Schema, type NodeUpgradeState2 } from "./node-upgrade-state2.js";

export type NodeUpgradeStatus = {
  /** Secondary upgrade state when <code>state</code> is <code>ACTIVE</code>. */
  active?: NodeActiveUpgradeStatus2;
  /** Secondary upgrade state when <code>state</code> is <code>FAILED</code>. */
  failed?: NodeFailedUpgradeStatus2;
  /** Secondary upgrade state when <code>state</code> is <code>SKIPPED</code>. */
  skipped?: NodeSkippedUpgradeStatus2;
  /** Current upgrade state for the Edge Node. */
  state: NodeUpgradeState2;
  /** Timestamp (in Unix time) when the node entered the upgrade state, in milliseconds. */
  timestamp: number;
};

export const nodeUpgradeStatusSchema: Schema<NodeUpgradeStatus> = s.object<NodeUpgradeStatus>({
  active: s.optional(s.lazy(() => nodeActiveUpgradeStatus2Schema)),
  failed: s.optional(s.lazy(() => nodeFailedUpgradeStatus2Schema)),
  skipped: s.optional(s.lazy(() => nodeSkippedUpgradeStatus2Schema)),
  state: nodeUpgradeState2Schema,
  timestamp: s.int(),
});
