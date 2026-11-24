import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { unitOfTimeDtoSchema, type UnitOfTimeDto } from "./unit-of-time-dto.js";

export type ProfilingSamplingStrategyConfigurationDto = {
  numberOfRows?: number;
  numberOfUnits?: number;
  unitOfTime?: UnitOfTimeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profilingSamplingStrategyConfigurationDtoSchema: Schema<ProfilingSamplingStrategyConfigurationDto> =
  s.object<ProfilingSamplingStrategyConfigurationDto>(
    {
      numberOfRows: s.optional(s.int()),
      numberOfUnits: s.optional(s.int()),
      unitOfTime: s.optional(s.lazy(() => unitOfTimeDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
