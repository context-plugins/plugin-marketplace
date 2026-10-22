import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema,
  type CollectMethodOptionsHealthCheckCollectMethodPostWithBody,
} from "./collect-method-options-health-check-collect-method-post-with-body.js";

export type HealthCheckCollectMethodPostWithBody = {
  /** Discriminator value. */
  collectMethod?: CollectMethodOptionsHealthCheckCollectMethodPostWithBody;
  /**
   * Template for POST body to send with the health check request. You can reference parameters from
   * the Discover response, using template params of the form: ${variable}.
   */
  collectBody?: string;
};

export const healthCheckCollectMethodPostWithBodySchema: Schema<HealthCheckCollectMethodPostWithBody> =
  s.object<HealthCheckCollectMethodPostWithBody>({
    collectMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema)),
    collectBody: s.optional(s.string()),
  });
