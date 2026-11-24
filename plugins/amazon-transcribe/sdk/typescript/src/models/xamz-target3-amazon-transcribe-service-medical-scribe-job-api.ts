import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi = {
  TranscribeStartMedicalScribeJob: "Transcribe.StartMedicalScribeJob",
} as const;
export type XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi>(
    XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi,
  );
