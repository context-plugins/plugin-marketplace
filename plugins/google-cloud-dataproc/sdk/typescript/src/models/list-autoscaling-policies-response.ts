import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoscalingPolicySchema, type AutoscalingPolicy } from "./autoscaling-policy.js";

/** A response to a request to list autoscaling policies in a project. */
export type ListAutoscalingPoliciesResponse = {
  /** Output only. This token is included in the response if there are more results to fetch. */
  nextPageToken?: string;
  /** Output only. Autoscaling policies list. */
  policies?: AutoscalingPolicy[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAutoscalingPoliciesResponseSchema: Schema<ListAutoscalingPoliciesResponse> =
  s.object<ListAutoscalingPoliciesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      policies: s.optional(s.array(s.lazy(() => autoscalingPolicySchema))),
    },
    { additionalProperties: s.json() },
  );
