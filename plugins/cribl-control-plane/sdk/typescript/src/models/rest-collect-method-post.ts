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

export type RestCollectMethodPost = {
  /** Discriminator value. */
  collectMethod?: CollectMethodOptionsHealthCheckCollectMethodPost;
  /** Collect parameters */
  collectRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
};

export const restCollectMethodPostSchema: Schema<RestCollectMethodPost> = s.object<RestCollectMethodPost>({
  collectMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostSchema)),
  collectRequestParams: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
});
