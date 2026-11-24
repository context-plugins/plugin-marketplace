import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerResponseDtoInternalSchema,
  customerResponseDtoSchema,
  type CustomerResponseDto,
} from "./customer-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoCustomerResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: CustomerResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listResponseDtoCustomerResponseDtoProperties: s.Shape<ListResponseDtoCustomerResponseDto> = {
  nextPage: s.optional(s.string()),
  prevPage: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => customerResponseDtoInternalSchema))),
};

export const listResponseDtoCustomerResponseDtoInternalSchema: Schema<ListResponseDtoCustomerResponseDto> =
  s.object<ListResponseDtoCustomerResponseDto>(listResponseDtoCustomerResponseDtoProperties, {
    additionalProperties: s.json(),
  });

export const listResponseDtoCustomerResponseDtoSchema: Schema<ListResponseDtoCustomerResponseDto> =
  s.lazySchema(() =>
    s.object<ListResponseDtoCustomerResponseDto>(
      {
        ...listResponseDtoCustomerResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => customerResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
