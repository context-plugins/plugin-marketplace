import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Outpost Node information when the node is connected to an Outpost. */
export type OutpostNodeInfo2 = {
  /** Name of the Outpost Group that contains the Outpost Node. */
  groupname?: string;
  /** Unique identifier for the Outpost Node. */
  guid: string;
  /** Hostname or IP address for the Outpost Node. */
  host: string;
};

export const outpostNodeInfo2Schema: Schema<OutpostNodeInfo2> = s.object<OutpostNodeInfo2>({
  groupname: s.optional(s.string()),
  guid: s.string(),
  host: s.string(),
});
