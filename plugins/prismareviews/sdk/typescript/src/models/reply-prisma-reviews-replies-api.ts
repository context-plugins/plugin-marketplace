import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusPrismaReviewsRepliesApiSchema,
  type StatusPrismaReviewsRepliesApi,
} from "./status-prisma-reviews-replies-api.js";

/** The business reply to a review. */
export type ReplyPrismaReviewsRepliesApi = {
  /** Reply text. */
  text: string;
  /**
   * When the reply was published. `null` while a first reply is queued; when a reply is replaced,
   * it keeps the previous value until the new one is published.
   */
  createdAt: Date | null;
  /**
   * `published` (live on the platform, whoever wrote it), `queued` (sent through Prisma, waiting to
   * be published), `failed` (the platform refused it; see `error`) or `unknown` (the request went
   * out but the platform never answered and the reply can't be read back, so Prisma didn't retry;
   * check the review on the platform before posting again; see `error`).
   */
  status: StatusPrismaReviewsRepliesApi | null;
  /** Why publishing failed, when `status` is `failed`. */
  error: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replyPrismaReviewsRepliesApiSchema: Schema<ReplyPrismaReviewsRepliesApi> =
  s.object<ReplyPrismaReviewsRepliesApi>(
    {
      text: s.string(),
      createdAt: s.nullable(s.dateTime()),
      status: s.nullable(s.lazy(() => statusPrismaReviewsRepliesApiSchema)),
      error: s.nullable(s.string()),
      _keysMap: {
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
