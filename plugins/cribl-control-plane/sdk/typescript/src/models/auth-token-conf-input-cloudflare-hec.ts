import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod99Schema, type AuthenticationMethod99 } from "./authentication-method99.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";

export type AuthTokenConfInputCloudflareHec = {
  /** Select Secret to use a text secret to authenticate */
  authType?: AuthenticationMethod99;
  /** Select or create a stored text secret */
  tokenSecret?: string;
  /** Shared secret to be provided by any client (Authorization: <token>) */
  token?: string;
  /** Enable token */
  enabled?: boolean;
  /** Description */
  description?: string;
  /**
   * Enter the values you want to allow in the HEC event index field at the token level. Supports
   * wildcards. To skip validation, leave blank.
   */
  allowedIndexesAtToken?: string[];
  /** Fields to add to events referencing this token */
  metadata?: MetadataConfInputCollection[];
};

export const authTokenConfInputCloudflareHecSchema: Schema<AuthTokenConfInputCloudflareHec> =
  s.object<AuthTokenConfInputCloudflareHec>({
    authType: s.optional(s.lazy(() => authenticationMethod99Schema)),
    tokenSecret: s.optional(s.string()),
    token: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    description: s.optional(s.string()),
    allowedIndexesAtToken: s.optional(s.array(s.string())),
    metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  });
