import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessMediaResponse2 = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessMediaResponse2Schema: Schema<ApiV1MiscGoogleBusinessMediaResponse2> =
  s.object<ApiV1MiscGoogleBusinessMediaResponse2>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
