import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiBlastRadiusDtoSchema,
  type PublicApiBlastRadiusDto,
} from "./public-api-blast-radius-dto.js";
import {
  publicApiRcaAffectedResourceDtoSchema,
  type PublicApiRcaAffectedResourceDto,
} from "./public-api-rca-affected-resource-dto.js";

export type PublicApiImpactAssessmentDto = {
  affectedResources?: PublicApiRcaAffectedResourceDto[];
  blastRadius?: PublicApiBlastRadiusDto;
  summary?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiImpactAssessmentDtoSchema: Schema<PublicApiImpactAssessmentDto> =
  s.object<PublicApiImpactAssessmentDto>(
    {
      affectedResources: s.optional(s.array(s.lazy(() => publicApiRcaAffectedResourceDtoSchema))),
      blastRadius: s.optional(s.lazy(() => publicApiBlastRadiusDtoSchema)),
      summary: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
