import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodGetSchema,
  type CollectMethodOptionsHealthCheckCollectMethodGet,
} from "./collect-method-options-health-check-collect-method-get.js";
import { healthCheckParameterSchema, type HealthCheckParameter } from "./health-check-parameter.js";

export type HealthCheckCollectMethodGet = {
  /** Discriminator value. */
  collectMethod?: CollectMethodOptionsHealthCheckCollectMethodGet;
  /** Optional health check request parameters. */
  collectRequestParams?: HealthCheckParameter[];
};

export const healthCheckCollectMethodGetSchema: Schema<HealthCheckCollectMethodGet> =
  s.object<HealthCheckCollectMethodGet>({
    collectMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodGetSchema)),
    collectRequestParams: s.optional(s.array(s.lazy(() => healthCheckParameterSchema))),
  });
