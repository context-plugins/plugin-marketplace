import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudflowSchema, type Cloudflow } from "./cloudflow.js";

export type CloudflowListResponse = {
  /** List of CloudFlows. */
  items: Cloudflow[];
  /** Opaque cursor for the next page. `null` when there are no more CloudFlows. */
  pageToken?: string | null;
  /** Always `null`. Row count is not computed for this endpoint. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowListResponseSchema: Schema<CloudflowListResponse> = s.object<CloudflowListResponse>(
  {
    items: s.array(s.lazy(() => cloudflowSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
