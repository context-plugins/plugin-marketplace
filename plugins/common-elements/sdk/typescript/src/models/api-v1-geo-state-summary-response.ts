import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";

export type ApiV1GeoStateSummaryResponse = {
  /** @default "True" */
  ok?: "True";
  data: Datum[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GeoStateSummaryResponseSchema: Schema<ApiV1GeoStateSummaryResponse> =
  s.object<ApiV1GeoStateSummaryResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datumSchema)),
    },
    { additionalProperties: s.json() },
  );
