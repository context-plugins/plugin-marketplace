import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item5Schema, type Item5 } from "./item5.js";

export type ApiV1MiscInstagramLocationsResponse = {
  items: Item5[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscInstagramLocationsResponseSchema: Schema<ApiV1MiscInstagramLocationsResponse> =
  s.object<ApiV1MiscInstagramLocationsResponse>(
    {
      items: s.array(s.lazy(() => item5Schema)),
    },
    { additionalProperties: s.json() },
  );
