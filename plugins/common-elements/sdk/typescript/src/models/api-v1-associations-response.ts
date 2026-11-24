import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";

export type ApiV1AssociationsResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsResponseSchema: Schema<ApiV1AssociationsResponse> =
  s.object<ApiV1AssociationsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: data2Schema,
    },
    { additionalProperties: s.json() },
  );
