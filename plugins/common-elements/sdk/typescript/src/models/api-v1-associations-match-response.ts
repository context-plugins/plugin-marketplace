import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComAssociationsApiSchema,
  type DatumCommonelementsComAssociationsApi,
} from "./datum-commonelements-com-associations-api.js";

export type ApiV1AssociationsMatchResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComAssociationsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsMatchResponseSchema: Schema<ApiV1AssociationsMatchResponse> =
  s.object<ApiV1AssociationsMatchResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datumCommonelementsComAssociationsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
