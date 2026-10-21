import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorFiltersConfigSchema, type ConnectorFiltersConfig } from "./connector-filters-config.js";
import { connectorSyncConfigSchema, type ConnectorSyncConfig } from "./connector-sync-config.js";

/**
 * At least one of `sync` and `filters`. `filters.sync` and `filters.indexing` replace the saved
 * ones.
 */
export type UpdateConnectorFiltersSyncRequest = {
  /**
   * Sync strategy plus connector-specific sync settings, flat: send each field listed under
   * `sync.customFields` in the registry schema by its `name`.
   */
  sync?: ConnectorSyncConfig;
  filters?: ConnectorFiltersConfig;
};

export const updateConnectorFiltersSyncRequestSchema: Schema<UpdateConnectorFiltersSyncRequest> =
  s.object<UpdateConnectorFiltersSyncRequest>({
    sync: s.optional(s.lazy(() => connectorSyncConfigSchema)),
    filters: s.optional(s.lazy(() => connectorFiltersConfigSchema)),
  });
