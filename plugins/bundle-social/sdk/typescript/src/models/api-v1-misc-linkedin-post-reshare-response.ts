import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscLinkedinPostReshareResponse = {
  success: boolean;
  id: string;
  activity?: string | null;
  permalink?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscLinkedinPostReshareResponseSchema: Schema<ApiV1MiscLinkedinPostReshareResponse> =
  s.object<ApiV1MiscLinkedinPostReshareResponse>(
    {
      success: s.boolean(),
      id: s.string(),
      activity: s.optionalNullable(s.string()),
      permalink: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
