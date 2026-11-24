import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phoneNumberInternalSchema, phoneNumberSchema, type PhoneNumber } from "./phone-number.js";

export type ApiV1NumbersResponse = {
  numbers?: PhoneNumber[];
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1NumbersResponseProperties: s.Shape<ApiV1NumbersResponse> = {
  numbers: s.optional(s.array(s.lazy(() => phoneNumberInternalSchema))),
  count: s.optional(s.int()),
};

export const apiV1NumbersResponseInternalSchema: Schema<ApiV1NumbersResponse> =
  s.object<ApiV1NumbersResponse>(apiV1NumbersResponseProperties, { additionalProperties: s.json() });

export const apiV1NumbersResponseSchema: Schema<ApiV1NumbersResponse> = s.lazySchema(() =>
  s.object<ApiV1NumbersResponse>(
    {
      ...apiV1NumbersResponseProperties,
      numbers: s.optional(s.array(s.lazy(() => phoneNumberSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
