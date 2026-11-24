import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi = {
  TranscribeGetMedicalTranscriptionJob: "Transcribe.GetMedicalTranscriptionJob",
} as const;
export type XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi>(
    XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi,
  );
