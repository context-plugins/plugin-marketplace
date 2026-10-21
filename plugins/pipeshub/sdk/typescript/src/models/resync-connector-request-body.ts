import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResyncConnectorRequestBody = {
  /**
   * The connector's type as the registry lists it, for example `RSS` or `Jira`. It names the sync
   * event; the connector synced is always the one in the path.
   */
  connectorName: string;
  /** When true, triggers a full sync instead of incremental. @default false */
  fullSync?: boolean;
};

export const resyncConnectorRequestBodySchema: Schema<ResyncConnectorRequestBody> =
  s.object<ResyncConnectorRequestBody>({
    connectorName: s.string(),
    fullSync: s.defaulted(s.boolean(), false),
  });
