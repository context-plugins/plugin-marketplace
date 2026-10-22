import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The error code for the response. */
export const Code = {
  ServerError: "server_error",
  RateLimitExceeded: "rate_limit_exceeded",
  InvalidPrompt: "invalid_prompt",
  VectorStoreTimeout: "vector_store_timeout",
  InvalidImage: "invalid_image",
  InvalidImageFormat: "invalid_image_format",
  InvalidBase64Image: "invalid_base64_image",
  InvalidImageUrl: "invalid_image_url",
  ImageTooLarge: "image_too_large",
  ImageTooSmall: "image_too_small",
  ImageParseError: "image_parse_error",
  ImageContentPolicyViolation: "image_content_policy_violation",
  InvalidImageMode: "invalid_image_mode",
  ImageFileTooLarge: "image_file_too_large",
  UnsupportedImageMediaType: "unsupported_image_media_type",
  EmptyImageFile: "empty_image_file",
  FailedToDownloadImage: "failed_to_download_image",
  ImageFileNotFound: "image_file_not_found",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
