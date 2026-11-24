import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceQuotaSchema, type ServiceQuota } from "./service-quota.js";

export type ServiceQuotaList = {
  /** Service quotas in this page. */
  items: ServiceQuota[];
  /** Opaque token for the next page. Omitted when there are no more results. */
  pageToken?: string;
  /** Total number of results after filtering and before pagination. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceQuotaListSchema: Schema<ServiceQuotaList> = s.object<ServiceQuotaList>(
  {
    items: s.array(s.lazy(() => serviceQuotaSchema)),
    pageToken: s.optional(s.string()),
    rowCount: s.int(),
  },
  { additionalProperties: s.json() },
);
