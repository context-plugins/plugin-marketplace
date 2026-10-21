import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorCreatedSchema, type ConnectorCreated } from "./connector-created.js";

export type ConnectorsResponse1 = {
  success: boolean;
  connector: ConnectorCreated;
  message?: string;
};

export const connectorsResponse1Schema: Schema<ConnectorsResponse1> = s.object<ConnectorsResponse1>({
  success: s.boolean(),
  connector: connectorCreatedSchema,
  message: s.optional(s.string()),
});
