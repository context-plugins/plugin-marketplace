import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComChangeFeedApiSchema,
  type DatumCommonelementsComChangeFeedApi,
} from "./datum-commonelements-com-change-feed-api.js";

export type ApiV1ChangesResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComChangeFeedApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ChangesResponseSchema: Schema<ApiV1ChangesResponse> = s.object<ApiV1ChangesResponse>(
  {
    ok: s.defaulted(s.literal("True"), "True"),
    data: s.array(s.lazy(() => datumCommonelementsComChangeFeedApiSchema)),
  },
  { additionalProperties: s.json() },
);
