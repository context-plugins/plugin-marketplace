import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { telemetryRecordSchema, type TelemetryRecord } from "./telemetry-record.js";

export type TelemetryRecordsRequest = {
  telemetryRecords: TelemetryRecord[];
  ec2InstanceId?: string;
  hostname?: string;
  resourceArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const telemetryRecordsRequestSchema: Schema<TelemetryRecordsRequest> =
  s.object<TelemetryRecordsRequest>(
    {
      telemetryRecords: s.array(s.lazy(() => telemetryRecordSchema)),
      ec2InstanceId: s.optional(s.string()),
      hostname: s.optional(s.string()),
      resourceArn: s.optional(s.string()),
      _keysMap: {
        telemetryRecords: "TelemetryRecords",
        ec2InstanceId: "EC2InstanceId",
        hostname: "Hostname",
        resourceArn: "ResourceARN",
      },
    },
    { additionalProperties: s.json() },
  );
