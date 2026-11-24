import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  profilingSamplingStrategyConfigurationDtoSchema,
  type ProfilingSamplingStrategyConfigurationDto,
} from "./profiling-sampling-strategy-configuration-dto.js";
import { zonedCronDtoSchema, type ZonedCronDto } from "./zoned-cron-dto.js";

export type UpdateDatasetProfilingConfigurationRequestDto = {
  enabled?: boolean;
  profilingSamplingStrategy?: ProfilingSamplingStrategyConfigurationDto;
  scanSchedule?: ZonedCronDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetProfilingConfigurationRequestDtoSchema: Schema<UpdateDatasetProfilingConfigurationRequestDto> =
  s.object<UpdateDatasetProfilingConfigurationRequestDto>(
    {
      enabled: s.optional(s.boolean()),
      profilingSamplingStrategy: s.optional(s.lazy(() => profilingSamplingStrategyConfigurationDtoSchema)),
      scanSchedule: s.optional(s.lazy(() => zonedCronDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
