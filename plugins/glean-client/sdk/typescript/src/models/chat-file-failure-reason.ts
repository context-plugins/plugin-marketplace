import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reason for failed status. */
export const ChatFileFailureReason = {
  ParseFailed: "PARSE_FAILED",
  AvScanFailed: "AV_SCAN_FAILED",
  FileTooSmall: "FILE_TOO_SMALL",
  FileTooLarge: "FILE_TOO_LARGE",
  FileExtensionUnsupported: "FILE_EXTENSION_UNSUPPORTED",
  FileMetadataValidationFail: "FILE_METADATA_VALIDATION_FAIL",
  FileProcessingTimedOut: "FILE_PROCESSING_TIMED_OUT",
  OauthNeeded: "OAUTH_NEEDED",
  UrlFetchFailed: "URL_FETCH_FAILED",
  EmptyContent: "EMPTY_CONTENT",
  AuthRequired: "AUTH_REQUIRED",
} as const;
export type ChatFileFailureReason =
  | (typeof ChatFileFailureReason)[keyof typeof ChatFileFailureReason]
  | (string & {});

export const chatFileFailureReasonSchema: EnumSchema<ChatFileFailureReason> =
  s.enumOf<ChatFileFailureReason>(ChatFileFailureReason);
