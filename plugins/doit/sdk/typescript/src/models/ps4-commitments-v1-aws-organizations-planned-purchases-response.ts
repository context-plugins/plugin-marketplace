import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsPlannedPurchaseInternalSchema,
  awsPlannedPurchaseSchema,
  type AwsPlannedPurchase,
} from "./aws-planned-purchase.js";

export type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse = {
  items: AwsPlannedPurchase[];
  pageToken?: string | null;
  /** Number of items in `items` for this response. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseProperties: s.Shape<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse> =
  {
    items: s.array(s.lazy(() => awsPlannedPurchaseInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.int(),
  };

export const ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseInternalSchema: Schema<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse> =
  s.object<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse>(
    ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseProperties,
    { additionalProperties: s.json() },
  );

export const ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseSchema: Schema<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse>(
      {
        ...ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseProperties,
        items: s.array(s.lazy(() => awsPlannedPurchaseSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
