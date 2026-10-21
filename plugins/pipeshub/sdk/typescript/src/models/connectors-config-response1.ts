import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorStoredConfigSchema, type ConnectorStoredConfig } from "./connector-stored-config.js";

export type ConnectorsConfigResponse1 = {
  success: boolean;
  /**
   * A connector instance's saved settings. Secret auth fields come back masked; saving the mask
   * back keeps the stored value. Provider OAuth tokens are never returned.
   */
  config: ConnectorStoredConfig;
  message?: string;
};

export const connectorsConfigResponse1Schema: Schema<ConnectorsConfigResponse1> =
  s.object<ConnectorsConfigResponse1>({
    success: s.boolean(),
    config: connectorStoredConfigSchema,
    message: s.optional(s.string()),
  });
