import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionResponseDtoInternalSchema,
  subscriptionResponseDtoSchema,
  type SubscriptionResponseDto,
} from "./subscription-response-dto.js";

/** Pagination information. */
export type PaginationDtoSubscriptionResponseDto = {
  nextPage?: string;
  results?: SubscriptionResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginationDtoSubscriptionResponseDtoProperties: s.Shape<PaginationDtoSubscriptionResponseDto> = {
  nextPage: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => subscriptionResponseDtoInternalSchema))),
};

export const paginationDtoSubscriptionResponseDtoInternalSchema: Schema<PaginationDtoSubscriptionResponseDto> =
  s.object<PaginationDtoSubscriptionResponseDto>(paginationDtoSubscriptionResponseDtoProperties, {
    additionalProperties: s.json(),
  });

export const paginationDtoSubscriptionResponseDtoSchema: Schema<PaginationDtoSubscriptionResponseDto> =
  s.lazySchema(() =>
    s.object<PaginationDtoSubscriptionResponseDto>(
      {
        ...paginationDtoSubscriptionResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => subscriptionResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
