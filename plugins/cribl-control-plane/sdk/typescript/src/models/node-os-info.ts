import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NodeOsInfo = {
  /** Network addresses reported by the node operating system. */
  addresses: string[];
};

export const nodeOsInfoSchema: Schema<NodeOsInfo> = s.object<NodeOsInfo>({
  addresses: s.array(s.string()),
});
