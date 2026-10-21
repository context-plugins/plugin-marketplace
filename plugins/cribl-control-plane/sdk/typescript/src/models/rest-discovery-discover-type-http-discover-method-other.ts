import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsRestCollectMethodOtherSchema,
  type CollectMethodOptionsRestCollectMethodOther,
} from "./collect-method-options-rest-collect-method-other.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";

export type RestDiscoveryDiscoverTypeHttpDiscoverMethodOther = {
  /** Discriminator value. */
  discoverMethod?: CollectMethodOptionsRestCollectMethodOther;
  /** Custom HTTP method to use for the Discover operation */
  discoverVerb: string;
  /** Template for body to send with the discover request */
  discoverBody?: string;
  /** Discover parameters */
  discoverRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
};

export const restDiscoveryDiscoverTypeHttpDiscoverMethodOtherSchema: Schema<RestDiscoveryDiscoverTypeHttpDiscoverMethodOther> =
  s.object<RestDiscoveryDiscoverTypeHttpDiscoverMethodOther>({
    discoverMethod: s.optional(s.lazy(() => collectMethodOptionsRestCollectMethodOtherSchema)),
    discoverVerb: s.string(),
    discoverBody: s.optional(s.string()),
    discoverRequestParams: s.optional(
      s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema)),
    ),
  });
