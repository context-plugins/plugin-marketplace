import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Node information for the Outpost through which a Worker connects to the Leader. */
export type OutpostNodeInfo = {
  /** Name of the Outpost Group that contains the Outpost Node. */
  groupname?: string;
  /** Unique identifier for the Outpost Node. */
  guid: string;
  /** Hostname or IP address for the Outpost Node. */
  host: string;
};

export const outpostNodeInfoSchema: Schema<OutpostNodeInfo> = s.object<OutpostNodeInfo>({
  groupname: s.optional(s.string()),
  guid: s.string(),
  host: s.string(),
});
