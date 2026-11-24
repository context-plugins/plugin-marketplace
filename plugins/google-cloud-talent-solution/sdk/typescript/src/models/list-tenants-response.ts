import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetadata1Schema, type ResponseMetadata1 } from "./response-metadata1.js";
import { tenantSchema, type Tenant } from "./tenant.js";

/** The List tenants response object. */
export type ListTenantsResponse = {
  /** Additional information for the API invocation, such as the request tracking id. */
  metadata?: ResponseMetadata1;
  /** Tenants for the current client. */
  tenants?: Tenant[];
  /** A token to retrieve the next page of results. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTenantsResponseSchema: Schema<ListTenantsResponse> = s.object<ListTenantsResponse>(
  {
    metadata: s.optional(s.lazy(() => responseMetadata1Schema)),
    tenants: s.optional(s.array(s.lazy(() => tenantSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
