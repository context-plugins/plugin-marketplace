import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1CommonelementsComBulkDeliveryApiSchema,
  type Data1CommonelementsComBulkDeliveryApi,
} from "./data1-commonelements-com-bulk-delivery-api.js";

export type ApiV1DeliveriesResponse1 = {
  /** @default "True" */
  ok?: "True";
  data: Data1CommonelementsComBulkDeliveryApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesResponse1Schema: Schema<ApiV1DeliveriesResponse1> =
  s.object<ApiV1DeliveriesResponse1>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => data1CommonelementsComBulkDeliveryApiSchema)),
    },
    { additionalProperties: s.json() },
  );
