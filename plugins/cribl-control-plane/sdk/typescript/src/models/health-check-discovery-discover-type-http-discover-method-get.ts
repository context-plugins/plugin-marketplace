import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodGetSchema,
  type CollectMethodOptionsHealthCheckCollectMethodGet,
} from "./collect-method-options-health-check-collect-method-get.js";
import {
  collectRequestParamConfHealthCheckCollectMethodPostSchema,
  type CollectRequestParamConfHealthCheckCollectMethodPost,
} from "./collect-request-param-conf-health-check-collect-method-post.js";

export type HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGet = {
  /** Discriminator value. */
  discoverMethod?: CollectMethodOptionsHealthCheckCollectMethodGet;
  /** Optional discover request parameters. */
  discoverRequestParams?: CollectRequestParamConfHealthCheckCollectMethodPost[];
};

export const healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGetSchema: Schema<HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGet> =
  s.object<HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodGet>({
    discoverMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodGetSchema)),
    discoverRequestParams: s.optional(
      s.array(s.lazy(() => collectRequestParamConfHealthCheckCollectMethodPostSchema)),
    ),
  });
