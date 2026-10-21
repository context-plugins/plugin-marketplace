import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodPostSchema,
  type CollectMethodOptionsHealthCheckCollectMethodPost,
} from "./collect-method-options-health-check-collect-method-post.js";
import {
  collectRequestParamConfHealthCheckCollectMethodPostSchema,
  type CollectRequestParamConfHealthCheckCollectMethodPost,
} from "./collect-request-param-conf-health-check-collect-method-post.js";

export type HealthCheckCollectMethodPost = {
  /** Discriminator value. */
  collectMethod?: CollectMethodOptionsHealthCheckCollectMethodPost;
  /** Optional health check request parameters. */
  collectRequestParams?: CollectRequestParamConfHealthCheckCollectMethodPost[];
};

export const healthCheckCollectMethodPostSchema: Schema<HealthCheckCollectMethodPost> =
  s.object<HealthCheckCollectMethodPost>({
    collectMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostSchema)),
    collectRequestParams: s.optional(
      s.array(s.lazy(() => collectRequestParamConfHealthCheckCollectMethodPostSchema)),
    ),
  });
