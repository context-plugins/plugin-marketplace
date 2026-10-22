import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const CollectMethodOptionsHealthCheckCollectMethodPost = {
  Post: "post",
} as const;
export type CollectMethodOptionsHealthCheckCollectMethodPost =
  | (typeof CollectMethodOptionsHealthCheckCollectMethodPost)[keyof typeof CollectMethodOptionsHealthCheckCollectMethodPost]
  | (string & {});

export const collectMethodOptionsHealthCheckCollectMethodPostSchema: EnumSchema<CollectMethodOptionsHealthCheckCollectMethodPost> =
  s.enumOf<CollectMethodOptionsHealthCheckCollectMethodPost>(
    CollectMethodOptionsHealthCheckCollectMethodPost,
  );
