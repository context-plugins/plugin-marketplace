import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComAssociationResourcesApiSchema,
  type DatumCommonelementsComAssociationResourcesApi,
} from "./datum-commonelements-com-association-resources-api.js";

export type ApiV1AssociationsParcelsResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComAssociationResourcesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsParcelsResponseSchema: Schema<ApiV1AssociationsParcelsResponse> =
  s.object<ApiV1AssociationsParcelsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datumCommonelementsComAssociationResourcesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
