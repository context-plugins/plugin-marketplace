import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionInstitutionSchema, type ConnectionInstitution } from "./connection-institution.js";
import { getConnectionsLinksSchema, type GetConnectionsLinks } from "./get-connections-links.js";
import { statusConnectionsApiSchema, type StatusConnectionsApi } from "./status-connections-api.js";

export type DatumConnectionsApi = {
  /** Type, always "connection". */
  type: string;
  /** Connection identification. */
  id: string;
  /** method identification. */
  method: string;
  /** Connection status, available only for SERVER_SCOPE. */
  status?: StatusConnectionsApi;
  /** Created date of the connection, available only for SERVER_SCOPE. */
  createdDate: string;
  /**
   * Expiry date of the connection.This date is only set for open-banking connections.
   *
   * For web connections, the expiry date field will be empty.
   */
  expiryDate: string;
  /** Connection last used date, available only for SERVER_SCOPE. */
  lastUsed?: string;
  /** Institution details. */
  institution: ConnectionInstitution;
  /** Object containing links to resources. */
  links: GetConnectionsLinks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumConnectionsApiSchema: Schema<DatumConnectionsApi> = s.object<DatumConnectionsApi>(
  {
    type: s.string(),
    id: s.string(),
    method: s.string(),
    status: s.optional(s.lazy(() => statusConnectionsApiSchema)),
    createdDate: s.string(),
    expiryDate: s.string(),
    lastUsed: s.optional(s.string()),
    institution: connectionInstitutionSchema,
    links: getConnectionsLinksSchema,
  },
  { additionalProperties: s.json() },
);
