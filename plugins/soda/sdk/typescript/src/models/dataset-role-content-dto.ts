import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetRoleContentDto = {
  configureDataset?: boolean;
  createCheckProposals?: boolean;
  deleteDataset?: boolean;
  /**
   * @deprecated
   */
  executeContracts?: boolean;
  id: string;
  manageChecks?: boolean;
  manageContracts?: boolean;
  manageIncidents?: boolean;
  managePermissions?: boolean;
  name: string;
  /**
   * @deprecated
   */
  publishContracts?: boolean;
  viewFailedRows?: boolean;
  viewProfilingAndSamples?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetRoleContentDtoSchema: Schema<DatasetRoleContentDto> = s.object<DatasetRoleContentDto>(
  {
    configureDataset: s.optional(s.boolean()),
    createCheckProposals: s.optional(s.boolean()),
    deleteDataset: s.optional(s.boolean()),
    executeContracts: s.optional(s.boolean()),
    id: s.string(),
    manageChecks: s.optional(s.boolean()),
    manageContracts: s.optional(s.boolean()),
    manageIncidents: s.optional(s.boolean()),
    managePermissions: s.optional(s.boolean()),
    name: s.string(),
    publishContracts: s.optional(s.boolean()),
    viewFailedRows: s.optional(s.boolean()),
    viewProfilingAndSamples: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
