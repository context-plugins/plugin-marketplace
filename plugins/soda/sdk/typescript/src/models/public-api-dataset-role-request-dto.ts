import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDatasetRoleRequestDto = {
  configureDataset?: boolean;
  createCheckProposals?: boolean;
  deleteDataset?: boolean;
  manageChecks?: boolean;
  manageContracts?: boolean;
  manageIncidents?: boolean;
  managePermissions?: boolean;
  name: string;
  viewFailedRows?: boolean;
  viewProfilingAndSamples?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetRoleRequestDtoSchema: Schema<PublicApiDatasetRoleRequestDto> =
  s.object<PublicApiDatasetRoleRequestDto>(
    {
      configureDataset: s.optional(s.boolean()),
      createCheckProposals: s.optional(s.boolean()),
      deleteDataset: s.optional(s.boolean()),
      manageChecks: s.optional(s.boolean()),
      manageContracts: s.optional(s.boolean()),
      manageIncidents: s.optional(s.boolean()),
      managePermissions: s.optional(s.boolean()),
      name: s.string(),
      viewFailedRows: s.optional(s.boolean()),
      viewProfilingAndSamples: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
