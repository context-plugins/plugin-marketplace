import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorStoredConfigSchema, type ConnectorStoredConfig } from "./connector-stored-config.js";

export type ConnectorsConfigAuthResponse = {
  success: boolean;
  /**
   * A connector instance's saved settings. Secret auth fields come back masked; saving the mask
   * back keeps the stored value. Provider OAuth tokens are never returned.
   */
  config: ConnectorStoredConfig;
  message?: string;
};

export const connectorsConfigAuthResponseSchema: Schema<ConnectorsConfigAuthResponse> =
  s.object<ConnectorsConfigAuthResponse>({
    success: s.boolean(),
    config: connectorStoredConfigSchema,
    message: s.optional(s.string()),
  });
