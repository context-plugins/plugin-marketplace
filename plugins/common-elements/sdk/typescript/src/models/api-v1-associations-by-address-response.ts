import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1Schema, type Datum1 } from "./datum1.js";

export type ApiV1AssociationsByAddressResponse = {
  /** @default "True" */
  ok?: "True";
  data: Datum1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsByAddressResponseSchema: Schema<ApiV1AssociationsByAddressResponse> =
  s.object<ApiV1AssociationsByAddressResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datum1Schema)),
    },
    { additionalProperties: s.json() },
  );
