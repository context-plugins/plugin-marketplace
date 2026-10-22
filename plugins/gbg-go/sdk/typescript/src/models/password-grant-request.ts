import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PasswordGrantRequest = {
  /** The client ID assigned to your organization. */
  clientId: string;
  /** The client secret assigned to your organization. */
  clientSecret: string;
  /** The username for API authentication. */
  username: string;
  /** The password for API authentication. */
  password: string;
  /** Must always be set to 'password'. @default "password" */
  grantType?: "password";
};

export const passwordGrantRequestSchema: Schema<PasswordGrantRequest> = s.object<PasswordGrantRequest>({
  clientId: s.string(),
  clientSecret: s.string(),
  username: s.string(),
  password: s.string(),
  grantType: s.defaulted(s.literal("password"), "password"),
  _keysMap: {
    clientId: "client_id",
    clientSecret: "client_secret",
    grantType: "grant_type",
  },
});
