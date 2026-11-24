import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CurrentVisitorsResponse = {
  siteId?: number;
  visitors?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currentVisitorsResponseSchema: Schema<CurrentVisitorsResponse> =
  s.object<CurrentVisitorsResponse>(
    {
      siteId: s.optional(s.int()),
      visitors: s.optional(s.int()),
      _keysMap: {
        siteId: "site_id",
      },
    },
    { additionalProperties: s.json() },
  );
