import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudSchema, type Cloud } from "./cloud.js";
import {
  serviceDoiTPerfectScaleForCommitmentsGeneralApiSchema,
  type ServiceDoiTPerfectScaleForCommitmentsGeneralApi,
} from "./service-doi-tperfect-scale-for-commitments-general-api.js";

/** One account × product-line scope a policy is explicitly assigned to, on either cloud. */
export type CommitmentPolicyAssignment = {
  /** Cloud the scope belongs to. */
  cloud: Cloud;
  /**
   * AWS management account id or GCP billing account id, matching `managementAccountId` /
   * `billingAccountId` elsewhere in this API.
   */
  accountId: string;
  /**
   * Product line the policy applies to. `compute` and `database` are AWS Savings Plan lines (GCP
   * also has `compute`); `cloud_sql` is GCP only.
   */
  service: ServiceDoiTPerfectScaleForCommitmentsGeneralApi;
  /**
   * Region scope in `lower_snake_case` wire form (for example `us_east1`) for product lines
   * assigned per region (GCP `cloud_sql`). `null` for every scope assigned per account (all AWS
   * scopes, GCP `compute`); the settings endpoints report the same scope as `global`.
   */
  region: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const commitmentPolicyAssignmentProperties: s.Shape<CommitmentPolicyAssignment> = {
  cloud: cloudSchema,
  accountId: s.string(),
  service: serviceDoiTPerfectScaleForCommitmentsGeneralApiSchema,
  region: s.nullable(s.string()),
};

export const commitmentPolicyAssignmentInternalSchema: Schema<CommitmentPolicyAssignment> =
  s.object<CommitmentPolicyAssignment>(commitmentPolicyAssignmentProperties, {
    additionalProperties: s.json(),
  });

export const commitmentPolicyAssignmentSchema: Schema<CommitmentPolicyAssignment> = s.lazySchema(() =>
  s.object<CommitmentPolicyAssignment>(
    {
      ...commitmentPolicyAssignmentProperties,
      region: s.nullable(s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$"))),
    },
    { additionalProperties: s.json() },
  ),
);
