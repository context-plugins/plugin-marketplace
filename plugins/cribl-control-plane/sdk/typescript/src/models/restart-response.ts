import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** Result of a restart request for a Worker or Edge Node. */
export type RestartResponse = {
  /** Unique identifier for the Worker or Edge Node (GUID). */
  id: string;
  /** Error message if the restart request failed for this Node. */
  message?: string;
  /**
   * Result of the restart request for this Node (<code>Restarting</code> or <code>Error</code>).
   */
  status: Status;
};

export const restartResponseSchema: Schema<RestartResponse> = s.object<RestartResponse>({
  id: s.string(),
  message: s.optional(s.string()),
  status: statusSchema,
});
