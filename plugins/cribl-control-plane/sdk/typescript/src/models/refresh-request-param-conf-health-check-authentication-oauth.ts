import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefreshRequestParamConfHealthCheckAuthenticationOauth = {
  /** Parameter name. */
  name: string;
  /** Parameter value. */
  value: string;
};

export const refreshRequestParamConfHealthCheckAuthenticationOauthSchema: Schema<RefreshRequestParamConfHealthCheckAuthenticationOauth> =
  s.object<RefreshRequestParamConfHealthCheckAuthenticationOauth>({
    name: s.string(),
    value: s.string(),
  });
