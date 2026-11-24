import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gatewayTypeSchema, type GatewayType } from "./gateway-type.js";

/** Include only these Gateway Types. */
export type GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2 = {
  /** Required. The array of API Hub Gateway Types. */
  gatewayTypes?: GatewayType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2Schema: Schema<GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2> =
  s.object<GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2>(
    {
      gatewayTypes: s.optional(s.array(s.lazy(() => gatewayTypeSchema))),
    },
    { additionalProperties: s.json() },
  );
