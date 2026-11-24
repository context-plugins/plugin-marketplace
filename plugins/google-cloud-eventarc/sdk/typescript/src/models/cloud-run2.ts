import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Cloud Run fully-managed resource that receives the events. The resource should be in the same
 * project as the trigger.
 */
export type CloudRun2 = {
  /**
   * Required. The name of the Cloud Run service being addressed. See
   * https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located
   * in the same project as the trigger object can be addressed.
   */
  service?: string;
  /** Required. The region the Cloud Run service is deployed in. */
  region?: string;
  /**
   * Optional. The relative path on the Cloud Run service the events should be sent to. The value
   * must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples:
   * "/route", "route", "route/subroute".
   */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudRun2Schema: Schema<CloudRun2> = s.object<CloudRun2>(
  {
    service: s.optional(s.string()),
    region: s.optional(s.string()),
    path: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
