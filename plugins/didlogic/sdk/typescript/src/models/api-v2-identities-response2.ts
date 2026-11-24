import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2IdentitiesResponse2 = {
  /** Success message */
  message: string;
  /** Archived identity ID */
  identityId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2IdentitiesResponse2Schema: Schema<ApiV2IdentitiesResponse2> =
  s.object<ApiV2IdentitiesResponse2>(
    {
      message: s.string(),
      identityId: s.int(),
      _keysMap: {
        identityId: "identity_id",
      },
    },
    { additionalProperties: s.json() },
  );
