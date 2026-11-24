import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data3CommonelementsComBulkDeliveryApiSchema,
  type Data3CommonelementsComBulkDeliveryApi,
} from "./data3-commonelements-com-bulk-delivery-api.js";

export type ApiV1DeliveriesSchedulesResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data3CommonelementsComBulkDeliveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesSchedulesResponseSchema: Schema<ApiV1DeliveriesSchedulesResponse> =
  s.object<ApiV1DeliveriesSchedulesResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: data3CommonelementsComBulkDeliveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
