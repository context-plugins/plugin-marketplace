import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `verify_email`: verify the account email first. `not_applicable`: the workspace has paid reads of
 * its own, used instead.
 */
export const StatusPrismaReviewsUsageApi = {
  Available: "available",
  Active: "active",
  UsedUp: "used_up",
  VerifyEmail: "verify_email",
  NotApplicable: "not_applicable",
} as const;
export type StatusPrismaReviewsUsageApi =
  | (typeof StatusPrismaReviewsUsageApi)[keyof typeof StatusPrismaReviewsUsageApi]
  | (string & {});

export const statusPrismaReviewsUsageApiSchema: EnumSchema<StatusPrismaReviewsUsageApi> =
  s.enumOf<StatusPrismaReviewsUsageApi>(StatusPrismaReviewsUsageApi);
