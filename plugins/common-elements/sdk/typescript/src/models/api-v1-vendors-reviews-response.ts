import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1CommonelementsComVendorsApiSchema,
  type Data1CommonelementsComVendorsApi,
} from "./data1-commonelements-com-vendors-api.js";

export type ApiV1VendorsReviewsResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data1CommonelementsComVendorsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1VendorsReviewsResponseSchema: Schema<ApiV1VendorsReviewsResponse> =
  s.object<ApiV1VendorsReviewsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => data1CommonelementsComVendorsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
