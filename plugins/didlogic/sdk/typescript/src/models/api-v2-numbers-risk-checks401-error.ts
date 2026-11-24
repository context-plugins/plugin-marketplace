import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersRiskChecks401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersRiskChecks401ErrorSchema: Schema<ApiV2NumbersRiskChecks401Error> =
  s.object<ApiV2NumbersRiskChecks401Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
