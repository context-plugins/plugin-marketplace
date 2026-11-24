import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MonitorSummary = {
  /** The Amazon Resource Name (ARN) of the monitor resource. */
  monitorArn?: string;
  /** The name of the monitor resource. */
  monitorName?: string;
  /** The Amazon Resource Name (ARN) of the predictor being monitored. */
  resourceArn?: string;
  /**
   * The status of the monitor. States include: ACTIVE ACTIVE_STOPPING, ACTIVE_STOPPED
   * UPDATE_IN_PROGRESS CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING,
   * DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /** When the monitor resource was created. */
  creationTime?: Date;
  /**
   * The last time the monitor resource was modified. The timestamp depends on the status of the
   * job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. STOPPED -
   * When the resource stopped. ACTIVE or CREATE_FAILED - When the monitor creation finished or
   * failed.
   */
  lastModificationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorSummarySchema: Schema<MonitorSummary> = s.object<MonitorSummary>(
  {
    monitorArn: s.optional(s.string()),
    monitorName: s.optional(s.string()),
    resourceArn: s.optional(s.string()),
    status: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    lastModificationTime: s.optional(s.dateTime()),
    _keysMap: {
      monitorArn: "MonitorArn",
      monitorName: "MonitorName",
      resourceArn: "ResourceArn",
      status: "Status",
      creationTime: "CreationTime",
      lastModificationTime: "LastModificationTime",
    },
  },
  { additionalProperties: s.json() },
);
