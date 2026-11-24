import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shows whether content identification was enabled for your Call Analytics transcription. */
export const ContentIdentificationTypeAmazonTranscribeServiceOperationsApi = {
  Pii: "PII",
} as const;
export type ContentIdentificationTypeAmazonTranscribeServiceOperationsApi =
  | (typeof ContentIdentificationTypeAmazonTranscribeServiceOperationsApi)[keyof typeof ContentIdentificationTypeAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const contentIdentificationTypeAmazonTranscribeServiceOperationsApiSchema: EnumSchema<ContentIdentificationTypeAmazonTranscribeServiceOperationsApi> =
  s.enumOf<ContentIdentificationTypeAmazonTranscribeServiceOperationsApi>(
    ContentIdentificationTypeAmazonTranscribeServiceOperationsApi,
  );
