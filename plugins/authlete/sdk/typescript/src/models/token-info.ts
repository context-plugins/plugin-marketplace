import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationDetailsElementSchema,
  type AuthorizationDetailsElement,
} from "./authorization-details-element.js";
import { propertySchema, type Property } from "./property.js";
import { scopeSchema, type Scope } from "./scope.js";

export type TokenInfo = {
  /** The client id. */
  clientId?: number;
  /** The alias of the client. */
  clientIdAlias?: string;
  /** Flag specifying if the alias was used to identify the client */
  clientIdAliasUsed?: boolean;
  /** the resource owner unique id */
  subject?: string;
  /** The scopes granted on the token */
  scopes?: Scope[];
  /** time which the token expires. */
  expiresAt?: number;
  /** Extra properties associated with the token */
  properties?: Property[];
  /** The array of the resources of the token. */
  resources?: string[];
  authorizationDetails?: AuthorizationDetailsElement;
  /** The entity ID of the client. */
  clientEntityId?: string;
  /**
   * Flag which indicates whether the entity ID of the client was used when the request for the
   * access token was made.
   */
  clientEntityIdUsed?: boolean;
  /**
   * The location of the client's metadata document that was used to resolve client metadata.
   *
   * This property is set when client metadata was retrieved via the [OAuth Client ID Metadata
   * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
   * (CIMD) mechanism.
   */
  metadataDocumentLocation?: string;
  /**
   * Flag indicating whether a metadata document was used to resolve client metadata for this
   * request.
   *
   * When `true`, the client metadata was retrieved via the CIMD mechanism rather than from the
   * Authlete database.
   */
  metadataDocumentUsed?: boolean;
};

export const tokenInfoSchema: Schema<TokenInfo> = s.object<TokenInfo>({
  clientId: s.optional(s.int()),
  clientIdAlias: s.optional(s.string()),
  clientIdAliasUsed: s.optional(s.boolean()),
  subject: s.optional(s.string()),
  scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
  expiresAt: s.optional(s.int()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  resources: s.optional(s.array(s.string())),
  authorizationDetails: s.optional(s.lazy(() => authorizationDetailsElementSchema)),
  clientEntityId: s.optional(s.string()),
  clientEntityIdUsed: s.optional(s.boolean()),
  metadataDocumentLocation: s.optional(s.string()),
  metadataDocumentUsed: s.optional(s.boolean()),
});
