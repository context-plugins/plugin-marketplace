import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageProjectIdentityResponse2 = {
  /** @default "False" */
  enabled?: "False";
  /** @default "True" */
  disabled?: "True";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectIdentityResponse2Schema: Schema<ApiV1ManageProjectIdentityResponse2> =
  s.object<ApiV1ManageProjectIdentityResponse2>(
    {
      enabled: s.defaulted(s.literal("False"), "False"),
      disabled: s.defaulted(s.literal("True"), "True"),
    },
    { additionalProperties: s.json() },
  );
