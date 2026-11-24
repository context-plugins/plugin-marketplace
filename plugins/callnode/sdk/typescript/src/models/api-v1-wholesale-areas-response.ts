import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { areaSchema, type Area } from "./area.js";

export type ApiV1WholesaleAreasResponse = {
  areas?: Area[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WholesaleAreasResponseSchema: Schema<ApiV1WholesaleAreasResponse> =
  s.object<ApiV1WholesaleAreasResponse>(
    {
      areas: s.optional(s.array(s.lazy(() => areaSchema))),
    },
    { additionalProperties: s.json() },
  );
