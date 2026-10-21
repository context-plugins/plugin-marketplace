import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorAuthFieldSchema, type ConnectorAuthField } from "./connector-auth-field.js";

export type ConnectorAuthSchemaForType = {
  fields?: ConnectorAuthField[];
  /**
   * OAuth only. Path appended to the `baseUrl` the connector is created with; the result must be
   * registered as a redirect URI with the provider.
   */
  redirectUri?: string;
  displayRedirectUri?: boolean;
};

export const connectorAuthSchemaForTypeSchema: Schema<ConnectorAuthSchemaForType> =
  s.object<ConnectorAuthSchemaForType>({
    fields: s.optional(s.array(s.lazy(() => connectorAuthFieldSchema))),
    redirectUri: s.optional(s.string()),
    displayRedirectUri: s.optional(s.boolean()),
  });
