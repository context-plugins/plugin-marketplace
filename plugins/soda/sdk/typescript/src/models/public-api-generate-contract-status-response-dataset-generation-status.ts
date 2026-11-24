import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scanStateDtoSchema, type ScanStateDto } from "./scan-state-dto.js";

export type PublicApiGenerateContractStatusResponseDatasetGenerationStatus = {
  datasetId?: string;
  datasetQualifiedName?: string;
  scanCloudUrl?: string;
  scanId?: string;
  scanState?: ScanStateDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiGenerateContractStatusResponseDatasetGenerationStatusSchema: Schema<PublicApiGenerateContractStatusResponseDatasetGenerationStatus> =
  s.object<PublicApiGenerateContractStatusResponseDatasetGenerationStatus>(
    {
      datasetId: s.optional(s.string()),
      datasetQualifiedName: s.optional(s.string()),
      scanCloudUrl: s.optional(s.string()),
      scanId: s.optional(s.string()),
      scanState: s.optional(s.lazy(() => scanStateDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
