import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const CollectMethodOptionsHealthCheckCollectMethodGet = {
  Get: "get",
} as const;
export type CollectMethodOptionsHealthCheckCollectMethodGet =
  | (typeof CollectMethodOptionsHealthCheckCollectMethodGet)[keyof typeof CollectMethodOptionsHealthCheckCollectMethodGet]
  | (string & {});

export const collectMethodOptionsHealthCheckCollectMethodGetSchema: EnumSchema<CollectMethodOptionsHealthCheckCollectMethodGet> =
  s.enumOf<CollectMethodOptionsHealthCheckCollectMethodGet>(CollectMethodOptionsHealthCheckCollectMethodGet);
