import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiRcaMetricDtoSchema, type PublicApiRcaMetricDto } from "./public-api-rca-metric-dto.js";
import {
  publicApiRcaResourceRefDtoSchema,
  type PublicApiRcaResourceRefDto,
} from "./public-api-rca-resource-ref-dto.js";

export type PublicApiRcaAffectedResourceDto = {
  description: string;
  metrics?: PublicApiRcaMetricDto[];
  resource: PublicApiRcaResourceRefDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaAffectedResourceDtoSchema: Schema<PublicApiRcaAffectedResourceDto> =
  s.object<PublicApiRcaAffectedResourceDto>(
    {
      description: s.string(),
      metrics: s.optional(s.array(s.lazy(() => publicApiRcaMetricDtoSchema))),
      resource: publicApiRcaResourceRefDtoSchema,
    },
    { additionalProperties: s.json() },
  );
