import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusPrismaReviewsUsageApiSchema,
  type StatusPrismaReviewsUsageApi,
} from "./status-prisma-reviews-usage-api.js";

/**
 * One-off free reads (100 per account, never renewed) to try Google Maps and Tripadvisor with real
 * data.
 */
export type FreeTrial = {
  /**
   * `verify_email`: verify the account email first. `not_applicable`: the workspace has paid reads
   * of its own, used instead.
   */
  status?: StatusPrismaReviewsUsageApi;
  reads?: number;
  used?: number;
  left?: number;
  platforms?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const freeTrialSchema: Schema<FreeTrial> = s.object<FreeTrial>(
  {
    status: s.optional(s.lazy(() => statusPrismaReviewsUsageApiSchema)),
    reads: s.optional(s.int()),
    used: s.optional(s.int()),
    left: s.optional(s.int()),
    platforms: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
