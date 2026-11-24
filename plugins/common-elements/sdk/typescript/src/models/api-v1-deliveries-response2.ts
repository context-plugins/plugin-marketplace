import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data2CommonelementsComBulkDeliveryApiSchema,
  type Data2CommonelementsComBulkDeliveryApi,
} from "./data2-commonelements-com-bulk-delivery-api.js";

export type ApiV1DeliveriesResponse2 = {
  /** @default "True" */
  ok?: "True";
  data: Data2CommonelementsComBulkDeliveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesResponse2Schema: Schema<ApiV1DeliveriesResponse2> =
  s.object<ApiV1DeliveriesResponse2>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: data2CommonelementsComBulkDeliveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
