import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum1CommonelementsComProfessionalsAndLicensesApiSchema,
  type Datum1CommonelementsComProfessionalsAndLicensesApi,
} from "./datum1-commonelements-com-professionals-and-licenses-api.js";

export type ApiV1ProfessionalsSearchResponse = {
  /** @default "True" */
  ok?: "True";
  data: Datum1CommonelementsComProfessionalsAndLicensesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ProfessionalsSearchResponseSchema: Schema<ApiV1ProfessionalsSearchResponse> =
  s.object<ApiV1ProfessionalsSearchResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datum1CommonelementsComProfessionalsAndLicensesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
