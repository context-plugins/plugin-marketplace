import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComVendorsApiSchema,
  type DatumCommonelementsComVendorsApi,
} from "./datum-commonelements-com-vendors-api.js";

export type ApiV1VendorsResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComVendorsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1VendorsResponseSchema: Schema<ApiV1VendorsResponse> = s.object<ApiV1VendorsResponse>(
  {
    ok: s.defaulted(s.literal("True"), "True"),
    data: s.array(s.lazy(() => datumCommonelementsComVendorsApiSchema)),
  },
  { additionalProperties: s.json() },
);
