import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi = {
  TranscribeDeleteMedicalTranscriptionJob: "Transcribe.DeleteMedicalTranscriptionJob",
} as const;
export type XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi =
  | (typeof XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi)[keyof typeof XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi>(
    XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi,
  );
