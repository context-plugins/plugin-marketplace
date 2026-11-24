import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Airtable uses Bearer token authentication. Provide a personal access token or OAuth access
   * token with schema.bases:read or schema.bases:write scopes., Airtable uses Bearer token
   * authentication. Provide a personal access token or OAuth access token in the Authorization
   * header., Airtable uses Bearer token authentication. Provide a personal access token or OAuth
   * access token with schema.bases:read or schema.bases:write scopes., SCIM API uses Bearer token
   * authentication with a SCIM API token generated from the Airtable enterprise admin panel.,
   * Airtable uses Bearer token authentication. Provide a personal access token or OAuth access
   * token in the Authorization header., Airtable uses Bearer token authentication. Provide a
   * personal access token or OAuth access token with schema.bases:read or schema.bases:write
   * scopes., SCIM API uses Bearer token authentication with a SCIM API token generated from the
   * Airtable enterprise admin panel., Airtable uses Bearer token authentication. Provide a personal
   * access token or OAuth access token in the Authorization header.
   *
   * @remarks
   * Unset, it is read from `AIRTABLE_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    /**
     * Airtable API v0 production server, Airtable SCIM v2 production server, Airtable API v0
     * production server, Airtable API v0 production server, Airtable SCIM v2 production server,
     * Airtable API v0 production server
     */
    default?: {
      baseUrl?: string;
    };
    /**
     * Airtable API v0 production server, Airtable SCIM v2 production server, Airtable API v0
     * production server, Airtable API v0 production server, Airtable SCIM v2 production server,
     * Airtable API v0 production server
     */
    defaultAirtableScimGroupsApi?: {
      baseUrl?: string;
    };
  };
};
