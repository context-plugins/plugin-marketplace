import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type ApiV1AssociationsManagementResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsManagementResponseSchema: Schema<ApiV1AssociationsManagementResponse> =
  s.object<ApiV1AssociationsManagementResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: data4Schema,
    },
    { additionalProperties: s.json() },
  );
