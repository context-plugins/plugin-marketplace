import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataStandardCheckResultsDto = {
  failingCount?: number;
  notEvaluatedCount?: number;
  passingCount?: number;
  warningCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardCheckResultsDtoSchema: Schema<DataStandardCheckResultsDto> =
  s.object<DataStandardCheckResultsDto>(
    {
      failingCount: s.optional(s.int()),
      notEvaluatedCount: s.optional(s.int()),
      passingCount: s.optional(s.int()),
      warningCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
