import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkResultLevelDtoSchema, type CheckResultLevelDto } from "./check-result-level-dto.js";
import { checkTypeDtoSchema, type CheckTypeDto } from "./check-type-dto.js";

export type DataStandardCheckContentDto = {
  checkType?: CheckTypeDto;
  compliance?: number;
  datasetCount?: number;
  failingCount?: number;
  lastScanTime?: Date;
  name?: string;
  notEvaluatedCount?: number;
  passingCount?: number;
  warningCount?: number;
  worstLevel?: CheckResultLevelDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardCheckContentDtoSchema: Schema<DataStandardCheckContentDto> =
  s.object<DataStandardCheckContentDto>(
    {
      checkType: s.optional(s.lazy(() => checkTypeDtoSchema)),
      compliance: s.optional(s.float64()),
      datasetCount: s.optional(s.int()),
      failingCount: s.optional(s.int()),
      lastScanTime: s.optional(s.dateTime()),
      name: s.optional(s.string()),
      notEvaluatedCount: s.optional(s.int()),
      passingCount: s.optional(s.int()),
      warningCount: s.optional(s.int()),
      worstLevel: s.optional(s.lazy(() => checkResultLevelDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
