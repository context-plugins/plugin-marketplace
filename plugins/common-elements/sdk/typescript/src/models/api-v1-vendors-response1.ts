import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataCommonelementsComVendorsApiSchema,
  type DataCommonelementsComVendorsApi,
} from "./data-commonelements-com-vendors-api.js";

export type ApiV1VendorsResponse1 = {
  /** @default "True" */
  ok?: "True";
  data: DataCommonelementsComVendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1VendorsResponse1Schema: Schema<ApiV1VendorsResponse1> = s.object<ApiV1VendorsResponse1>(
  {
    ok: s.defaulted(s.literal("True"), "True"),
    data: dataCommonelementsComVendorsApiSchema,
  },
  { additionalProperties: s.json() },
);
