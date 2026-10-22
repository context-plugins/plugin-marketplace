import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientCredentialsGrantRequest = {
  /** The client ID assigned to your organization. */
  clientId: string;
  /** The client secret assigned to your organization. */
  clientSecret: string;
  /** Must always be set to 'client_credentials'. @default "client_credentials" */
  grantType?: "client_credentials";
  /** Must always be set to 'gbg.token'. @default "gbg.token" */
  scope?: "gbg.token";
};

export const clientCredentialsGrantRequestSchema: Schema<ClientCredentialsGrantRequest> =
  s.object<ClientCredentialsGrantRequest>({
    clientId: s.string(),
    clientSecret: s.string(),
    grantType: s.defaulted(s.literal("client_credentials"), "client_credentials"),
    scope: s.defaulted(s.literal("gbg.token"), "gbg.token"),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      grantType: "grant_type",
    },
  });
