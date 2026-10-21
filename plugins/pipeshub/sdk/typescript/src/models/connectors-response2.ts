import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorInstanceSchema, type ConnectorInstance } from "./connector-instance.js";

export type ConnectorsResponse2 = {
  success: boolean;
  /** A connector instance: its type's registry entry plus the instance's own state. */
  connector: ConnectorInstance;
};

export const connectorsResponse2Schema: Schema<ConnectorsResponse2> = s.object<ConnectorsResponse2>({
  success: s.boolean(),
  connector: connectorInstanceSchema,
});
