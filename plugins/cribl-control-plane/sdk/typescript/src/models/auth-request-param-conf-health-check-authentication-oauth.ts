import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthRequestParamConfHealthCheckAuthenticationOauth = {
  /** Parameter name. */
  name: string;
  /**
   * JavaScript expression to compute the parameter's value, normally enclosed in backticks (e.g.,
   * `${earliest}`). If a constant, use single quotes (e.g., 'earliest'). Values without delimiters
   * (e.g., earliest) are evaluated as strings.
   */
  value: string;
};

export const authRequestParamConfHealthCheckAuthenticationOauthSchema: Schema<AuthRequestParamConfHealthCheckAuthenticationOauth> =
  s.object<AuthRequestParamConfHealthCheckAuthenticationOauth>({
    name: s.string(),
    value: s.string(),
  });
