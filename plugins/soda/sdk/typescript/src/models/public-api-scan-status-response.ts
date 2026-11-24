import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiCheckSlimDtoSchema, type PublicApiCheckSlimDto } from "./public-api-check-slim-dto.js";
import {
  publicApiPostProcessingStageDtoSchema,
  type PublicApiPostProcessingStageDto,
} from "./public-api-post-processing-stage-dto.js";
import {
  publicApiScanDefinitionSlimSchema,
  type PublicApiScanDefinitionSlim,
} from "./public-api-scan-definition-slim.js";
import { scanStateDtoSchema, type ScanStateDto } from "./scan-state-dto.js";

export type PublicApiScanStatusResponse = {
  /**
   * @deprecated
   */
  agentId?: string;
  checks?: PublicApiCheckSlimDto[];
  cloudUrl: string;
  contractDatasetCloudUrl?: string;
  created: Date;
  ended?: Date;
  errors?: number;
  failures?: number;
  id: string;
  postProcessingStages?: PublicApiPostProcessingStageDto[];
  runnerId?: string;
  scanDefinition?: PublicApiScanDefinitionSlim;
  scanTime?: Date;
  started?: Date;
  state: ScanStateDto;
  submitted?: Date;
  warnings?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiScanStatusResponseSchema: Schema<PublicApiScanStatusResponse> =
  s.object<PublicApiScanStatusResponse>(
    {
      agentId: s.optional(s.string()),
      checks: s.optional(s.array(s.lazy(() => publicApiCheckSlimDtoSchema))),
      cloudUrl: s.string(),
      contractDatasetCloudUrl: s.optional(s.string()),
      created: s.dateTime(),
      ended: s.optional(s.dateTime()),
      errors: s.optional(s.int()),
      failures: s.optional(s.int()),
      id: s.string(),
      postProcessingStages: s.optional(s.array(s.lazy(() => publicApiPostProcessingStageDtoSchema))),
      runnerId: s.optional(s.string()),
      scanDefinition: s.optional(s.lazy(() => publicApiScanDefinitionSlimSchema)),
      scanTime: s.optional(s.dateTime()),
      started: s.optional(s.dateTime()),
      state: scanStateDtoSchema,
      submitted: s.optional(s.dateTime()),
      warnings: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
