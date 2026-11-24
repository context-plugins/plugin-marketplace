import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComBulkDeliveryApiSchema,
  type DatumCommonelementsComBulkDeliveryApi,
} from "./datum-commonelements-com-bulk-delivery-api.js";

export type ApiV1DeliveriesDatasetsResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComBulkDeliveryApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DeliveriesDatasetsResponseSchema: Schema<ApiV1DeliveriesDatasetsResponse> =
  s.object<ApiV1DeliveriesDatasetsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datumCommonelementsComBulkDeliveryApiSchema)),
    },
    { additionalProperties: s.json() },
  );
