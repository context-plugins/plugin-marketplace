import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectPolicySchema, type ProjectPolicy } from "./project-policy.js";

export type ListProjectPoliciesResponse = {
  /** A list of project policies attached to the project. */
  projectPolicies?: ProjectPolicy[];
  /**
   * If the response is truncated, Amazon Rekognition returns this token that you can use in the
   * subsequent request to retrieve the next set of project policies.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listProjectPoliciesResponseSchema: Schema<ListProjectPoliciesResponse> =
  s.object<ListProjectPoliciesResponse>(
    {
      projectPolicies: s.optional(s.array(s.lazy(() => projectPolicySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        projectPolicies: "ProjectPolicies",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
