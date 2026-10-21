import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorConfigSchema, type ConnectorConfig } from "./connector-config.js";

export type ConnectorsConfigResponse = {
  success: boolean;
  config: ConnectorConfig;
};

export const connectorsConfigResponseSchema: Schema<ConnectorsConfigResponse> =
  s.object<ConnectorsConfigResponse>({
    success: s.boolean(),
    config: connectorConfigSchema,
  });
