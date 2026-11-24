import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum1CommonelementsComStatutesApiSchema,
  type Datum1CommonelementsComStatutesApi,
} from "./datum1-commonelements-com-statutes-api.js";

export type ApiV1StatutesByStateResponse = {
  /** @default "True" */
  ok?: "True";
  data: Datum1CommonelementsComStatutesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1StatutesByStateResponseSchema: Schema<ApiV1StatutesByStateResponse> =
  s.object<ApiV1StatutesByStateResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datum1CommonelementsComStatutesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
