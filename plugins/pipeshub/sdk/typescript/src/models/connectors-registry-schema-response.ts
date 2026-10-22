import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorSchemaSchema, type ConnectorSchema } from "./connector-schema.js";

export type ConnectorsRegistrySchemaResponse = {
  success: boolean;
  /**
   * Configuration form for a connector type: the auth fields per auth type, the sync strategies and
   * settings, and the sync and indexing filters.
   */
  schema: ConnectorSchema;
};

export const connectorsRegistrySchemaResponseSchema: Schema<ConnectorsRegistrySchemaResponse> =
  s.object<ConnectorsRegistrySchemaResponse>({
    success: s.boolean(),
    schema: connectorSchemaSchema,
  });
