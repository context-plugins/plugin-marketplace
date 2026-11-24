import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsSavingsPlanInternalSchema,
  awsSavingsPlanSchema,
  type AwsSavingsPlan,
} from "./aws-savings-plan.js";

export type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse = {
  items: AwsSavingsPlan[];
  pageToken?: string | null;
  /** Best-effort count for the filtered result set. May be null or omitted for expensive counts. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseProperties: s.Shape<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse> =
  {
    items: s.array(s.lazy(() => awsSavingsPlanInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optionalNullable(s.int()),
  };

export const ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseInternalSchema: Schema<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse> =
  s.object<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse>(
    ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseProperties,
    { additionalProperties: s.json() },
  );

export const ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseSchema: Schema<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse>(
      {
        ...ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseProperties,
        items: s.array(s.lazy(() => awsSavingsPlanSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
