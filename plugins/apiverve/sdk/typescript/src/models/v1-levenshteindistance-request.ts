import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LevenshteindistanceRequest = {
  /** First string to compare (max 10,000 characters) */
  string1: string;
  /** Second string to compare (max 10,000 characters) */
  string2: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LevenshteindistanceRequestSchema: Schema<V1LevenshteindistanceRequest> =
  s.object<V1LevenshteindistanceRequest>(
    {
      string1: s.string(),
      string2: s.string(),
    },
    { additionalProperties: s.json() },
  );
