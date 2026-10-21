import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorPaginationSchema, type ConnectorPagination } from "./connector-pagination.js";
import { oAuthRegistryEntrySchema, type OAuthRegistryEntry } from "./oauth-registry-entry.js";

export type OauthRegistryResponse = {
  success: boolean;
  connectors: OAuthRegistryEntry[];
  pagination: ConnectorPagination;
};

export const oauthRegistryResponseSchema: Schema<OauthRegistryResponse> = s.object<OauthRegistryResponse>({
  success: s.boolean(),
  connectors: s.array(s.lazy(() => oAuthRegistryEntrySchema)),
  pagination: connectorPaginationSchema,
});
