import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authType1Schema, type AuthType1 } from "./auth-type1.js";

export type RedisAuthTypeManual = {
  /** Authentication method to use when connecting to Redis. */
  authType?: AuthType1;
  /** Username for Redis authentication. */
  username?: string;
  /** Password for Redis authentication. */
  password: string;
  /**
   * Binds 'username' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'username' at runtime.
   */
  templateUsername?: string;
  /**
   * Binds 'password' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'password' at runtime.
   */
  templatePassword?: string;
};

export const redisAuthTypeManualSchema: Schema<RedisAuthTypeManual> = s.object<RedisAuthTypeManual>({
  authType: s.optional(s.lazy(() => authType1Schema)),
  username: s.optional(s.string()),
  password: s.string(),
  templateUsername: s.optional(s.string()),
  templatePassword: s.optional(s.string()),
  _keysMap: {
    templateUsername: "__template_username",
    templatePassword: "__template_password",
  },
});
