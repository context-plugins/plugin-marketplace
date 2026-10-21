import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiScheme2Schema, type ApiScheme2 } from "./api-scheme2.js";
import {
  awsTypeHeartbeatMetadata3Schema,
  type AwsTypeHeartbeatMetadata3,
} from "./aws-type-heartbeat-metadata3.js";
import {
  azureTypeHeartbeatMetadata3Schema,
  type AzureTypeHeartbeatMetadata3,
} from "./azure-type-heartbeat-metadata3.js";
import { hbCriblInfo2Schema, type HbCriblInfo2 } from "./hb-cribl-info2.js";
import { heartbeatMetadata1Schema, type HeartbeatMetadata1 } from "./heartbeat-metadata1.js";
import {
  hostOsTypeHeartbeatMetadata1Schema,
  type HostOsTypeHeartbeatMetadata1,
} from "./host-os-type-heartbeat-metadata1.js";
import {
  kubeTypeHeartbeatMetadata1Schema,
  type KubeTypeHeartbeatMetadata1,
} from "./kube-type-heartbeat-metadata1.js";
import { outpostNodeInfo2Schema, type OutpostNodeInfo2 } from "./outpost-node-info2.js";
import { osSchema, type Os } from "./unions/os.js";

export type NodeProvidedInfo = {
  /** API port exposed by the node. */
  apiPort?: number;
  /** API scheme derived from the node API TLS configuration. */
  apiScheme?: ApiScheme2;
  /** CPU architecture. */
  architecture: string;
  /** AWS metadata collected from the node. */
  aws?: AwsTypeHeartbeatMetadata3;
  /** Azure metadata collected from the node. */
  azure?: AzureTypeHeartbeatMetadata3;
  /** Remote <code>ip:port</code> for the worker socket. */
  connIp?: string;
  /** Number of CPU cores available on the node. */
  cpus: number;
  /** Cribl software and configuration details reported by the node. */
  cribl: HbCriblInfo2;
  /** Environment variables reported by the node. */
  env: Record<string, string>;
  /** Free disk space on the node, in bytes. */
  freeDiskSpace?: number;
  /** Host operating system metadata collected from the node. */
  hostOs?: HostOsTypeHeartbeatMetadata1;
  /** Hostname reported by the node. */
  hostname: string;
  /**
   * If <code>true</code>, the node considers itself the elected captain for its group. Otherwise,
   * <code>false</code>.
   */
  isCaptain?: boolean;
  /** If <code>true</code>, the node runs in Cribl.Cloud. Otherwise, <code>false</code>. */
  isSaasWorker?: boolean;
  /** Kubernetes metadata collected from the node. */
  kube?: KubeTypeHeartbeatMetadata1;
  /** Local timestamp (in Unix time) on the node, in milliseconds. */
  localTime?: number;
  /** Cloud, Kubernetes, and operating system metadata collected from the node. */
  metadata?: HeartbeatMetadata1;
  /** Node.js runtime version running on the node. */
  node: string;
  /** Operating system metadata collected from the node. */
  os?: Os;
  /** Outpost Node information when the node is connected to an Outpost. */
  outpost?: OutpostNodeInfo2;
  /** Operating system platform. */
  platform: string;
  /** Operating system kernel release. */
  release: string;
  /** Total disk space on the node, in bytes. */
  totalDiskSpace?: number;
  /** Total memory on the node, in bytes. */
  totalmem: number;
};

export const nodeProvidedInfoSchema: Schema<NodeProvidedInfo> = s.object<NodeProvidedInfo>({
  apiPort: s.optional(s.int()),
  apiScheme: s.optional(s.lazy(() => apiScheme2Schema)),
  architecture: s.string(),
  aws: s.optional(s.lazy(() => awsTypeHeartbeatMetadata3Schema)),
  azure: s.optional(s.lazy(() => azureTypeHeartbeatMetadata3Schema)),
  connIp: s.optional(s.string()),
  cpus: s.int(),
  cribl: hbCriblInfo2Schema,
  env: s.record(s.string(), s.string()),
  freeDiskSpace: s.optional(s.int()),
  hostOs: s.optional(s.lazy(() => hostOsTypeHeartbeatMetadata1Schema)),
  hostname: s.string(),
  isCaptain: s.optional(s.boolean()),
  isSaasWorker: s.optional(s.boolean()),
  kube: s.optional(s.lazy(() => kubeTypeHeartbeatMetadata1Schema)),
  localTime: s.optional(s.int()),
  metadata: s.optional(s.lazy(() => heartbeatMetadata1Schema)),
  node: s.string(),
  os: s.optional(s.lazy(() => osSchema)),
  outpost: s.optional(s.lazy(() => outpostNodeInfo2Schema)),
  platform: s.string(),
  release: s.string(),
  totalDiskSpace: s.optional(s.int()),
  totalmem: s.int(),
  _keysMap: {
    connIp: "conn_ip",
  },
});
