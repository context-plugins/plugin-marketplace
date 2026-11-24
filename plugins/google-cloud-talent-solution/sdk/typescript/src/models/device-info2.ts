import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deviceTypeSchema, type DeviceType } from "./device-type.js";

/** The type of device used by the job seeker at the time of the call to the service. */
export type DeviceInfo2 = {
  /**
   * A device-specific ID. The ID must be a unique identifier that distinguishes the device from
   * other devices.
   */
  id?: string;
  /** Type of the device. */
  deviceType?: DeviceType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deviceInfo2Schema: Schema<DeviceInfo2> = s.object<DeviceInfo2>(
  {
    id: s.optional(s.string()),
    deviceType: s.optional(s.lazy(() => deviceTypeSchema)),
  },
  { additionalProperties: s.json() },
);
