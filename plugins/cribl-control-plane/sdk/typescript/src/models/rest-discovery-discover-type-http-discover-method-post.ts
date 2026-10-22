import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodPostSchema,
  type CollectMethodOptionsHealthCheckCollectMethodPost,
} from "./collect-method-options-health-check-collect-method-post.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";

export type RestDiscoveryDiscoverTypeHttpDiscoverMethodPost = {
  /** Discriminator value. */
  discoverMethod?: CollectMethodOptionsHealthCheckCollectMethodPost;
  /** Discover parameters */
  discoverRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
};

export const restDiscoveryDiscoverTypeHttpDiscoverMethodPostSchema: Schema<RestDiscoveryDiscoverTypeHttpDiscoverMethodPost> =
  s.object<RestDiscoveryDiscoverTypeHttpDiscoverMethodPost>({
    discoverMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostSchema)),
    discoverRequestParams: s.optional(
      s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema)),
    ),
  });
