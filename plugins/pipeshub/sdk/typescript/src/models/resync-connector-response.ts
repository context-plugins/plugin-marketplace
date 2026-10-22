import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Acknowledgement that the sync was queued. */
export type ResyncConnectorResponse = {
  success: boolean;
};

export const resyncConnectorResponseSchema: Schema<ResyncConnectorResponse> =
  s.object<ResyncConnectorResponse>({
    success: s.boolean(),
  });
