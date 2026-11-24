import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityActionConditionConfig2Schema,
  type GoogleCloudApigeeV1SecurityActionConditionConfig2,
} from "./google-cloud-apigee-v1-security-action-condition-config2.js";
import {
  googleCloudApigeeV1SecurityActionDeny2Schema,
  type GoogleCloudApigeeV1SecurityActionDeny2,
} from "./google-cloud-apigee-v1-security-action-deny2.js";
import {
  googleCloudApigeeV1SecurityActionFlag2Schema,
  type GoogleCloudApigeeV1SecurityActionFlag2,
} from "./google-cloud-apigee-v1-security-action-flag2.js";
import { state6Schema, type State6 } from "./state6.js";

/**
 * A SecurityAction is rule that can be enforced at an environment level. The result is one of: - A
 * denied API call - An explicitly allowed API call - A flagged API call (HTTP headers added before
 * the target receives it) At least one condition is required to create a SecurityAction.
 */
export type GoogleCloudApigeeV1SecurityAction = {
  /** Input only. The TTL for this SecurityAction. */
  ttl?: string;
  /** Deny a request through if it matches this SecurityAction. */
  deny?: GoogleCloudApigeeV1SecurityActionDeny2;
  /** Optional. An optional user provided description of the SecurityAction. */
  description?: string;
  /**
   * Immutable. This field is ignored during creation as per AIP-133. Please set the
   * `security_action_id` field in the CreateSecurityActionRequest when creating a new
   * SecurityAction. Format:
   * organizations/{org}/environments/{env}/securityActions/{security_action}
   */
  name?: string;
  /** Required. A valid SecurityAction must contain at least one condition. */
  conditionConfig?: GoogleCloudApigeeV1SecurityActionConditionConfig2;
  /**
   * Optional. If unset, this would apply to all proxies in the environment. If set, this action is
   * enforced only if at least one proxy in the repeated list is deployed at the time of
   * enforcement. If set, several restrictions are enforced on SecurityActions. There can be at most
   * 100 enabled actions with proxies set in an env. Several other restrictions apply on conditions
   * and are detailed later.
   */
  apiProxies?: string[];
  /** Flag a request through if it matches this SecurityAction. */
  flag?: GoogleCloudApigeeV1SecurityActionFlag2;
  /** Allow a request through if it matches this SecurityAction. */
  allow?: Record<string, unknown>;
  /** Output only. The create time for this SecurityAction. */
  createTime?: string;
  /**
   * Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its
   * expiration time will not be enforced.
   */
  state?: State6;
  /** The expiration for this SecurityAction. */
  expireTime?: string;
  /**
   * Output only. The update time for this SecurityAction. This reflects when this SecurityAction
   * changed states.
   */
  updateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityActionSchema: Schema<GoogleCloudApigeeV1SecurityAction> =
  s.object<GoogleCloudApigeeV1SecurityAction>(
    {
      ttl: s.optional(s.string()),
      deny: s.optional(s.lazy(() => googleCloudApigeeV1SecurityActionDeny2Schema)),
      description: s.optional(s.string()),
      name: s.optional(s.string()),
      conditionConfig: s.optional(s.lazy(() => googleCloudApigeeV1SecurityActionConditionConfig2Schema)),
      apiProxies: s.optional(s.array(s.string())),
      flag: s.optional(s.lazy(() => googleCloudApigeeV1SecurityActionFlag2Schema)),
      allow: s.optional(s.record(s.string(), s.unknown())),
      createTime: s.optional(s.string()),
      state: s.optional(s.lazy(() => state6Schema)),
      expireTime: s.optional(s.string()),
      updateTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
