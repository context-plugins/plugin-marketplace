import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorPaginationSchema, type ConnectorPagination } from "./connector-pagination.js";
import { connectorRegistryEntrySchema, type ConnectorRegistryEntry } from "./connector-registry-entry.js";
import { registryCountsByScopeSchema, type RegistryCountsByScope } from "./registry-counts-by-scope.js";

export type ConnectorsRegistryResponse = {
  success: boolean;
  connectors: ConnectorRegistryEntry[];
  pagination: ConnectorPagination;
  /** How many connector types each scope offers */
  registryCountsByScope?: RegistryCountsByScope;
};

export const connectorsRegistryResponseSchema: Schema<ConnectorsRegistryResponse> =
  s.object<ConnectorsRegistryResponse>({
    success: s.boolean(),
    connectors: s.array(s.lazy(() => connectorRegistryEntrySchema)),
    pagination: connectorPaginationSchema,
    registryCountsByScope: s.optional(s.lazy(() => registryCountsByScopeSchema)),
  });
