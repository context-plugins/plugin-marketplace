import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema,
  type CollectMethodOptionsHealthCheckCollectMethodPostWithBody,
} from "./collect-method-options-health-check-collect-method-post-with-body.js";

export type HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody = {
  /** Discriminator value. */
  discoverMethod?: CollectMethodOptionsHealthCheckCollectMethodPostWithBody;
  /** Template for POST body to send with the discover request. */
  discoverBody?: string;
};

export const healthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodySchema: Schema<HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody> =
  s.object<HealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody>({
    discoverMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema)),
    discoverBody: s.optional(s.string()),
  });
