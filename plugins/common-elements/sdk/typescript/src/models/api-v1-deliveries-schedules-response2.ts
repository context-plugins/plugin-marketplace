import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data5CommonelementsComBulkDeliveryApiSchema,
  type Data5CommonelementsComBulkDeliveryApi,
} from "./data5-commonelements-com-bulk-delivery-api.js";

export type ApiV1DeliveriesSchedulesResponse2 = {
  /** @default "True" */
  ok?: "True";
  data: Data5CommonelementsComBulkDeliveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesSchedulesResponse2Schema: Schema<ApiV1DeliveriesSchedulesResponse2> =
  s.object<ApiV1DeliveriesSchedulesResponse2>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: data5CommonelementsComBulkDeliveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
