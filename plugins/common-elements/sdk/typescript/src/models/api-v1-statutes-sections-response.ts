import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataCommonelementsComStatutesApiSchema,
  type DataCommonelementsComStatutesApi,
} from "./data-commonelements-com-statutes-api.js";

export type ApiV1StatutesSectionsResponse = {
  /** @default "True" */
  ok?: "True";
  data: DataCommonelementsComStatutesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1StatutesSectionsResponseSchema: Schema<ApiV1StatutesSectionsResponse> =
  s.object<ApiV1StatutesSectionsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: dataCommonelementsComStatutesApiSchema,
    },
    { additionalProperties: s.json() },
  );
