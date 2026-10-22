import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auth1Schema, type Auth1 } from "./auth1.js";

/**
 * A connector instance's saved settings. Secret auth fields come back masked; saving the mask back
 * keeps the stored value. Provider OAuth tokens are never returned.
 */
export type ConnectorStoredConfig = {
  /** Auth fields for the instance's auth type, keyed by field name */
  auth?: Auth1;
  /** Sync strategy plus connector-specific sync settings */
  sync?: Record<string, unknown>;
  filters?: Record<string, unknown>;
};

export const connectorStoredConfigSchema: Schema<ConnectorStoredConfig> = s.object<ConnectorStoredConfig>({
  auth: s.optional(s.lazy(() => auth1Schema)),
  sync: s.optional(s.record(s.string(), s.unknown())),
  filters: s.optional(s.record(s.string(), s.unknown())),
});
