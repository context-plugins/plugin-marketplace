import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authType10Schema, type AuthType10 } from "./auth-type10.js";

export type RedisAuthTypeNone = {
  /** Authentication method to use when connecting to Redis. */
  authType?: AuthType10;
};

export const redisAuthTypeNoneSchema: Schema<RedisAuthTypeNone> = s.object<RedisAuthTypeNone>({
  authType: s.optional(s.lazy(() => authType10Schema)),
});
