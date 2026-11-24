import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2Schema, type Datum2 } from "./datum2.js";

export type ApiV1AssociationsNearbyResponse = {
  /** @default "True" */
  ok?: "True";
  data: Datum2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsNearbyResponseSchema: Schema<ApiV1AssociationsNearbyResponse> =
  s.object<ApiV1AssociationsNearbyResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datum2Schema)),
    },
    { additionalProperties: s.json() },
  );
