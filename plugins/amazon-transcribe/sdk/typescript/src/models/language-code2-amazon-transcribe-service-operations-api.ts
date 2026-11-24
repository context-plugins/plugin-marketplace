import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Language Code of the HealthScribe streaming session. */
export const LanguageCode2AmazonTranscribeServiceOperationsApi = {
  EnUs: "en-US",
} as const;
export type LanguageCode2AmazonTranscribeServiceOperationsApi =
  | (typeof LanguageCode2AmazonTranscribeServiceOperationsApi)[keyof typeof LanguageCode2AmazonTranscribeServiceOperationsApi]
  | (string & {});

export const languageCode2AmazonTranscribeServiceOperationsApiSchema: EnumSchema<LanguageCode2AmazonTranscribeServiceOperationsApi> =
  s.enumOf<LanguageCode2AmazonTranscribeServiceOperationsApi>(
    LanguageCode2AmazonTranscribeServiceOperationsApi,
  );
