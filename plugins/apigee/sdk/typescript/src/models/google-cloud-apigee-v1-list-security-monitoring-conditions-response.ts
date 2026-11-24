import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityMonitoringConditionSchema,
  type GoogleCloudApigeeV1SecurityMonitoringCondition,
} from "./google-cloud-apigee-v1-security-monitoring-condition.js";

/** Response for ListSecurityMonitoringConditions. */
export type GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse = {
  /** List of security monitoring conditions in the organization. */
  securityMonitoringConditions?: GoogleCloudApigeeV1SecurityMonitoringCondition[];
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityMonitoringConditionsResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse> =
  s.object<GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse>(
    {
      securityMonitoringConditions: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1SecurityMonitoringConditionSchema)),
      ),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
