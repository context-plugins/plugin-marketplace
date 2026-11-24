import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersRiskChecksResponse2 = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersRiskChecksResponse2Schema: Schema<ApiV2NumbersRiskChecksResponse2> =
  s.object<ApiV2NumbersRiskChecksResponse2>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
