import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shows whether content identification was enabled for your transcription. */
export const ContentIdentificationType1AmazonTranscribeServiceOperationsApi = {
  Phi: "PHI",
} as const;
export type ContentIdentificationType1AmazonTranscribeServiceOperationsApi =
  | (typeof ContentIdentificationType1AmazonTranscribeServiceOperationsApi)[keyof typeof ContentIdentificationType1AmazonTranscribeServiceOperationsApi]
  | (string & {});

export const contentIdentificationType1AmazonTranscribeServiceOperationsApiSchema: EnumSchema<ContentIdentificationType1AmazonTranscribeServiceOperationsApi> =
  s.enumOf<ContentIdentificationType1AmazonTranscribeServiceOperationsApi>(
    ContentIdentificationType1AmazonTranscribeServiceOperationsApi,
  );
