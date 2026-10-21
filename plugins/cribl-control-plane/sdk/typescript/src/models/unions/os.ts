import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nodeOsInfoSchema, type NodeOsInfo } from "../node-os-info.js";
import {
  osTypeHeartbeatMetadataSchema,
  type OsTypeHeartbeatMetadata,
} from "../os-type-heartbeat-metadata.js";

/** Operating system metadata collected from the node. */
export type Os = NodeOsInfo | OsTypeHeartbeatMetadata;

export const osSchema: Schema<Os> = s.of<Os>(
  s.union([s.lazy(() => nodeOsInfoSchema), s.lazy(() => osTypeHeartbeatMetadataSchema)]),
);
