import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDoiTServiceQuotasApiSchema,
  type TypeDoiTServiceQuotasApi,
} from "./type-doi-tservice-quotas-api.js";

export type ServiceQuotaResource = {
  /** Provider resource scope for the quota. */
  type: TypeDoiTServiceQuotasApi;
  /** AWS account ID or Google Cloud project ID. */
  id: string;
  /** Human-readable resource name when available. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceQuotaResourceSchema: Schema<ServiceQuotaResource> = s.object<ServiceQuotaResource>(
  {
    type: typeDoiTServiceQuotasApiSchema,
    id: s.string(),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
