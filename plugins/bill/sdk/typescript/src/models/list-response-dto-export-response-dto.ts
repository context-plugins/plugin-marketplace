import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportResponseDtoSchema, type ExportResponseDto } from "./export-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoExportResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ExportResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoExportResponseDtoSchema: Schema<ListResponseDtoExportResponseDto> =
  s.object<ListResponseDtoExportResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => exportResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
