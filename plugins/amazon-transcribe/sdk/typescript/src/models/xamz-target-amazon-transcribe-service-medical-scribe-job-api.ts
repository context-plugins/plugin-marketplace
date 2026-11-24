import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi = {
  TranscribeDeleteMedicalScribeJob: "Transcribe.DeleteMedicalScribeJob",
} as const;
export type XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi>(
    XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi,
  );
