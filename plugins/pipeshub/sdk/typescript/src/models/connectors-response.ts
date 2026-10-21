import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorInstanceSchema, type ConnectorInstance } from "./connector-instance.js";
import { connectorPaginationSchema, type ConnectorPagination } from "./connector-pagination.js";

export type ConnectorsResponse = {
  success: boolean;
  connectors: ConnectorInstance[];
  pagination: ConnectorPagination;
};

export const connectorsResponseSchema: Schema<ConnectorsResponse> = s.object<ConnectorsResponse>({
  success: s.boolean(),
  connectors: s.array(s.lazy(() => connectorInstanceSchema)),
  pagination: connectorPaginationSchema,
});
