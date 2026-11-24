import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1WholesaleNumbersDeliveryResponse = {
  /** Plus sign followed by 7–15 digits. */
  phoneNumber?: string;
  deliverTo?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1WholesaleNumbersDeliveryResponseProperties: s.Shape<ApiV1WholesaleNumbersDeliveryResponse> = {
  phoneNumber: s.optional(s.string()),
  deliverTo: s.optional(s.string()),
};

export const apiV1WholesaleNumbersDeliveryResponseInternalSchema: Schema<ApiV1WholesaleNumbersDeliveryResponse> =
  s.object<ApiV1WholesaleNumbersDeliveryResponse>(apiV1WholesaleNumbersDeliveryResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1WholesaleNumbersDeliveryResponseSchema: Schema<ApiV1WholesaleNumbersDeliveryResponse> =
  s.lazySchema(() =>
    s.object<ApiV1WholesaleNumbersDeliveryResponse>(
      {
        ...apiV1WholesaleNumbersDeliveryResponseProperties,
        phoneNumber: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
      },
      { additionalProperties: s.json() },
    ),
  );
