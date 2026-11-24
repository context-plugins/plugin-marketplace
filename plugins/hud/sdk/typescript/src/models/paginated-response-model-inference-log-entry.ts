import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelInferenceLogEntrySchema, type ModelInferenceLogEntry } from "./model-inference-log-entry.js";

export type PaginatedResponseModelInferenceLogEntry = {
  items: ModelInferenceLogEntry[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseModelInferenceLogEntrySchema: Schema<PaginatedResponseModelInferenceLogEntry> =
  s.object<PaginatedResponseModelInferenceLogEntry>(
    {
      items: s.array(s.lazy(() => modelInferenceLogEntrySchema)),
      total: s.int(),
      limit: s.int(),
      offset: s.int(),
    },
    { additionalProperties: s.json() },
  );
