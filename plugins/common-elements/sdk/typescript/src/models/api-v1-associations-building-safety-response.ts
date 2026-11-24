import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type ApiV1AssociationsBuildingSafetyResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsBuildingSafetyResponseSchema: Schema<ApiV1AssociationsBuildingSafetyResponse> =
  s.object<ApiV1AssociationsBuildingSafetyResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: dataSchema,
    },
    { additionalProperties: s.json() },
  );
