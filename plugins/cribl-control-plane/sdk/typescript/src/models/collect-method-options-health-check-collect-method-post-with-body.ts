import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const CollectMethodOptionsHealthCheckCollectMethodPostWithBody = {
  PostWithBody: "post_with_body",
} as const;
export type CollectMethodOptionsHealthCheckCollectMethodPostWithBody =
  | (typeof CollectMethodOptionsHealthCheckCollectMethodPostWithBody)[keyof typeof CollectMethodOptionsHealthCheckCollectMethodPostWithBody]
  | (string & {});

export const collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema: EnumSchema<CollectMethodOptionsHealthCheckCollectMethodPostWithBody> =
  s.enumOf<CollectMethodOptionsHealthCheckCollectMethodPostWithBody>(
    CollectMethodOptionsHealthCheckCollectMethodPostWithBody,
  );
