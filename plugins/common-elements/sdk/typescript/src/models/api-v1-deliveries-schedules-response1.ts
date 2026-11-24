import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data4CommonelementsComBulkDeliveryApiSchema,
  type Data4CommonelementsComBulkDeliveryApi,
} from "./data4-commonelements-com-bulk-delivery-api.js";

export type ApiV1DeliveriesSchedulesResponse1 = {
  /** @default "True" */
  ok?: "True";
  data: Data4CommonelementsComBulkDeliveryApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesSchedulesResponse1Schema: Schema<ApiV1DeliveriesSchedulesResponse1> =
  s.object<ApiV1DeliveriesSchedulesResponse1>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => data4CommonelementsComBulkDeliveryApiSchema)),
    },
    { additionalProperties: s.json() },
  );
