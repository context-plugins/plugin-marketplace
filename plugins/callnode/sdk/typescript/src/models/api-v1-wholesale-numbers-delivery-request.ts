import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1WholesaleNumbersDeliveryRequest = {
  deliverTo: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WholesaleNumbersDeliveryRequestSchema: Schema<ApiV1WholesaleNumbersDeliveryRequest> =
  s.object<ApiV1WholesaleNumbersDeliveryRequest>(
    {
      deliverTo: s.string(),
    },
    { additionalProperties: s.json() },
  );
