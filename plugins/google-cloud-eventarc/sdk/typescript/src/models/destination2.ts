import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudRun2Schema, type CloudRun2 } from "./cloud-run2.js";
import { gke2Schema, type Gke2 } from "./gke2.js";
import { httpEndpoint2Schema, type HttpEndpoint2 } from "./http-endpoint2.js";
import { networkConfig2Schema, type NetworkConfig2 } from "./network-config2.js";

/** Required. Destination specifies where the events should be sent to. */
export type Destination2 = {
  /**
   * A GKE service capable of receiving events. The service should be running in the same project as
   * the trigger.
   */
  gke?: Gke2;
  /**
   * Optional. Network config is used to configure how Eventarc resolves and connect to a
   * destination. This should only be used with HttpEndpoint destination type.
   */
  networkConfig?: NetworkConfig2;
  /**
   * Cloud Run fully-managed resource that receives the events. The resource should be in the same
   * project as the trigger.
   */
  cloudRun?: CloudRun2;
  /** An HTTP endpoint destination described by an URI. */
  httpEndpoint?: HttpEndpoint2;
  /**
   * The Cloud Function resource name. Cloud Functions V1 and V2 are supported. Format:
   * `projects/{project}/locations/{location}/functions/{function}` This is a read-only field.
   * Creating Cloud Functions V1/V2 triggers is only supported via the Cloud Functions product. An
   * error will be returned if the user sets this value.
   */
  cloudFunction?: string;
  /**
   * The resource name of the Workflow whose Executions are triggered by the events. The Workflow
   * resource should be deployed in the same project as the trigger. Format:
   * `projects/{project}/locations/{location}/workflows/{workflow}`
   */
  workflow?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destination2Schema: Schema<Destination2> = s.object<Destination2>(
  {
    gke: s.optional(s.lazy(() => gke2Schema)),
    networkConfig: s.optional(s.lazy(() => networkConfig2Schema)),
    cloudRun: s.optional(s.lazy(() => cloudRun2Schema)),
    httpEndpoint: s.optional(s.lazy(() => httpEndpoint2Schema)),
    cloudFunction: s.optional(s.string()),
    workflow: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
