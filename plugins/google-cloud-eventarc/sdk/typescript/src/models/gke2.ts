import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A GKE service capable of receiving events. The service should be running in the same project as
 * the trigger.
 */
export type Gke2 = {
  /**
   * Required. The name of the cluster the GKE service is running in. The cluster must be running in
   * the same project as the trigger being created.
   */
  cluster?: string;
  /**
   * Optional. The relative path on the GKE service the events should be sent to. The value must
   * conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route",
   * "route", "route/subroute".
   */
  path?: string;
  /** Required. The namespace the GKE service is running in. */
  namespace?: string;
  /**
   * Required. The name of the Google Compute Engine in which the cluster resides, which can either
   * be compute zone (for example, us-central1-a) for the zonal clusters or region (for example,
   * us-central1) for regional clusters.
   */
  location?: string;
  /** Required. Name of the GKE service. */
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gke2Schema: Schema<Gke2> = s.object<Gke2>(
  {
    cluster: s.optional(s.string()),
    path: s.optional(s.string()),
    namespace: s.optional(s.string()),
    location: s.optional(s.string()),
    service: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
