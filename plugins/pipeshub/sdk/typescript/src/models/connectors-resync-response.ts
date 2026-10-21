import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resyncConnectorResponseSchema, type ResyncConnectorResponse } from "./resync-connector-response.js";

export type ConnectorsResyncResponse = {
  /** Acknowledgement that the sync was queued. */
  resyncConnectorResponse: ResyncConnectorResponse;
};

export const connectorsResyncResponseSchema: Schema<ConnectorsResyncResponse> =
  s.object<ConnectorsResyncResponse>({
    resyncConnectorResponse: resyncConnectorResponseSchema,
  });
