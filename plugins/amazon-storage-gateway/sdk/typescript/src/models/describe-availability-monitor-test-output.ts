import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type DescribeAvailabilityMonitorTestOutput = {
  gatewayArn?: string;
  /**
   * The status of the high availability monitoring test. If a test hasn't been performed, the value
   * of this field is null.
   */
  status?: Status;
  /**
   * The time the high availability monitoring test was started. If a test hasn't been performed,
   * the value of this field is null.
   */
  startTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAvailabilityMonitorTestOutputSchema: Schema<DescribeAvailabilityMonitorTestOutput> =
  s.object<DescribeAvailabilityMonitorTestOutput>(
    {
      gatewayArn: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusSchema)),
      startTime: s.optional(s.dateTime()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        status: "Status",
        startTime: "StartTime",
      },
    },
    { additionalProperties: s.json() },
  );
