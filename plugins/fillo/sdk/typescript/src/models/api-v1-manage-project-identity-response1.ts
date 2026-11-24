import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageProjectIdentityResponse1 = {
  /** @default "True" */
  enabled?: "True";
  minted: boolean;
  /** Present only when minted is true. Shown once — store it now. */
  secret?: string;
  protectedFormCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectIdentityResponse1Schema: Schema<ApiV1ManageProjectIdentityResponse1> =
  s.object<ApiV1ManageProjectIdentityResponse1>(
    {
      enabled: s.defaulted(s.literal("True"), "True"),
      minted: s.boolean(),
      secret: s.optional(s.string()),
      protectedFormCount: s.int(),
    },
    { additionalProperties: s.json() },
  );
