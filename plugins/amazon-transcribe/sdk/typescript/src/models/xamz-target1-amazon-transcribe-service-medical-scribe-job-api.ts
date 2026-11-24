import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi = {
  TranscribeGetMedicalScribeJob: "Transcribe.GetMedicalScribeJob",
} as const;
export type XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi>(
    XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi,
  );
