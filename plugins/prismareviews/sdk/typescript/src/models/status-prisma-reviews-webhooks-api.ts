import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusPrismaReviewsWebhooksApi = {
  Active: "active",
  ReauthRequired: "reauth_required",
} as const;
export type StatusPrismaReviewsWebhooksApi =
  | (typeof StatusPrismaReviewsWebhooksApi)[keyof typeof StatusPrismaReviewsWebhooksApi]
  | (string & {});

export const statusPrismaReviewsWebhooksApiSchema: EnumSchema<StatusPrismaReviewsWebhooksApi> =
  s.enumOf<StatusPrismaReviewsWebhooksApi>(StatusPrismaReviewsWebhooksApi);
