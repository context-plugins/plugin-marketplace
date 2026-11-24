import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi = {
  TranscribeListMedicalTranscriptionJobs: "Transcribe.ListMedicalTranscriptionJobs",
} as const;
export type XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi>(
    XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi,
  );
