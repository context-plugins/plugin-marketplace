import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importFormatResponseSchema, type ImportFormatResponse } from "./import-format-response.js";

export type ImportFormatListResponse = {
  formats: ImportFormatResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importFormatListResponseSchema: Schema<ImportFormatListResponse> =
  s.object<ImportFormatListResponse>(
    {
      formats: s.array(s.lazy(() => importFormatResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
