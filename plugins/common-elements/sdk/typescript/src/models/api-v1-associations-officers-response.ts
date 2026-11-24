import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type ApiV1AssociationsOfficersResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsOfficersResponseSchema: Schema<ApiV1AssociationsOfficersResponse> =
  s.object<ApiV1AssociationsOfficersResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => data3Schema)),
    },
    { additionalProperties: s.json() },
  );
