import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OwnerTypeHeartbeatMetadataKube = {
  /** Kubernetes owner resource kind. */
  kind: string;
  /** Kubernetes owner resource name. */
  name: string;
};

export const ownerTypeHeartbeatMetadataKubeSchema: Schema<OwnerTypeHeartbeatMetadataKube> =
  s.object<OwnerTypeHeartbeatMetadataKube>({
    kind: s.string(),
    name: s.string(),
  });
