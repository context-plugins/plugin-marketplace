import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum1CommonelementsComChangeFeedApiSchema,
  type Datum1CommonelementsComChangeFeedApi,
} from "./datum1-commonelements-com-change-feed-api.js";

export type ApiV1ChangesSummaryResponse = {
  /** @default "True" */
  ok?: "True";
  data: Datum1CommonelementsComChangeFeedApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ChangesSummaryResponseSchema: Schema<ApiV1ChangesSummaryResponse> =
  s.object<ApiV1ChangesSummaryResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datum1CommonelementsComChangeFeedApiSchema)),
    },
    { additionalProperties: s.json() },
  );
