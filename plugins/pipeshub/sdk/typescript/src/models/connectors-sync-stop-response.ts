import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status15Schema, type Status15 } from "./status15.js";

export type ConnectorsSyncStopResponse = {
  success: boolean;
  /**
   * Whether a sync was running and has been asked to stop. False is a normal answer, not an error.
   */
  stopped: boolean;
  /** The status the connector is actually left in. */
  status: Status15;
  message: string;
};

export const connectorsSyncStopResponseSchema: Schema<ConnectorsSyncStopResponse> =
  s.object<ConnectorsSyncStopResponse>({
    success: s.boolean(),
    stopped: s.boolean(),
    status: status15Schema,
    message: s.string(),
  });
