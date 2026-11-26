import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scanStatusSchema, type ScanStatus } from "./scan-status.js";

/** Documents response. */
export type DocumentResponseDto = {
  /**
   * BILL-generated ID of the document.
   * * A temporary BILL-generated ID is available for the document when the upload is in progress.
   *   The value begins with `0du`.
   * * A BILL-generated ID is available for the document when the upload is complete. The value
   *   begins with `00h`.
   */
  id?: string;
  /** Document name */
  name?: string;
  /** Created date and time */
  createdTime?: Date;
  /** URL for downloading the document. Use the URL in a GET request to download the document. */
  downloadLink?: string;
  /** Number of pages in the document */
  numOfPages?: number;
  scanStatus?: ScanStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentResponseDtoSchema: Schema<DocumentResponseDto> = s.object<DocumentResponseDto>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    downloadLink: s.optional(s.string()),
    numOfPages: s.optional(s.int()),
    scanStatus: s.optional(s.lazy(() => scanStatusSchema)),
  },
  { additionalProperties: s.json() },
);
