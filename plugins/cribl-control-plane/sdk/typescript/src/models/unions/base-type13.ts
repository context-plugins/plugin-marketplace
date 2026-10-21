import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  healthCheckCollectMethodGetSchema,
  type HealthCheckCollectMethodGet,
} from "../health-check-collect-method-get.js";
import {
  healthCheckCollectMethodPostWithBodySchema,
  type HealthCheckCollectMethodPostWithBody,
} from "../health-check-collect-method-post-with-body.js";
import {
  healthCheckCollectMethodPostSchema,
  type HealthCheckCollectMethodPost,
} from "../health-check-collect-method-post.js";

export type BaseType13 =
  | (HealthCheckCollectMethodGet & { collectMethod: "get" })
  | (HealthCheckCollectMethodPost & { collectMethod: "post" })
  | (HealthCheckCollectMethodPostWithBody & { collectMethod: "post_with_body" });

export const baseType13Schema: Schema<BaseType13> = s.discriminatedUnion<BaseType13>("collectMethod", {
  get: healthCheckCollectMethodGetSchema,
  post: healthCheckCollectMethodPostSchema,
  post_with_body: healthCheckCollectMethodPostWithBodySchema,
});
