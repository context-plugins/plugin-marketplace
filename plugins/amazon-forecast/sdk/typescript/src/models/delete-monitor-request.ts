import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteMonitorRequest = {
  /** The Amazon Resource Name (ARN) of the monitor resource to delete. */
  monitorArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMonitorRequestSchema: Schema<DeleteMonitorRequest> = s.object<DeleteMonitorRequest>(
  {
    monitorArn: s.string(),
    _keysMap: {
      monitorArn: "MonitorArn",
    },
  },
  { additionalProperties: s.json() },
);
