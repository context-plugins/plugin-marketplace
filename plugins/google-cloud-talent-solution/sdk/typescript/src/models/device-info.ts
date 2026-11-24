import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deviceTypeSchema, type DeviceType } from "./device-type.js";

/**
 * Device information collected from the job seeker, candidate, or other entity conducting the job
 * search. Providing this information improves the quality of the search results across devices.
 */
export type DeviceInfo = {
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

export const deviceInfoSchema: Schema<DeviceInfo> = s.object<DeviceInfo>(
  {
    id: s.optional(s.string()),
    deviceType: s.optional(s.lazy(() => deviceTypeSchema)),
  },
  { additionalProperties: s.json() },
);
