import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientTypeSchema, type ClientType } from "./client-type.js";
import { taggedValueSchema, type TaggedValue } from "./tagged-value.js";

export type ClientLimited = {
  /** The sequential number of the client. The value of this property is assigned by Authlete. */
  number?: number;
  /**
   * The name of the client application. This property corresponds to `client_name` in [OpenID
   * Connect Dynamic Client Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  clientName?: string;
  /**
   * Client names with language tags. If the client application has different names for different
   * languages, this property can be used to register the names.
   */
  clientNames?: TaggedValue[];
  /** The description about the client application. */
  description?: string;
  /**
   * Descriptions about the client application with language tags. If the client application has
   * different descriptions for different languages, this property can be used to register the
   * descriptions.
   */
  descriptions?: TaggedValue[];
  /**
   * The client identifier used in Authlete API calls. The value of this property is assigned by
   * Authlete.
   */
  clientId?: number;
  /**
   * The value of the client's `client_id` property used in OAuth and OpenID Connect calls. By
   * default, this is a string version of the `clientId` property.
   */
  clientIdAlias?: string;
  /** Deprecated. Always set to `true`. */
  clientIdAliasEnabled?: boolean;
  /**
   * The client type, either `CONFIDENTIAL` or `PUBLIC`. See [RFC 6749, 2.1. Client
   * Types](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1) for details.
   */
  clientType?: ClientType;
};

export const clientLimitedSchema: Schema<ClientLimited> = s.object<ClientLimited>({
  number: s.optional(s.int()),
  clientName: s.optional(s.string()),
  clientNames: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  description: s.optional(s.string()),
  descriptions: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  clientId: s.optional(s.int()),
  clientIdAlias: s.optional(s.string()),
  clientIdAliasEnabled: s.optional(s.boolean()),
  clientType: s.optional(s.lazy(() => clientTypeSchema)),
});
