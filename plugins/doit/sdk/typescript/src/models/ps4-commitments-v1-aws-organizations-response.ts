import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsOrganizationInternalSchema,
  awsOrganizationSchema,
  type AwsOrganization,
} from "./aws-organization.js";

export type Ps4CommitmentsV1AwsOrganizationsResponse = {
  items: AwsOrganization[];
  pageToken?: string | null;
  /** Best-effort count for the filtered result set. May be null or omitted for expensive counts. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1AwsOrganizationsResponseProperties: s.Shape<Ps4CommitmentsV1AwsOrganizationsResponse> =
  {
    items: s.array(s.lazy(() => awsOrganizationInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optionalNullable(s.int()),
  };

export const ps4CommitmentsV1AwsOrganizationsResponseInternalSchema: Schema<Ps4CommitmentsV1AwsOrganizationsResponse> =
  s.object<Ps4CommitmentsV1AwsOrganizationsResponse>(ps4CommitmentsV1AwsOrganizationsResponseProperties, {
    additionalProperties: s.json(),
  });

export const ps4CommitmentsV1AwsOrganizationsResponseSchema: Schema<Ps4CommitmentsV1AwsOrganizationsResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1AwsOrganizationsResponse>(
      {
        ...ps4CommitmentsV1AwsOrganizationsResponseProperties,
        items: s.array(s.lazy(() => awsOrganizationSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
