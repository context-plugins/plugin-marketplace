import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { integrationStatusSchema, type IntegrationStatus } from "./integration-status.js";

export type IntegrationMetadata = {
  externalId: string;
  externalStatus: IntegrationStatus;
  externalUrl: string;
  lastChecked: number;
};

export const integrationMetadataSchema: Schema<IntegrationMetadata> = s.object<IntegrationMetadata>({
  externalId: s.string(),
  externalStatus: integrationStatusSchema,
  externalUrl: s.string(),
  lastChecked: s.int(),
});
