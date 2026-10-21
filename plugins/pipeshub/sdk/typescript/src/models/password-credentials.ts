import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Credentials for password authentication */
export type PasswordCredentials = {
  /** User password */
  password: string;
};

export const passwordCredentialsSchema: Schema<PasswordCredentials> = s.object<PasswordCredentials>({
  password: s.string(),
});
