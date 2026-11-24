import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dids2Schema, type Dids2 } from "./dids2.js";

export type ApiV2NumbersSearchResponse = {
  /** Paginated search results */
  dids: Dids2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersSearchResponseSchema: Schema<ApiV2NumbersSearchResponse> =
  s.object<ApiV2NumbersSearchResponse>(
    {
      dids: dids2Schema,
    },
    { additionalProperties: s.json() },
  );
