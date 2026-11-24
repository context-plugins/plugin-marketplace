import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsMemberAccountInternalSchema,
  awsMemberAccountSchema,
  type AwsMemberAccount,
} from "./aws-member-account.js";

export type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse = {
  items: AwsMemberAccount[];
  pageToken?: string | null;
  /** Best-effort count for the filtered result set. May be null or omitted for expensive counts. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseProperties: s.Shape<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse> =
  {
    items: s.array(s.lazy(() => awsMemberAccountInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optionalNullable(s.int()),
  };

export const ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseInternalSchema: Schema<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse> =
  s.object<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse>(
    ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseProperties,
    { additionalProperties: s.json() },
  );

export const ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseSchema: Schema<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse>(
      {
        ...ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseProperties,
        items: s.array(s.lazy(() => awsMemberAccountSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
