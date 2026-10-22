import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  awsTypeHeartbeatMetadata1Schema,
  type AwsTypeHeartbeatMetadata1,
} from "./aws-type-heartbeat-metadata1.js";
import {
  azureTypeHeartbeatMetadata1Schema,
  type AzureTypeHeartbeatMetadata1,
} from "./azure-type-heartbeat-metadata1.js";
import {
  hostOsTypeHeartbeatMetadata1Schema,
  type HostOsTypeHeartbeatMetadata1,
} from "./host-os-type-heartbeat-metadata1.js";
import {
  kubeTypeHeartbeatMetadata1Schema,
  type KubeTypeHeartbeatMetadata1,
} from "./kube-type-heartbeat-metadata1.js";
import {
  osTypeHeartbeatMetadata2Schema,
  type OsTypeHeartbeatMetadata2,
} from "./os-type-heartbeat-metadata2.js";

/** Cloud, Kubernetes, and operating system metadata collected from the node. */
export type HeartbeatMetadata1 = {
  /** AWS instance metadata collected from the node. */
  aws?: AwsTypeHeartbeatMetadata1;
  /** Azure instance metadata collected from the node. */
  azure?: AzureTypeHeartbeatMetadata1;
  /** Host operating system metadata collected from the node. */
  hostOs?: HostOsTypeHeartbeatMetadata1;
  /** Kubernetes metadata collected from the node. */
  kube?: KubeTypeHeartbeatMetadata1;
  /** Operating system metadata collected from the node. */
  os?: OsTypeHeartbeatMetadata2;
};

export const heartbeatMetadata1Schema: Schema<HeartbeatMetadata1> = s.object<HeartbeatMetadata1>({
  aws: s.optional(s.lazy(() => awsTypeHeartbeatMetadata1Schema)),
  azure: s.optional(s.lazy(() => azureTypeHeartbeatMetadata1Schema)),
  hostOs: s.optional(s.lazy(() => hostOsTypeHeartbeatMetadata1Schema)),
  kube: s.optional(s.lazy(() => kubeTypeHeartbeatMetadata1Schema)),
  os: s.optional(s.lazy(() => osTypeHeartbeatMetadata2Schema)),
});
