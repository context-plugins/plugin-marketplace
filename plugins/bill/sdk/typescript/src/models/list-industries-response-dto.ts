import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** List type for Industries list. */
export type ListIndustriesResponseDto = {
  results?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listIndustriesResponseDtoSchema: Schema<ListIndustriesResponseDto> =
  s.object<ListIndustriesResponseDto>(
    {
      results: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
