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

export type RestCollectMethodGet = {
  /** Discriminator value. */
  collectMethod?: CollectMethodOptionsHealthCheckCollectMethodGet;
  /** Collect parameters */
  collectRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
};

export const restCollectMethodGetSchema: Schema<RestCollectMethodGet> = s.object<RestCollectMethodGet>({
  collectMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodGetSchema)),
  collectRequestParams: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
});
