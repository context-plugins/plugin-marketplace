import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exclusionZoneDtoSchema, type ExclusionZoneDto } from "./exclusion-zone-dto.js";
import {
  groupByColumnConfigurationDtoSchema,
  type GroupByColumnConfigurationDto,
} from "./group-by-column-configuration-dto.js";
import { thresholdStrategyDtoSchema, type ThresholdStrategyDto } from "./threshold-strategy-dto.js";
import { validRangeDtoSchema, type ValidRangeDto } from "./valid-range-dto.js";

export type ColumnMonitorConfigurationDto = {
  groupByColumns?: GroupByColumnConfigurationDto[];
  exclusionZones?: ExclusionZoneDto[];
  isEnabled?: boolean;
  isSamplingEnabled?: boolean;
  sensitivity?: number;
  thresholdStrategy?: ThresholdStrategyDto;
  validRange?: ValidRangeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnMonitorConfigurationDtoSchema: Schema<ColumnMonitorConfigurationDto> =
  s.object<ColumnMonitorConfigurationDto>(
    {
      groupByColumns: s.optional(s.array(s.lazy(() => groupByColumnConfigurationDtoSchema))),
      exclusionZones: s.optional(s.array(s.lazy(() => exclusionZoneDtoSchema))),
      isEnabled: s.optional(s.boolean()),
      isSamplingEnabled: s.optional(s.boolean()),
      sensitivity: s.optional(s.float64()),
      thresholdStrategy: s.optional(s.lazy(() => thresholdStrategyDtoSchema)),
      validRange: s.optional(s.lazy(() => validRangeDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
