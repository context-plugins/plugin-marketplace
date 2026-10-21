import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefreshRequestParamConfHealthCheckAuthenticationOauthSecret = {
  /** Name */
  name: string;
  /** Value */
  value: string;
};

export const refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema: Schema<RefreshRequestParamConfHealthCheckAuthenticationOauthSecret> =
  s.object<RefreshRequestParamConfHealthCheckAuthenticationOauthSecret>({
    name: s.string(),
    value: s.string(),
  });
