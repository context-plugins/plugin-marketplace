import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi = {
  TranscribeListMedicalScribeJobs: "Transcribe.ListMedicalScribeJobs",
} as const;
export type XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi>(
    XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi,
  );
