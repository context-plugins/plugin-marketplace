import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An array of API Hub Gateways to assess. A maximum of 3 gateways can be assessed. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2 = {
  /**
   * Required. The array of API Hub Gateway IDs. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
   */
  gateways?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2Schema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2>(
    {
      gateways: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
