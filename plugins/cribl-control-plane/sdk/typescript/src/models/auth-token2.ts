import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod92Schema, type AuthenticationMethod92 } from "./authentication-method92.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";

export type AuthToken2 = {
  /**
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to
   * authenticate
   */
  authType?: AuthenticationMethod92;
  /** Select or create a stored text secret */
  tokenSecret?: string;
  /** Shared secret to be provided by any client (Authorization: <token>) */
  token: string;
  /** Description */
  description?: string;
  /** Fields to add to events referencing this token */
  metadata?: MetadataConfInputCollection[];
};

export const authToken2Schema: Schema<AuthToken2> = s.object<AuthToken2>({
  authType: s.optional(s.lazy(() => authenticationMethod92Schema)),
  tokenSecret: s.optional(s.string()),
  token: s.string(),
  description: s.optional(s.string()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
});
