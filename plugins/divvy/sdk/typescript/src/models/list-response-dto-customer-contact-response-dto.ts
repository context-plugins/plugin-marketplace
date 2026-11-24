import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerContactResponseDtoSchema,
  type CustomerContactResponseDto,
} from "./customer-contact-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoCustomerContactResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: CustomerContactResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoCustomerContactResponseDtoSchema: Schema<ListResponseDtoCustomerContactResponseDto> =
  s.object<ListResponseDtoCustomerContactResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => customerContactResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
