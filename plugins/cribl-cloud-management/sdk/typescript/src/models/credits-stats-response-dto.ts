import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditsStatsContractSchemaSchema,
  type CreditsStatsContractSchema,
} from "./credits-stats-contract-schema.js";

export type CreditsStatsResponseDto = {
  /** Credits remaining under the current contract. */
  totalCreditsRemaining: number;
  /** Credits consumed under the current contract. */
  totalCreditsUsed: number;
  /** Credits acquired under the current contract. */
  totalCreditsAcquired: number;
  /**
   * All contracts for the Organization, ordered by contract start date in reverse chronological
   * order (newest first).
   */
  contracts?: CreditsStatsContractSchema[];
};

export const creditsStatsResponseDtoSchema: Schema<CreditsStatsResponseDto> =
  s.object<CreditsStatsResponseDto>({
    totalCreditsRemaining: s.float64(),
    totalCreditsUsed: s.float64(),
    totalCreditsAcquired: s.float64(),
    contracts: s.optional(s.array(s.lazy(() => creditsStatsContractSchemaSchema))),
  });
