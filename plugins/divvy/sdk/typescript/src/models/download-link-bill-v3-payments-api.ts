import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Download link for CheckImageDataResponseDto. */
export type DownloadLinkBillV3PaymentsApi = {
  /**
   * URL for downloading the check image. Use the URL in a GET request to download the check image.
   */
  downloadLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const downloadLinkBillV3PaymentsApiSchema: Schema<DownloadLinkBillV3PaymentsApi> =
  s.object<DownloadLinkBillV3PaymentsApi>(
    {
      downloadLink: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
