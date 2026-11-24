import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The audio type that most closely describes the audio being recognized. */
export const MicrophoneDistance = {
  MicrophoneDistanceUnspecified: "MICROPHONE_DISTANCE_UNSPECIFIED",
  Nearfield: "NEARFIELD",
  Midfield: "MIDFIELD",
  Farfield: "FARFIELD",
} as const;
export type MicrophoneDistance = (typeof MicrophoneDistance)[keyof typeof MicrophoneDistance] | (string & {});

export const microphoneDistanceSchema: EnumSchema<MicrophoneDistance> =
  s.enumOf<MicrophoneDistance>(MicrophoneDistance);
