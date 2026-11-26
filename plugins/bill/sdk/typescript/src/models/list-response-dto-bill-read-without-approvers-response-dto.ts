import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billReadWithoutApproversResponseDtoInternalSchema,
  billReadWithoutApproversResponseDtoSchema,
  type BillReadWithoutApproversResponseDto,
} from "./bill-read-without-approvers-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoBillReadWithoutApproversResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: BillReadWithoutApproversResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listResponseDtoBillReadWithoutApproversResponseDtoProperties: s.Shape<ListResponseDtoBillReadWithoutApproversResponseDto> =
  {
    nextPage: s.optional(s.string()),
    prevPage: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => billReadWithoutApproversResponseDtoInternalSchema))),
  };

export const listResponseDtoBillReadWithoutApproversResponseDtoInternalSchema: Schema<ListResponseDtoBillReadWithoutApproversResponseDto> =
  s.object<ListResponseDtoBillReadWithoutApproversResponseDto>(
    listResponseDtoBillReadWithoutApproversResponseDtoProperties,
    { additionalProperties: s.json() },
  );

export const listResponseDtoBillReadWithoutApproversResponseDtoSchema: Schema<ListResponseDtoBillReadWithoutApproversResponseDto> =
  s.lazySchema(() =>
    s.object<ListResponseDtoBillReadWithoutApproversResponseDto>(
      {
        ...listResponseDtoBillReadWithoutApproversResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => billReadWithoutApproversResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
