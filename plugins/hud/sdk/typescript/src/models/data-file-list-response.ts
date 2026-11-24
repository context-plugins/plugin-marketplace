import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataFileResponseSchema, type DataFileResponse } from "./data-file-response.js";

export type DataFileListResponse = {
  files: DataFileResponse[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileListResponseSchema: Schema<DataFileListResponse> = s.object<DataFileListResponse>(
  {
    files: s.array(s.lazy(() => dataFileResponseSchema)),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
