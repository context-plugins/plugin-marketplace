import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  downloadLinkBillV3PaymentsApiSchema,
  type DownloadLinkBillV3PaymentsApi,
} from "./download-link-bill-v3-payments-api.js";

/** Check image data response. */
export type CheckImageDataResponseDto = {
  /** URLs for the check image */
  results?: DownloadLinkBillV3PaymentsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkImageDataResponseDtoSchema: Schema<CheckImageDataResponseDto> =
  s.object<CheckImageDataResponseDto>(
    {
      results: s.optional(s.array(s.lazy(() => downloadLinkBillV3PaymentsApiSchema))),
    },
    { additionalProperties: s.json() },
  );
