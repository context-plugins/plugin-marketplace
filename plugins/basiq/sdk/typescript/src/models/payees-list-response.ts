import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { links2PlatformPayeesApiSchema, type Links2PlatformPayeesApi } from "./links2-platform-payees-api.js";
import { payeeSummarySchema, type PayeeSummary } from "./payee-summary.js";

export type PayeesListResponse = {
  /** Always 'list'. */
  type: string;
  /** The total number of payees available. */
  count?: number;
  /** The number of payees returned in this response. */
  size?: number;
  /** Array of payee objects. */
  data: PayeeSummary[];
  links: Links2PlatformPayeesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payeesListResponseSchema: Schema<PayeesListResponse> = s.object<PayeesListResponse>(
  {
    type: s.string(),
    count: s.optional(s.int()),
    size: s.optional(s.int()),
    data: s.array(s.lazy(() => payeeSummarySchema)),
    links: links2PlatformPayeesApiSchema,
  },
  { additionalProperties: s.json() },
);
