import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComStatutesApiSchema,
  type DatumCommonelementsComStatutesApi,
} from "./datum-commonelements-com-statutes-api.js";

export type ApiV1StatutesSearchResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComStatutesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1StatutesSearchResponseSchema: Schema<ApiV1StatutesSearchResponse> =
  s.object<ApiV1StatutesSearchResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datumCommonelementsComStatutesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
