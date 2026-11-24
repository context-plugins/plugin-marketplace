import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of device the speech was recorded with. */
export const RecordingDeviceType = {
  RecordingDeviceTypeUnspecified: "RECORDING_DEVICE_TYPE_UNSPECIFIED",
  Smartphone: "SMARTPHONE",
  Pc: "PC",
  PhoneLine: "PHONE_LINE",
  Vehicle: "VEHICLE",
  OtherOutdoorDevice: "OTHER_OUTDOOR_DEVICE",
  OtherIndoorDevice: "OTHER_INDOOR_DEVICE",
} as const;
export type RecordingDeviceType =
  | (typeof RecordingDeviceType)[keyof typeof RecordingDeviceType]
  | (string & {});

export const recordingDeviceTypeSchema: EnumSchema<RecordingDeviceType> =
  s.enumOf<RecordingDeviceType>(RecordingDeviceType);
