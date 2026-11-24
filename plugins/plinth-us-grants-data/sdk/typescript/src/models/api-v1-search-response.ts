import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result1InternalSchema, result1Schema, type Result1 } from "./result1.js";
import {
  xPlinthPlinthUsGrantsDataResolveApiSchema,
  type XPlinthPlinthUsGrantsDataResolveApi,
} from "./xplinth-plinth-us-grants-data-resolve-api.js";

export type ApiV1SearchResponse = {
  /**
   * The matching mode actually served. Always `text` today: the vector index is unpopulated, so
   * semantic matching is not offered and the `mode` REQUEST parameter is deliberately not part of
   * this contract. Sending one is not an error — it comes back named in `x_plinth.warnings`.
   * Present on EVERY response, including errors and the too-short-query case.
   */
  mode?: string;
  results?: Result1[];
  /**
   * Present only when something needs saying: `warnings[]` names any parameter this endpoint does
   * not accept or could not honour, and `unsupported[]` lists the fatal ones. Same shape as the
   * grant endpoints.
   */
  xPlinth?: XPlinthPlinthUsGrantsDataResolveApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SearchResponseProperties: s.Shape<ApiV1SearchResponse> = {
  mode: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => result1InternalSchema))),
  xPlinth: s.optional(s.lazy(() => xPlinthPlinthUsGrantsDataResolveApiSchema)),
  _keysMap: {
    xPlinth: "x_plinth",
  },
};

export const apiV1SearchResponseInternalSchema: Schema<ApiV1SearchResponse> = s.object<ApiV1SearchResponse>(
  apiV1SearchResponseProperties,
  { additionalProperties: s.json() },
);

export const apiV1SearchResponseSchema: Schema<ApiV1SearchResponse> = s.lazySchema(() =>
  s.object<ApiV1SearchResponse>(
    {
      ...apiV1SearchResponseProperties,
      results: s.optional(s.array(s.lazy(() => result1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
