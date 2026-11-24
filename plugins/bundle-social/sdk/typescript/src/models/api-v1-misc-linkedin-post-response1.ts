import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscLinkedinPostResponse1 = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscLinkedinPostResponse1Schema: Schema<ApiV1MiscLinkedinPostResponse1> =
  s.object<ApiV1MiscLinkedinPostResponse1>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
