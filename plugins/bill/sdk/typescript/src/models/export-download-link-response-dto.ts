import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response DTO for export download link. */
export type ExportDownloadLinkResponseDto = {
  /** Download URL for the exported record file */
  downloadLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportDownloadLinkResponseDtoSchema: Schema<ExportDownloadLinkResponseDto> =
  s.object<ExportDownloadLinkResponseDto>(
    {
      downloadLink: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
