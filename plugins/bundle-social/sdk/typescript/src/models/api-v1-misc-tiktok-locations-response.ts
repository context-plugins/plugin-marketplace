import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item7Schema, type Item7 } from "./item7.js";

export type ApiV1MiscTiktokLocationsResponse = {
  items: Item7[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscTiktokLocationsResponseSchema: Schema<ApiV1MiscTiktokLocationsResponse> =
  s.object<ApiV1MiscTiktokLocationsResponse>(
    {
      items: s.array(s.lazy(() => item7Schema)),
    },
    { additionalProperties: s.json() },
  );
