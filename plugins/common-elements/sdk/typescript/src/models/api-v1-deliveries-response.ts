import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataCommonelementsComBulkDeliveryApiSchema,
  type DataCommonelementsComBulkDeliveryApi,
} from "./data-commonelements-com-bulk-delivery-api.js";

export type ApiV1DeliveriesResponse = {
  /** @default "True" */
  ok?: "True";
  data: DataCommonelementsComBulkDeliveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesResponseSchema: Schema<ApiV1DeliveriesResponse> =
  s.object<ApiV1DeliveriesResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: dataCommonelementsComBulkDeliveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
