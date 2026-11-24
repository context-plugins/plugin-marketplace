import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `published` (live on the platform, whoever wrote it), `queued` (sent through Prisma, waiting to
 * be published), `failed` (the platform refused it; see `error`) or `unknown` (the request went out
 * but the platform never answered and the reply can't be read back, so Prisma didn't retry; check
 * the review on the platform before posting again; see `error`).
 */
export const StatusPrismaReviewsRepliesApi = {
  Published: "published",
  Queued: "queued",
  Failed: "failed",
  Unknown: "unknown",
} as const;
export type StatusPrismaReviewsRepliesApi =
  | (typeof StatusPrismaReviewsRepliesApi)[keyof typeof StatusPrismaReviewsRepliesApi]
  | (string & {});

export const statusPrismaReviewsRepliesApiSchema: EnumSchema<StatusPrismaReviewsRepliesApi> =
  s.enumOf<StatusPrismaReviewsRepliesApi>(StatusPrismaReviewsRepliesApi);
