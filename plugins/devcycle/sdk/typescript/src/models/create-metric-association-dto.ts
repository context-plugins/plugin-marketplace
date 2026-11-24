import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateMetricAssociationDto = {
  metric: string;
  feature: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createMetricAssociationDtoSchema: Schema<CreateMetricAssociationDto> =
  s.object<CreateMetricAssociationDto>(
    {
      metric: s.string(),
      feature: s.string(),
    },
    { additionalProperties: s.json() },
  );
