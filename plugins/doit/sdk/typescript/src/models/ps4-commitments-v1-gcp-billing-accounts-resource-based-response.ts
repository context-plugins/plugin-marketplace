import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcpResourceCudSchema, type GcpResourceCud } from "./gcp-resource-cud.js";

export type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse = {
  items: GcpResourceCud[];
  pageToken?: string | null;
  /** Best-effort count for the filtered result set. May be null or omitted for expensive counts. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ps4CommitmentsV1GcpBillingAccountsResourceBasedResponseSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse> =
  s.object<Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse>(
    {
      items: s.array(s.lazy(() => gcpResourceCudSchema)),
      pageToken: s.optionalNullable(s.string()),
      rowCount: s.optionalNullable(s.int()),
    },
    { additionalProperties: s.json() },
  );
