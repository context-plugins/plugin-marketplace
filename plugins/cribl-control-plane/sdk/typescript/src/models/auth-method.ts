import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType7Schema, type AuthenticationType7 } from "./authentication-type7.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";

export type AuthMethod = {
  /** Authentication type */
  authType: AuthenticationType7;
  /** Bearer token for Authorization header */
  token?: string;
  /** Description */
  description?: string;
  /** Fields to add to events referencing this auth method */
  metadata?: MetadataConfInputCollection[];
  /** Enable */
  enabled?: boolean;
  /** Select or create a stored text secret */
  tokenSecret?: string;
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** Expected token issuer (iss claim) */
  issuer?: string;
  /** URL of the JWKS endpoint used to fetch signing keys */
  jwksUri?: string;
  /** Expected token audience (aud claim) */
  audience?: string;
  /** Scopes the token must grant (optional) */
  scopes?: string[];
};

export const authMethodSchema: Schema<AuthMethod> = s.object<AuthMethod>({
  authType: authenticationType7Schema,
  token: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  enabled: s.optional(s.boolean()),
  tokenSecret: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  issuer: s.optional(s.string()),
  jwksUri: s.optional(s.string()),
  audience: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
});
