import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type ApiV1AssociationsVendorsResponse = {
  /** @default "True" */
  ok?: "True";
  data: Data1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsVendorsResponseSchema: Schema<ApiV1AssociationsVendorsResponse> =
  s.object<ApiV1AssociationsVendorsResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => data1Schema)),
    },
    { additionalProperties: s.json() },
  );
