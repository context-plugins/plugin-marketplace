import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DownloadLink response Dto. */
export type DownloadLinkDto = {
  /** CSV format */
  csv: string;
  /** PDF format */
  pdf: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const downloadLinkDtoSchema: Schema<DownloadLinkDto> = s.object<DownloadLinkDto>(
  {
    csv: s.string(),
    pdf: s.string(),
  },
  { additionalProperties: s.json() },
);
