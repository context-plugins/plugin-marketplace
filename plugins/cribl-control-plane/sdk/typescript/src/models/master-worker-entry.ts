import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectionProtocol2Schema, type ConnectionProtocol2 } from "./connection-protocol2.js";
import { heartbeatMetadata1Schema, type HeartbeatMetadata1 } from "./heartbeat-metadata1.js";
import { masterWorkerProcesses2Schema, type MasterWorkerProcesses2 } from "./master-worker-processes2.js";
import { nodeProvidedInfo2Schema, type NodeProvidedInfo2 } from "./node-provided-info2.js";
import { nodeUpgradeStatus2Schema, type NodeUpgradeStatus2 } from "./node-upgrade-status2.js";
import { type17Schema, type Type17 } from "./type17.js";

/** Worker or Edge Node entry returned by Distributed Management worker and outpost endpoints. */
export type MasterWorkerEntry = {
  /** Connection protocol used for node-to-Leader communication. */
  connectionProtocol?: ConnectionProtocol2;
  /**
   * If <code>true</code>, the node can receive configuration deployments. Otherwise,
   * <code>false</code>.
   */
  deployable?: boolean;
  /**
   * If <code>true</code>, the node is disconnected from the Leader. Otherwise, <code>false</code>.
   */
  disconnected?: boolean;
  /** Timestamp (in Unix time) when the Leader first received a message from the node. */
  firstMsgTime: number;
  /**
   * The <code>id</code> of the Worker Group, Edge Fleet, or Outpost Group that contains the node.
   */
  group: string;
  /** Unique identifier for the node. */
  id: string;
  /** Metadata reported by the node itself. */
  info: NodeProvidedInfo2;
  /** Latest total, input, and destination metrics cached for UI display. */
  lastMetrics?: Record<string, unknown>;
  /** Timestamp (in Unix time) when the Leader last received a message from the node. */
  lastMsgTime: number;
  /** Cloud, Kubernetes, and operating system metadata collected from the node. */
  metadata?: HeartbeatMetadata1;
  /** Upgrade status reported by an Edge Node. */
  nodeUpgradeStatus?: NodeUpgradeStatus2;
  /** Maximum configured ephemeral offline duration, in milliseconds (base + jitter cap). */
  offlineDurationMs?: number;
  /** The <code>id</code> of the provisioning token used to authenticate the node, if used. */
  provisioningTokenId?: string;
  /** Health status reported for the node. */
  status?: string;
  /** RPC message type reported by the node. */
  type?: Type17;
  /** Number of Worker Processes running on the node. */
  workerProcesses: number;
  /** Worker Process counts associated with the node entry. */
  workers?: MasterWorkerProcesses2;
};

export const masterWorkerEntrySchema: Schema<MasterWorkerEntry> = s.object<MasterWorkerEntry>({
  connectionProtocol: s.optional(s.lazy(() => connectionProtocol2Schema)),
  deployable: s.optional(s.boolean()),
  disconnected: s.optional(s.boolean()),
  firstMsgTime: s.int(),
  group: s.string(),
  id: s.string(),
  info: nodeProvidedInfo2Schema,
  lastMetrics: s.optional(s.record(s.string(), s.unknown())),
  lastMsgTime: s.int(),
  metadata: s.optional(s.lazy(() => heartbeatMetadata1Schema)),
  nodeUpgradeStatus: s.optional(s.lazy(() => nodeUpgradeStatus2Schema)),
  offlineDurationMs: s.optional(s.int()),
  provisioningTokenId: s.optional(s.string()),
  status: s.optional(s.string()),
  type: s.optional(s.lazy(() => type17Schema)),
  workerProcesses: s.int(),
  workers: s.optional(s.lazy(() => masterWorkerProcesses2Schema)),
});
