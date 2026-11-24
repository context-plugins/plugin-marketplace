import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpBillingAccountInternalSchema,
  gcpBillingAccountSchema,
  type GcpBillingAccount,
} from "./gcp-billing-account.js";

export type Ps4CommitmentsV1GcpBillingAccountsResponse = {
  items: GcpBillingAccount[];
  pageToken?: string | null;
  /** Best-effort count for the filtered result set. May be null or omitted for expensive counts. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1GcpBillingAccountsResponseProperties: s.Shape<Ps4CommitmentsV1GcpBillingAccountsResponse> =
  {
    items: s.array(s.lazy(() => gcpBillingAccountInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optionalNullable(s.int()),
  };

export const ps4CommitmentsV1GcpBillingAccountsResponseInternalSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsResponse> =
  s.object<Ps4CommitmentsV1GcpBillingAccountsResponse>(ps4CommitmentsV1GcpBillingAccountsResponseProperties, {
    additionalProperties: s.json(),
  });

export const ps4CommitmentsV1GcpBillingAccountsResponseSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1GcpBillingAccountsResponse>(
      {
        ...ps4CommitmentsV1GcpBillingAccountsResponseProperties,
        items: s.array(s.lazy(() => gcpBillingAccountSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
