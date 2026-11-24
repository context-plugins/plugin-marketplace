import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi = {
  TranscribeStartMedicalTranscriptionJob: "Transcribe.StartMedicalTranscriptionJob",
} as const;
export type XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi>(
    XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi,
  );
