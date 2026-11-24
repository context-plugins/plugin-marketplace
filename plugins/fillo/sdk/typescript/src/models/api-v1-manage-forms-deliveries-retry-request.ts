import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deliveryKindSchema, type DeliveryKind } from "./delivery-kind.js";

/** Exactly one target. deliveryKind and deliveryId are required together. */
export type ApiV1ManageFormsDeliveriesRetryRequest = {
  responseIds?: string[];
  /** A `key` from the delivery-health destinations list. */
  destinationKey?: string;
  deliveryKind?: DeliveryKind;
  deliveryId?: string;
  all?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsDeliveriesRetryRequestProperties: s.Shape<ApiV1ManageFormsDeliveriesRetryRequest> = {
  responseIds: s.optional(s.array(s.string())),
  destinationKey: s.optional(s.string()),
  deliveryKind: s.optional(s.lazy(() => deliveryKindSchema)),
  deliveryId: s.optional(s.string()),
  all: s.optional(s.boolean()),
};

export const apiV1ManageFormsDeliveriesRetryRequestInternalSchema: Schema<ApiV1ManageFormsDeliveriesRetryRequest> =
  s.object<ApiV1ManageFormsDeliveriesRetryRequest>(apiV1ManageFormsDeliveriesRetryRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsDeliveriesRetryRequestSchema: Schema<ApiV1ManageFormsDeliveriesRetryRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ManageFormsDeliveriesRetryRequest>(
      {
        ...apiV1ManageFormsDeliveriesRetryRequestProperties,
        responseIds: s.optional(
          s.array(s.string().check(s.minLength(1), s.maxLength(128))).check(s.maxLength(200)),
        ),
        destinationKey: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
        deliveryId: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
      },
      { additionalProperties: s.json() },
    ),
  );
