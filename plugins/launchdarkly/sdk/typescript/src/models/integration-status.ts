import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IntegrationStatus = {
  display: string;
  value: string;
};

export const integrationStatusSchema: Schema<IntegrationStatus> = s.object<IntegrationStatus>({
  display: s.string(),
  value: s.string(),
});
