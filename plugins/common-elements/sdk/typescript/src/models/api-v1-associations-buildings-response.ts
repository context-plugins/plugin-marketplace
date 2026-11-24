import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type ApiV1AssociationsBuildingsResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsBuildingsResponseSchema: Schema<ApiV1AssociationsBuildingsResponse> =
  s.object<ApiV1AssociationsBuildingsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: data5Schema,
    },
    { additionalProperties: s.json() },
  );
