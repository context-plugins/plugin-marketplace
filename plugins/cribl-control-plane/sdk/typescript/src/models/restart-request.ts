import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestartRequest = {
  /** GUIDs of the Worker or Edge Nodes to restart. */
  guids: string[];
};

export const restartRequestSchema: Schema<RestartRequest> = s.object<RestartRequest>({
  guids: s.array(s.string()),
});
