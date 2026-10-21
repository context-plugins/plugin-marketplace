import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceInfoSchema, type DeviceInfo } from "./device-info.js";

export type JourneyDeviceConnectRequest = {
  /** Bearer Token credential for a connection. */
  connectToken: string;
  deviceInfo: DeviceInfo;
};

export const journeyDeviceConnectRequestSchema: Schema<JourneyDeviceConnectRequest> =
  s.object<JourneyDeviceConnectRequest>({
    connectToken: s.string(),
    deviceInfo: deviceInfoSchema,
  });
