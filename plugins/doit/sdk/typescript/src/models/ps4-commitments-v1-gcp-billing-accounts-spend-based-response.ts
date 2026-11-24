import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcpSpendCudSchema, type GcpSpendCud } from "./gcp-spend-cud.js";

export type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse = {
  items: GcpSpendCud[];
  pageToken?: string | null;
  /** Best-effort count for the filtered result set. May be null or omitted for expensive counts. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ps4CommitmentsV1GcpBillingAccountsSpendBasedResponseSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse> =
  s.object<Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse>(
    {
      items: s.array(s.lazy(() => gcpSpendCudSchema)),
      pageToken: s.optionalNullable(s.string()),
      rowCount: s.optionalNullable(s.int()),
    },
    { additionalProperties: s.json() },
  );
