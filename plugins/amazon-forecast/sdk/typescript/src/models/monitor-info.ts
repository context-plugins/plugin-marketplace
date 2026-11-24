import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MonitorInfo = {
  /** The Amazon Resource Name (ARN) of the monitor resource. */
  monitorArn?: string;
  /**
   * The status of the monitor. States include: ACTIVE ACTIVE_STOPPING, ACTIVE_STOPPED
   * UPDATE_IN_PROGRESS CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING,
   * DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorInfoSchema: Schema<MonitorInfo> = s.object<MonitorInfo>(
  {
    monitorArn: s.optional(s.string()),
    status: s.optional(s.string()),
    _keysMap: {
      monitorArn: "MonitorArn",
      status: "Status",
    },
  },
  { additionalProperties: s.json() },
);
