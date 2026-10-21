import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsRegistryTestConnectionRequest = {
  /** Auth values, keyed by the fields of the connector's auth schema */
  auth: Record<string, unknown>;
  /**
   * Instance being edited; its saved auth values fill in fields left out. A secret sent as
   * `••••••••` (the mask the config routes return) keeps the stored value; any other value that is
   * sent replaces the saved one.
   */
  connectorId?: string;
};

export const connectorsRegistryTestConnectionRequestSchema: Schema<ConnectorsRegistryTestConnectionRequest> =
  s.object<ConnectorsRegistryTestConnectionRequest>({
    auth: s.record(s.string(), s.unknown()),
    connectorId: s.optional(s.string()),
  });
