import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResultCarsXeRecognitionApi = {
  plate?: string;
  box?: Record<string, unknown>;
  region?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultCarsXeRecognitionApiSchema: Schema<ResultCarsXeRecognitionApi> =
  s.object<ResultCarsXeRecognitionApi>(
    {
      plate: s.optional(s.string()),
      box: s.optional(s.record(s.string(), s.unknown())),
      region: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
