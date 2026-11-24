import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersRiskChecksLogs401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersRiskChecksLogs401ErrorSchema: Schema<ApiV2NumbersRiskChecksLogs401Error> =
  s.object<ApiV2NumbersRiskChecksLogs401Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
