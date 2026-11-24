import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Message for the array of API Hub Gateways. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray = {
  /**
   * Required. The array of API Hub Gateway IDs. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
   */
  gateways?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArraySchema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray>(
    {
      gateways: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
