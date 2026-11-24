import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiRcaEvidenceDtoSchema,
  type PublicApiRcaEvidenceDto,
} from "./public-api-rca-evidence-dto.js";

export type PublicApiRcaInvestigationStepDto = {
  detail?: string;
  evidence?: PublicApiRcaEvidenceDto[];
  order?: number;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaInvestigationStepDtoSchema: Schema<PublicApiRcaInvestigationStepDto> =
  s.object<PublicApiRcaInvestigationStepDto>(
    {
      detail: s.optional(s.string()),
      evidence: s.optional(s.array(s.lazy(() => publicApiRcaEvidenceDtoSchema))),
      order: s.optional(s.int()),
      title: s.string(),
    },
    { additionalProperties: s.json() },
  );
