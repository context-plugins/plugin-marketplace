import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { otaUpdateSchema, type OtaUpdate } from "./ota-update.js";

/** Detailed information about an OTA update. */
export type OtaUpdateInfo = {
  /** An over-the-air (OTA) firmware update job for FreeRTOS devices. */
  otaUpdateInfo?: OtaUpdate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otaUpdateInfoSchema: Schema<OtaUpdateInfo> = s.object<OtaUpdateInfo>(
  {
    otaUpdateInfo: s.optional(s.lazy(() => otaUpdateSchema)),
  },
  { additionalProperties: s.json() },
);
