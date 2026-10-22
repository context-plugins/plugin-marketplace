import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Kubernetes owner resource for the Pod. */
export type OwnerTypeHeartbeatMetadataKube2 = {
  /** Kubernetes owner resource kind. */
  kind: string;
  /** Kubernetes owner resource name. */
  name: string;
};

export const ownerTypeHeartbeatMetadataKube2Schema: Schema<OwnerTypeHeartbeatMetadataKube2> =
  s.object<OwnerTypeHeartbeatMetadataKube2>({
    kind: s.string(),
    name: s.string(),
  });
