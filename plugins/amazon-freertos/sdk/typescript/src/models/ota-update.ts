import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { otaUpdateStatusSchema, type OtaUpdateStatus } from "./ota-update-status.js";
import { protocolSchema, type Protocol } from "./protocol.js";

/** An over-the-air (OTA) firmware update job for FreeRTOS devices. */
export type OtaUpdate = {
  otaUpdateId: string;
  otaUpdateArn?: string;
  otaUpdateStatus?: OtaUpdateStatus;
  description?: string;
  targets: string[];
  protocols?: Protocol[];
  creationDate?: Date;
  lastModifiedDate?: Date;
  awsIotJobId?: string;
  awsIotJobArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otaUpdateSchema: Schema<OtaUpdate> = s.object<OtaUpdate>(
  {
    otaUpdateId: s.string(),
    otaUpdateArn: s.optional(s.string()),
    otaUpdateStatus: s.optional(s.lazy(() => otaUpdateStatusSchema)),
    description: s.optional(s.string()),
    targets: s.array(s.string()),
    protocols: s.optional(s.array(s.lazy(() => protocolSchema))),
    creationDate: s.optional(s.dateTime()),
    lastModifiedDate: s.optional(s.dateTime()),
    awsIotJobId: s.optional(s.string()),
    awsIotJobArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
