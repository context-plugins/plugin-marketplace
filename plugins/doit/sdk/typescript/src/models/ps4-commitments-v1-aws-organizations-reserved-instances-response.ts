import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsReservedInstanceInternalSchema,
  awsReservedInstanceSchema,
  type AwsReservedInstance,
} from "./aws-reserved-instance.js";

export type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse = {
  items: AwsReservedInstance[];
  pageToken?: string | null;
  /** Best-effort count for the filtered result set. May be null or omitted for expensive counts. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseProperties: s.Shape<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse> =
  {
    items: s.array(s.lazy(() => awsReservedInstanceInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optionalNullable(s.int()),
  };

export const ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseInternalSchema: Schema<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse> =
  s.object<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse>(
    ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseProperties,
    { additionalProperties: s.json() },
  );

export const ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseSchema: Schema<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse>(
      {
        ...ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseProperties,
        items: s.array(s.lazy(() => awsReservedInstanceSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
