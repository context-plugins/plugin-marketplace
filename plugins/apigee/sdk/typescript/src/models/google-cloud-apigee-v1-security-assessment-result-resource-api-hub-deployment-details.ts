import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gatewayType1Schema, type GatewayType1 } from "./gateway-type1.js";

/** Additional details if the resource is an API Hub deployment. */
export type GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails = {
  /** The gateway type for the API Hub deployment. */
  gatewayType?: GatewayType1;
  /** The source project for the API Hub deployment. */
  sourceProject?: string;
  /**
   * The gateway for the API Hub deployment. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
   */
  gateway?: string;
  /** The display name of the API Hub deployment. */
  displayName?: string;
  /** The resource uri for the API Hub deployment. */
  resourceUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetailsSchema: Schema<GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails> =
  s.object<GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails>(
    {
      gatewayType: s.optional(s.lazy(() => gatewayType1Schema)),
      sourceProject: s.optional(s.string()),
      gateway: s.optional(s.string()),
      displayName: s.optional(s.string()),
      resourceUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
