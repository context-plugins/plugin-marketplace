import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsRegistryTestConnectionResponse = {
  success: boolean;
  /** What happened, written for the user */
  message: string;
};

export const connectorsRegistryTestConnectionResponseSchema: Schema<ConnectorsRegistryTestConnectionResponse> =
  s.object<ConnectorsRegistryTestConnectionResponse>({
    success: s.boolean(),
    message: s.string(),
  });
