import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchResultRowSchema, type SearchResultRow } from "./search-result-row.js";

export type NearbyOk = {
  data?: SearchResultRow[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nearbyOkSchema: Schema<NearbyOk> = s.object<NearbyOk>(
  {
    data: s.optional(s.array(s.lazy(() => searchResultRowSchema))),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
