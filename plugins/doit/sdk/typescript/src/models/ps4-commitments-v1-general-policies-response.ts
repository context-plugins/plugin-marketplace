import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  commitmentPolicyInternalSchema,
  commitmentPolicySchema,
  type CommitmentPolicy,
} from "./commitment-policy.js";

export type Ps4CommitmentsV1GeneralPoliciesResponse = {
  items: CommitmentPolicy[];
  /** Opaque cursor for the next page. `null` when this is the last page. */
  pageToken: string | null;
  /** Total number of policies available to the tenant across all pages. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1GeneralPoliciesResponseProperties: s.Shape<Ps4CommitmentsV1GeneralPoliciesResponse> = {
  items: s.array(s.lazy(() => commitmentPolicyInternalSchema)),
  pageToken: s.nullable(s.string()),
  rowCount: s.int(),
};

export const ps4CommitmentsV1GeneralPoliciesResponseInternalSchema: Schema<Ps4CommitmentsV1GeneralPoliciesResponse> =
  s.object<Ps4CommitmentsV1GeneralPoliciesResponse>(ps4CommitmentsV1GeneralPoliciesResponseProperties, {
    additionalProperties: s.json(),
  });

export const ps4CommitmentsV1GeneralPoliciesResponseSchema: Schema<Ps4CommitmentsV1GeneralPoliciesResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1GeneralPoliciesResponse>(
      {
        ...ps4CommitmentsV1GeneralPoliciesResponseProperties,
        items: s.array(s.lazy(() => commitmentPolicySchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
