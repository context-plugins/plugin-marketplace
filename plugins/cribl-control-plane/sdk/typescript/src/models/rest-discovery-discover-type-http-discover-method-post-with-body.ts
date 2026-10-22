import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema,
  type CollectMethodOptionsHealthCheckCollectMethodPostWithBody,
} from "./collect-method-options-health-check-collect-method-post-with-body.js";

export type RestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody = {
  /** Discriminator value. */
  discoverMethod?: CollectMethodOptionsHealthCheckCollectMethodPostWithBody;
  /**
   * Template for POST body to send with the discover request. To reference global variables or
   * functions, use template parameters: `{ myVar: ${C.vars.myVar}, secret:
   * ${C.Secret('mySecret','text').value} }`
   */
  discoverBody: string;
};

export const restDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodySchema: Schema<RestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody> =
  s.object<RestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBody>({
    discoverMethod: s.optional(s.lazy(() => collectMethodOptionsHealthCheckCollectMethodPostWithBodySchema)),
    discoverBody: s.string(),
  });
