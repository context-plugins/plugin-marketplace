import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authType2Schema, type AuthType2 } from "./auth-type2.js";

export type RedisAuthTypeCredentialsSecret = {
  /** Authentication method to use when connecting to Redis. */
  authType?: AuthType2;
  /** Secret that references Redis username and password */
  credentialsSecret: string;
};

export const redisAuthTypeCredentialsSecretSchema: Schema<RedisAuthTypeCredentialsSecret> =
  s.object<RedisAuthTypeCredentialsSecret>({
    authType: s.optional(s.lazy(() => authType2Schema)),
    credentialsSecret: s.string(),
  });
