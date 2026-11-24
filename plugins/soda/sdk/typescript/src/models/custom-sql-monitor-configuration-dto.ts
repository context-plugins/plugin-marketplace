import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exclusionZoneDtoSchema, type ExclusionZoneDto } from "./exclusion-zone-dto.js";
import { thresholdStrategyDtoSchema, type ThresholdStrategyDto } from "./threshold-strategy-dto.js";
import { validRangeDtoSchema, type ValidRangeDto } from "./valid-range-dto.js";

export type CustomSqlMonitorConfigurationDto = {
  groupByColumnNames?: string[];
  resultMetric: string;
  sqlQuery: string;
  exclusionZones?: ExclusionZoneDto[];
  isEnabled?: boolean;
  isSamplingEnabled?: boolean;
  sensitivity?: number;
  thresholdStrategy?: ThresholdStrategyDto;
  validRange?: ValidRangeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customSqlMonitorConfigurationDtoSchema: Schema<CustomSqlMonitorConfigurationDto> =
  s.object<CustomSqlMonitorConfigurationDto>(
    {
      groupByColumnNames: s.optional(s.array(s.string())),
      resultMetric: s.string(),
      sqlQuery: s.string(),
      exclusionZones: s.optional(s.array(s.lazy(() => exclusionZoneDtoSchema))),
      isEnabled: s.optional(s.boolean()),
      isSamplingEnabled: s.optional(s.boolean()),
      sensitivity: s.optional(s.float64()),
      thresholdStrategy: s.optional(s.lazy(() => thresholdStrategyDtoSchema)),
      validRange: s.optional(s.lazy(() => validRangeDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
