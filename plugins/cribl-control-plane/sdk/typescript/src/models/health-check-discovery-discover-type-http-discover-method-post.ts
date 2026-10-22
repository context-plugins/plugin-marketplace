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

export type HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPost = {
  /** Discriminator value. */
  discoverMethod?: CollectMethodOptionsHealthCheckCollectMethodPost;
  /** Optional discover request parameters. */
  discoverRequestParams?: CollectRequestParamConfHealthCheckCollectMethodPost[];
};

export const healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostSchema: Schema<HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPost> =
  s.object<HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPost>({
    discoverMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostSchema)),
    discoverRequestParams: s.optional(
      s.array(s.lazy(() => collectRequestParamConfHealthCheckCollectMethodPostSchema)),
    ),
  });
