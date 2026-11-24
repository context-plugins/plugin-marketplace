import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataCommonelementsComProfessionalsAndLicensesApiSchema,
  type DataCommonelementsComProfessionalsAndLicensesApi,
} from "./data-commonelements-com-professionals-and-licenses-api.js";

export type ApiV1ProfessionalsResponse = {
  /** @default "True" */
  ok?: "True";
  data: DataCommonelementsComProfessionalsAndLicensesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ProfessionalsResponseSchema: Schema<ApiV1ProfessionalsResponse> =
  s.object<ApiV1ProfessionalsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: dataCommonelementsComProfessionalsAndLicensesApiSchema,
    },
    { additionalProperties: s.json() },
  );
