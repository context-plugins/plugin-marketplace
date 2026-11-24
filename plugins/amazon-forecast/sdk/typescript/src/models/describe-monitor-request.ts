import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeMonitorRequest = {
  /** The Amazon Resource Name (ARN) of the monitor resource to describe. */
  monitorArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeMonitorRequestSchema: Schema<DescribeMonitorRequest> = s.object<DescribeMonitorRequest>(
  {
    monitorArn: s.string(),
    _keysMap: {
      monitorArn: "MonitorArn",
    },
  },
  { additionalProperties: s.json() },
);
