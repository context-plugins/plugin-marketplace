import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountsSchema, type Accounts } from "./accounts.js";
import { connectionInstitutionSchema, type ConnectionInstitution } from "./connection-institution.js";
import { getConnectionLinksSchema, type GetConnectionLinks } from "./get-connection-links.js";
import { profileSchema, type Profile } from "./profile.js";
import { status2Schema, type Status2 } from "./status2.js";

/** Object containing details for connection post. */
export type ConnectionGetResponseResource = {
  /** Type, always "connection". */
  type: string;
  /** A string that uniquely identifies the user connection. */
  id: string;
  /** A string that uniquely identifies the user connections either it is web or openbanking */
  method: string;
  /** Created date of the connection, available only for SERVER_SCOPE. */
  createdDate: string;
  /**
   * Expiry date of the connection.This date is only set for open-banking connections.
   *
   * For web connections, the expiry date field will be empty.
   */
  expiryDate: string;
  /**
   * UTC Date and Time of when the connection was last used, in RFC 3339 format, available only for
   * SERVER_SCOPE.
   */
  lastUsed?: string;
  accounts?: Accounts;
  /** Institution details. */
  institution: ConnectionInstitution;
  profile?: Profile;
  /** Indicates the connection status, available only for SERVER_SCOPE. */
  status?: Status2;
  /** Object containing links to resources. */
  links: GetConnectionLinks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionGetResponseResourceSchema: Schema<ConnectionGetResponseResource> =
  s.object<ConnectionGetResponseResource>(
    {
      type: s.string(),
      id: s.string(),
      method: s.string(),
      createdDate: s.string(),
      expiryDate: s.string(),
      lastUsed: s.optional(s.string()),
      accounts: s.optional(s.lazy(() => accountsSchema)),
      institution: connectionInstitutionSchema,
      profile: s.optional(s.lazy(() => profileSchema)),
      status: s.optional(s.lazy(() => status2Schema)),
      links: getConnectionLinksSchema,
    },
    { additionalProperties: s.json() },
  );
