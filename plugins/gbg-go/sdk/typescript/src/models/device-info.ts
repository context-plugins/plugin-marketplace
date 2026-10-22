import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceInfo = {
  /** Device Id, a unique identifier for a device. */
  deviceId: string;
  deviceName?: string;
  deviceType?: string;
};

export const deviceInfoSchema: Schema<DeviceInfo> = s.object<DeviceInfo>({
  deviceId: s.string(),
  deviceName: s.optional(s.string()),
  deviceType: s.optional(s.string()),
});
