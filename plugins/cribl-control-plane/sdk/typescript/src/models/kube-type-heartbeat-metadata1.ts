import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  ownerTypeHeartbeatMetadataKube2Schema,
  type OwnerTypeHeartbeatMetadataKube2,
} from "./owner-type-heartbeat-metadata-kube2.js";

/** Kubernetes metadata collected from the node. */
export type KubeTypeHeartbeatMetadata1 = {
  /**
   * If <code>true</code>, the Kubernetes metadata collector is enabled on the node. Otherwise,
   * <code>false</code>.
   */
  enabled: boolean;
  /** Kubernetes Namespace name. */
  namespace: string;
  /** Kubernetes Node name. */
  node: string;
  /** Kubernetes owner resource for the Pod. */
  owner?: OwnerTypeHeartbeatMetadataKube2;
  /** Kubernetes Pod name. */
  pod: string;
  /** Kubernetes config source. */
  source: string;
};

export const kubeTypeHeartbeatMetadata1Schema: Schema<KubeTypeHeartbeatMetadata1> =
  s.object<KubeTypeHeartbeatMetadata1>({
    enabled: s.boolean(),
    namespace: s.string(),
    node: s.string(),
    owner: s.optional(s.lazy(() => ownerTypeHeartbeatMetadataKube2Schema)),
    pod: s.string(),
    source: s.string(),
  });
