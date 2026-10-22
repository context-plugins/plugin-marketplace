import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema,
  type CollectMethodOptionsHealthCheckCollectMethodPostWithBody,
} from "./collect-method-options-health-check-collect-method-post-with-body.js";

export type RestCollectMethodPostWithBody = {
  /** Discriminator value. */
  collectMethod?: CollectMethodOptionsHealthCheckCollectMethodPostWithBody;
  /**
   * Template for POST body to send with the Collect request. Reference global variables, functions,
   * or parameters from the Discover response using template params: `${C.vars.myVar}`, or
   * `${Date.now()}`, `${param}`
   */
  collectBody: string;
};

export const restCollectMethodPostWithBodySchema: Schema<RestCollectMethodPostWithBody> =
  s.object<RestCollectMethodPostWithBody>({
    collectMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema)),
    collectBody: s.string(),
  });
