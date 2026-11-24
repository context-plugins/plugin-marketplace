import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./unions/result.js";

export type MemoryRetrieveResponse = {
  results: Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memoryRetrieveResponseSchema: Schema<MemoryRetrieveResponse> = s.object<MemoryRetrieveResponse>(
  {
    results: s.array(s.lazy(() => resultSchema)),
  },
  { additionalProperties: s.json() },
);
