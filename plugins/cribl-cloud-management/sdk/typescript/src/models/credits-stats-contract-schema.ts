import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditsStatsContractSchema = {
  /** Contract start date in ISO 8601 format. */
  startDate: Date;
  /** Contract end date in ISO 8601 format. Present only when the contract is closed. */
  endDate?: Date;
};

export const creditsStatsContractSchemaSchema: Schema<CreditsStatsContractSchema> =
  s.object<CreditsStatsContractSchema>({
    startDate: s.dateTime(),
    endDate: s.optional(s.dateTime()),
  });
