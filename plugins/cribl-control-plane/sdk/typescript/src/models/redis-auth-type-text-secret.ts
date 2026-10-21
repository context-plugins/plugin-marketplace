import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authType3Schema, type AuthType3 } from "./auth-type3.js";

export type RedisAuthTypeTextSecret = {
  /** Authentication method to use when connecting to Redis. */
  authType?: AuthType3;
  /** Secret that references Redis admin password */
  textSecret: string;
};

export const redisAuthTypeTextSecretSchema: Schema<RedisAuthTypeTextSecret> =
  s.object<RedisAuthTypeTextSecret>({
    authType: s.optional(s.lazy(() => authType3Schema)),
    textSecret: s.string(),
  });
