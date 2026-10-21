import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodGetSchema,
  type CollectMethodOptionsHealthCheckCollectMethodGet,
} from "./collect-method-options-health-check-collect-method-get.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";

export type RestDiscoveryDiscoverTypeHttpDiscoverMethodGet = {
  /** Discriminator value. */
  discoverMethod?: CollectMethodOptionsHealthCheckCollectMethodGet;
  /** Discover parameters */
  discoverRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
};

export const restDiscoveryDiscoverTypeHttpDiscoverMethodGetSchema: Schema<RestDiscoveryDiscoverTypeHttpDiscoverMethodGet> =
  s.object<RestDiscoveryDiscoverTypeHttpDiscoverMethodGet>({
    discoverMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodGetSchema)),
    discoverRequestParams: s.optional(
      s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema)),
    ),
  });
