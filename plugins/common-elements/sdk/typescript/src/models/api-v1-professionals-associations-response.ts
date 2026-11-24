import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1CommonelementsComProfessionalsAndLicensesApiSchema,
  type Data1CommonelementsComProfessionalsAndLicensesApi,
} from "./data1-commonelements-com-professionals-and-licenses-api.js";

export type ApiV1ProfessionalsAssociationsResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data1CommonelementsComProfessionalsAndLicensesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ProfessionalsAssociationsResponseSchema: Schema<ApiV1ProfessionalsAssociationsResponse> =
  s.object<ApiV1ProfessionalsAssociationsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => data1CommonelementsComProfessionalsAndLicensesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
