import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phoneNumberInternalSchema, phoneNumberSchema, type PhoneNumber } from "./phone-number.js";

export type ApiV1NumbersResponse1 = {
  number?: PhoneNumber;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1NumbersResponse1Properties: s.Shape<ApiV1NumbersResponse1> = {
  number: s.optional(s.lazy(() => phoneNumberInternalSchema)),
};

export const apiV1NumbersResponse1InternalSchema: Schema<ApiV1NumbersResponse1> =
  s.object<ApiV1NumbersResponse1>(apiV1NumbersResponse1Properties, { additionalProperties: s.json() });

export const apiV1NumbersResponse1Schema: Schema<ApiV1NumbersResponse1> = s.lazySchema(() =>
  s.object<ApiV1NumbersResponse1>(
    {
      ...apiV1NumbersResponse1Properties,
      number: s.optional(s.lazy(() => phoneNumberSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
