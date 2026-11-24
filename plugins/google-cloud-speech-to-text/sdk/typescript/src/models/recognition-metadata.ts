import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interactionTypeSchema, type InteractionType } from "./interaction-type.js";
import { microphoneDistanceSchema, type MicrophoneDistance } from "./microphone-distance.js";
import { originalMediaTypeSchema, type OriginalMediaType } from "./original-media-type.js";
import { recordingDeviceTypeSchema, type RecordingDeviceType } from "./recording-device-type.js";

/** Description of audio data to be recognized. */
export type RecognitionMetadata = {
  /** Description of the content. Eg. "Recordings of federal supreme court hearings from 2012". */
  audioTopic?: string;
  /** The audio type that most closely describes the audio being recognized. */
  microphoneDistance?: MicrophoneDistance;
  /**
   * The industry vertical to which this speech recognition request most closely applies. This is
   * most indicative of the topics contained in the audio. Use the 6-digit NAICS code to identify
   * the industry vertical - see https://www.naics.com/search/.
   */
  industryNaicsCodeOfAudio?: number;
  /** The use case most closely describing the audio content to be recognized. */
  interactionType?: InteractionType;
  /** The type of device the speech was recorded with. */
  recordingDeviceType?: RecordingDeviceType;
  /**
   * The device used to make the recording. Examples 'Nexus 5X' or 'Polycom SoundStation IP 6000' or
   * 'POTS' or 'VoIP' or 'Cardioid Microphone'.
   */
  recordingDeviceName?: string;
  /**
   * Mime type of the original audio file. For example `audio/m4a`, `audio/x-alaw-basic`,
   * `audio/mp3`, `audio/3gpp`. A list of possible audio mime types is maintained at
   * http://www.iana.org/assignments/media-types/media-types.xhtml#audio
   */
  originalMimeType?: string;
  /** The original media the speech was recorded on. */
  originalMediaType?: OriginalMediaType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognitionMetadataSchema: Schema<RecognitionMetadata> = s.object<RecognitionMetadata>(
  {
    audioTopic: s.optional(s.string()),
    microphoneDistance: s.optional(s.lazy(() => microphoneDistanceSchema)),
    industryNaicsCodeOfAudio: s.optional(s.int()),
    interactionType: s.optional(s.lazy(() => interactionTypeSchema)),
    recordingDeviceType: s.optional(s.lazy(() => recordingDeviceTypeSchema)),
    recordingDeviceName: s.optional(s.string()),
    originalMimeType: s.optional(s.string()),
    originalMediaType: s.optional(s.lazy(() => originalMediaTypeSchema)),
  },
  { additionalProperties: s.json() },
);
