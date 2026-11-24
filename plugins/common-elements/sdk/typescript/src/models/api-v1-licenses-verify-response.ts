import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComProfessionalsAndLicensesApiSchema,
  type DatumCommonelementsComProfessionalsAndLicensesApi,
} from "./datum-commonelements-com-professionals-and-licenses-api.js";

export type ApiV1LicensesVerifyResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComProfessionalsAndLicensesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1LicensesVerifyResponseSchema: Schema<ApiV1LicensesVerifyResponse> =
  s.object<ApiV1LicensesVerifyResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datumCommonelementsComProfessionalsAndLicensesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
